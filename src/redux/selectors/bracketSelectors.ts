import { RootState } from "../index";

export const getMatchById = (state: RootState, id: number) => {
	return state.bracket.matches[id];
};

export const getStages = (state: RootState) => {
    return state.bracket.stages;
};
