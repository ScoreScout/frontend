import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { Bracket, FinishedMatchWithScore, Player } from "../../../types/bracketTypes";
import { initializeBracket, promoteToNextStage } from "../../../utils/bracketDistribution";
import { TournamentStageType } from "../../../types/tournamentTypes";

interface bracketState extends Bracket {
  viewOnly: boolean;
}

const initialState: bracketState = {
  type: TournamentStageType.Bracket,
  matches: [],
  stages: [],
  players: [],
  viewOnly: false,
};

export const bracketSlice = createSlice({
  name: "bracket",
  initialState,
  reducers: {
    setPlayers: (state, action: PayloadAction<{ playerNames: string[]; viewOnly: boolean }>) => {
      const players = action.payload.playerNames.map((name, i): Player => {
        return { name, id: i };
      });
      state = { ...initializeBracket(players), viewOnly: action.payload.viewOnly };

      return state;
    },
    setBracket: (state, action: PayloadAction<{ bracket: Bracket; viewOnly: boolean }>) => {
      state = { ...action.payload.bracket, viewOnly: action.payload.viewOnly };
      return state;
    },
    setViewOnly: (state, action: PayloadAction<{ viewOnly: boolean }>) => {
      state.viewOnly = action.payload.viewOnly;
      return state;
    },
    startMatch: (state, action: PayloadAction<number>) => {
      //	TODO: Check if match was initialized
      state.matches[action.payload].isStarted = true;
      return state;
    },
    finishMatch: (
      state,
      action: PayloadAction<{
        matchId: number;
        firstPlayerScore: number;
        secondPlayerScore: number;
      }>,
    ) => {
      //	TODO: Check if match was initialized
      const { matchId, firstPlayerScore, secondPlayerScore } = action.payload;
      const match = state.matches[matchId] as FinishedMatchWithScore;

      match.type = "withScore";
      match.isFinished = true;
      match.firstPlayerScore = firstPlayerScore;
      match.secondPlayerScore = secondPlayerScore;

      promoteToNextStage(state.stages, matchId, state.matches);

      return state;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setPlayers, setBracket, startMatch, finishMatch } = bracketSlice.actions;

export default bracketSlice.reducer;
