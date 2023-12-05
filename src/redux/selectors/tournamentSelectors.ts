import { createSelector } from "@reduxjs/toolkit";
import type { RootState } from "../index";
import type { TournamentsState } from "../slices/tournament/tournamentSlice";

const selectActiveTournaments = (state: RootState): TournamentsState => {
  return state.tournaments;
};

const selectArchivedTournaments = (state: RootState): TournamentsState => {
  return state.tournaments;
};

export const getActiveTournaments = createSelector(
  [selectActiveTournaments],
  (tournamentsState) => {
    return tournamentsState.activeTournaments;
  },
);

export const getArchivedTournaments = createSelector(
  [selectArchivedTournaments],
  (tournamentsState) => {
    return tournamentsState.archivedTournaments;
  },
);
