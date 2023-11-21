import type { Match, Stage } from "../../types/bracketTypes";
import type { RootState } from "../index";

export const getMatchById = (state: RootState, id: number): Match => {
  return state.bracket.matches[id];
};

export const getStages = (state: RootState): Stage[] => {
  return state.bracket.stages;
};
