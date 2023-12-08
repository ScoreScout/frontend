import { createSelector } from "@reduxjs/toolkit";
import type { RootState } from "../index";
import type { TournamentsState } from "../slices/tournament/tournamentSlice";

const selectTournaments = (state: RootState): TournamentsState => {
  return state.tournaments;
};

export const getActiveTournamentsState = createSelector([selectTournaments], (tournamentsState) => {
  return {
    tournaments: tournamentsState.activeTournaments,
    isLoading: tournamentsState.isLoadingActive,
    error: tournamentsState.errorActive,
  };
});

export const getArchivedTournamentsState = createSelector(
  [selectTournaments],
  (tournamentsState) => {
    return {
      tournaments: tournamentsState.archivedTournaments,
      isLoading: tournamentsState.isLoadingArchived,
      error: tournamentsState.errorArchived,
    };
  },
);
