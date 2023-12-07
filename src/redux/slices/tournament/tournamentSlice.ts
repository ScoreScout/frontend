import { type PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { Tournament } from "../../../types/tournamentCardTypes";

export const fetchActiveTournaments = createAsyncThunk(
  "tournaments/fetchActive",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch("/api/tournaments/active");
      const data = await response.json();
      if (!response.ok)
        throw new Error("Network response was not ok while fetching active tournaments");
      return data.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const fetchArchivedTournaments = createAsyncThunk(
  "tournaments/fetchArchived",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch("/api/tournaments/archived");
      if (!response.ok)
        throw new Error("Network response was not ok while fetching archived tournaments");
      const data = await response.json();
      return data.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export interface TournamentsState {
  activeTournaments: Tournament[];
  archivedTournaments: Tournament[];
}

const initialState: TournamentsState = {
  activeTournaments: [],
  archivedTournaments: [],
};

export const TournamentsSlice = createSlice({
  name: "tournaments",
  initialState,
  reducers: {
    addActiveTournament: (state, action: PayloadAction<Tournament>) => {
      state.activeTournaments.push({
        title: action.payload.title,
        date: action.payload.date,
        amountPlayers: action.payload.amountPlayers,
        amountGamesPlayed: action.payload.amountGamesPlayed,
        status: action.payload.status,
      });
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchActiveTournaments.fulfilled, (state, action) => {
        state.activeTournaments = action.payload;
      })
      .addCase(fetchArchivedTournaments.fulfilled, (state, action) => {
        state.archivedTournaments = action.payload;
      });
  },
});

export const selectActiveTournaments = (state: TournamentsState): Tournament[] =>
  state.activeTournaments;
export const selectArchivedTournaments = (state: TournamentsState): Tournament[] =>
  state.archivedTournaments;

export default TournamentsSlice.reducer;
