import { createApi, fetchBaseQuery, retry } from "@reduxjs/toolkit/query/react";
import type { Tournament } from "../../../types/tournamentTypes";

const staggeredBaseQuery = retry(
  fetchBaseQuery({ baseUrl: "https://6f2d-188-130-155-160.ngrok-free.app/api/" }),
  {
    maxRetries: 0,
  },
);

const tournamentApi = createApi({
  reducerPath: "tournament",
  keepUnusedDataFor: 0, // Do we need to cache tournament state?
  refetchOnFocus: true,
  refetchOnReconnect: true,
  // refetchOnMountOrArgChange: true,
  baseQuery: staggeredBaseQuery,
  endpoints: (builder) => ({
    getTournament: builder.query<Tournament, { tournamentId: number }>({
      query: (args) => `tournaments/${args.tournamentId}`,
    }),
    updateTournament: builder.mutation({
      query: ({ tournamentId, ...body }) => ({
        url: `tournaments/${tournamentId}`,
        method: "POST",
        body,
      }),
      // invalidatesTags: (result, error, {tournamentId}) => [{type: "Tournament", tournamentId}],
      async onQueryStarted({ tournamentId, ...body }, { dispatch, queryFulfilled }) {
        const patchResult = dispatch(
          tournamentApi.util.updateQueryData("getTournament", { tournamentId }, (draft) =>
            Object.assign(draft, body),
          ),
        );
        try {
          await queryFulfilled;
        } catch {
          patchResult.undo();
        }
      },
    }),
  }),
});

export default tournamentApi;
export const { useGetTournamentQuery, useUpdateTournamentMutation } = tournamentApi;
