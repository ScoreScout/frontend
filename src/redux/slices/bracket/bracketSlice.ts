import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Bracket, Player } from "../../../types/bracketTypes";
import { initializeBracket } from "../../../utils/bracketDistribution";

export type bracketState = Bracket

const initialState: bracketState = { matches: [], stages: [], players: [] };

export const bracketSlice = createSlice({
	name: "bracket",
	initialState,
	reducers: {
		setPlayers: (state, action: PayloadAction<{ players: Player[] }>) => {
			state = { ...initializeBracket(action.payload.players) };
			return state
		},
		startMatch: (state, action: PayloadAction<number>) => {
			//TODO: Check if match was initialized
            state.matches[action.payload].isStarted = true;
			return state
		},
		finishMatch: (state, action: PayloadAction<number>) => {
			//TODO: Check if match was initialized
			const matchId = action.payload
            state.matches[matchId].isFinished = true;
			return state
		},
	},
});

// Action creators are generated for each case reducer function
export const { setPlayers, startMatch, finishMatch } = bracketSlice.actions;

// export const bracket = useSelector((state: RootState) => state.bracket);

export default bracketSlice.reducer