import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { Tournament } from "../../../types/tournamentCardTypes";

export const fetchActiveTournaments = createAsyncThunk(
  "tournaments/fetchActive",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch("/api/tournaments/active");
      const data = await response.json();
      if (!response.ok || data.ok !== true || data.data === undefined) {
        return rejectWithValue(
          "An error occured while fetching active tournaments. Please try to refresh the page",
        );
      }
      return data.data;
    } catch (error) {
      return rejectWithValue(
        "An error occured while fetching active tournaments. Please try to refresh the page",
      );
    }
  },
);

export const fetchArchivedTournaments = createAsyncThunk(
  "tournaments/fetchArchived",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch("/api/tournaments/archived");
      const data = await response.json();
      if (!response.ok || (data.ok !== true) === undefined) {
        return rejectWithValue(
          "An error occured while fetching archived tournaments. Please try to refresh the page",
        );
      }
      return data.data;
    } catch (error) {
      return rejectWithValue(
        "An error occured while fetching archived tournaments. Please try to refresh the page",
      );
    }
  },
);

export const addTournament = createAsyncThunk(
  "tournaments/addTournament",
  async (tournament: Tournament) => {
    // You can perform any async logic here if needed
    return tournament;
  },
);

export interface TournamentsState {
  activeTournaments: Tournament[];
  archivedTournaments: Tournament[];
  isLoadingActive: boolean;
  isLoadingArchived: boolean;
  // TODO: Change any to a known type
  errorActive: any;
  errorArchived: any;
}

const initialState: TournamentsState = {
  activeTournaments: [],
  archivedTournaments: [],
  isLoadingActive: false,
  isLoadingArchived: false,
  errorActive: null,
  errorArchived: null,
};

export const TournamentsSlice = createSlice({
  name: "tournaments",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchActiveTournaments.fulfilled, (state, action) => {
        state.activeTournaments = action.payload;
        state.isLoadingActive = false;
        state.errorActive = null;
      })
      .addCase(fetchActiveTournaments.pending, (state) => {
        state.isLoadingActive = true;
        state.errorActive = null;
      })
      .addCase(fetchActiveTournaments.rejected, (state, action) => {
        state.isLoadingActive = false;
        state.errorActive = action.payload;
      })
      .addCase(fetchArchivedTournaments.fulfilled, (state, action) => {
        state.archivedTournaments = action.payload;
        state.isLoadingArchived = false;
        state.errorArchived = null;
      })
      .addCase(fetchArchivedTournaments.pending, (state) => {
        state.isLoadingArchived = true;
        state.errorArchived = null;
      })
      .addCase(fetchArchivedTournaments.rejected, (state, action) => {
        state.isLoadingArchived = false;
        state.errorArchived = action.payload;
      })
      .addCase(addTournament.fulfilled, (state, action) => {
        state.activeTournaments.push(action.payload);
      })
      .addCase(addTournament.rejected, (state, action) => {
        state.errorActive = action.payload;
      })
      .addCase(addTournament.pending, (state) => {
        state.errorActive = null;
      })
      ;
  },
});

export const selectActiveTournaments = (state: TournamentsState): Tournament[] =>
  state.activeTournaments;
export const selectArchivedTournaments = (state: TournamentsState): Tournament[] =>
  state.archivedTournaments;

export default TournamentsSlice.reducer;
