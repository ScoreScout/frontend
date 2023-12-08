import { createSelector } from "@reduxjs/toolkit";
import type {
  Bracket,
  FinishedMatch,
  Match,
  PlaceWithPlayer,
  Player,
  Stage,
} from "../../types/bracketTypes";
import type { RootState } from "../index";

export const getMatchById = (state: RootState, id: number): Match => {
  return state.bracket.matches[id];
};

export const getStages = (state: RootState): Stage[] => {
  return state.bracket.stages;
};

export const getBracket = (state: RootState): Bracket => state.bracket;

export const getViewOnly = (state: RootState): boolean => state.bracket.viewOnly;

export const getPrevMatches = createSelector(
  [getBracket, (getBracket, matchId: number) => matchId],
  (
    bracket,
    matchId: number,
  ): { firstPlayerMatch?: FinishedMatch; secondPlayerMatch?: FinishedMatch } => {
    const stages = bracket.stages;
    let firstPlayerMatch: FinishedMatch | undefined;
    let secondPlayerMatch: FinishedMatch | undefined;
    for (let i = 1; i < stages.length; i++) {
      if (stages[i].matchIds.includes(matchId)) {
        const startIdCurrentStage = stages[i].matchIds[0];
        const startIdPrevStage = stages[i - 1].matchIds[0];
        const relativePositionCurrentMatch = matchId - startIdCurrentStage;
        const relativePositionPrevMatchFirst = relativePositionCurrentMatch * 2;
        const relativePositionPrevMatchSecond = relativePositionCurrentMatch * 2 + 1;
        const idPrevMatchFirst = startIdPrevStage + relativePositionPrevMatchFirst;
        const idPrevMatchSecond = startIdPrevStage + relativePositionPrevMatchSecond;

        const firstMatch = bracket.matches[idPrevMatchFirst];
        const secondMatch = bracket.matches[idPrevMatchSecond];
        if (firstMatch.type !== "pending") firstPlayerMatch = firstMatch;
        if (secondMatch.type !== "pending") secondPlayerMatch = secondMatch;

        return { firstPlayerMatch, secondPlayerMatch };
      }
    }
    return { firstPlayerMatch, secondPlayerMatch };
  },
);

export const getFinalMatch = createSelector([getBracket], (bracket): Match => {
  const lastStage: Stage = bracket.stages[bracket.stages.length - 1];
  const finalMatchId = lastStage.matchIds[0];
  const finalMatch = bracket.matches[finalMatchId];
  return finalMatch;
});

export const getWinner = createSelector([getFinalMatch], (finalMatch): Player | undefined => {
  if (finalMatch.type === "withScore") {
    if (finalMatch.firstPlayerScore > finalMatch.secondPlayerScore) {
      return finalMatch.firstPlayer;
    } else {
      return finalMatch.secondPlayer;
    }
  }
  return undefined;
});

export const getPlayersDistribution = (state: RootState): PlaceWithPlayer[] => {
  const stages = [...state.bracket.stages].reverse();
  const matches = state.bracket.matches;
  const rankedPlayers: PlaceWithPlayer[] = [];
  let topPlace = 1;
  let placesDif = 1;

  const lastStage = stages[0];
  const matchIdInLastStage = lastStage.matchIds[0];
  const lastMatch = matches[matchIdInLastStage];
  if (lastMatch.type === "withScore") {
    const isFirstLost = lastMatch.firstPlayerScore < lastMatch.secondPlayerScore;
    const wonPlayer = isFirstLost ? lastMatch.secondPlayer : lastMatch.firstPlayer;
    rankedPlayers.push({ player: wonPlayer, place: topPlace });
  }

  topPlace += placesDif;

  stages.forEach((stage) => {
    placesDif = 0;
    stage.matchIds.forEach((matchId) => {
      const match = matches[matchId];
      if (match.type === "withScore") {
        const isFirstLost = match.firstPlayerScore < match.secondPlayerScore;
        const lostPlayer = isFirstLost ? match.firstPlayer : match.secondPlayer;
        rankedPlayers.push({ player: lostPlayer, place: topPlace });
        placesDif += 1;
      }
    });
    topPlace += placesDif;
  });

  return rankedPlayers;
};
