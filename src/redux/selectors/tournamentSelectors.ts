import { createSelector } from "@reduxjs/toolkit";
import type { RootState } from "../index";
import type { TournamentsState } from "../slices/tournament/tournamentSlice";

const selectTournaments = (state: RootState): TournamentsState => {
  return state.tournaments;
};

export const getActiveTournaments = createSelector(
  [selectTournaments],
  (tournamentsState) => {
    return tournamentsState.activeTournaments;
  },
);

export const getArchivedTournaments = createSelector(
  [selectTournaments],
  (tournamentsState) => {
    return tournamentsState.archivedTournaments;
  },
);
