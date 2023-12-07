import { createApi, fetchBaseQuery, retry } from "@reduxjs/toolkit/query/react";
import type { Tournament } from "../../../types/tournamentTypes";

const staggeredBaseQuery = retry(fetchBaseQuery({ baseUrl: "http://localhost:8099/api/" }), {
  maxRetries: 5,
});

const tournamentApi = createApi({
  reducerPath: "tournament",
  keepUnusedDataFor: 0, // Do we need to cache tournament state?
  refetchOnFocus: true,
  refetchOnReconnect: true,
  refetchOnMountOrArgChange: true,
  baseQuery: staggeredBaseQuery,
  endpoints: (builder) => ({
    getTournament: builder.query<Tournament, { tournamentId: number }>({
      query: (args) => `tournaments/${args.tournamentId}`,
    }),
  }),
});

export default tournamentApi;
export const { useGetTournamentQuery } = tournamentApi;
