import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { Bracket, FinishedMatchWithScore, Player } from "../../../types/bracketTypes";
import { initializeBracket, promoteToNextStage } from "../../../utils/bracketDistribution";

export type bracketState = Bracket;

const initialState: bracketState = { matches: [], stages: [], players: [] };

export const bracketSlice = createSlice({
  name: "bracket",
  initialState,
  reducers: {
    setPlayers: (state, action: PayloadAction<{ players: Player[] }>) => {
      state = { ...initializeBracket(action.payload.players) };
      return state;
    },
    startMatch: (state, action: PayloadAction<number>) => {
      //	TODO: Check if match was initialized
      state.matches[action.payload].isStarted = true;
      return state;
    },
    finishMatch: (state, action: PayloadAction<{ matchId: number }>) => {
      //	TODO: Check if match was initialized
      const { matchId } = action.payload;
      const match = state.matches[matchId] as FinishedMatchWithScore;
      match.type = "withScore";
      match.isFinished = true;
      match.firstPlayerScore = 2;
      match.secondPlayerScore = 0;

      promoteToNextStage(state.stages, matchId, state.matches);

      return state;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setPlayers, startMatch, finishMatch } = bracketSlice.actions;

export default bracketSlice.reducer;
