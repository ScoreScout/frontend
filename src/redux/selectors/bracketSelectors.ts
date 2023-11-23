import type { Match, PlaceWithPlayer, Player, Stage } from "../../types/bracketTypes";
import type { RootState } from "../index";

export const getMatchById = (state: RootState, id: number): Match => {
  return state.bracket.matches[id];
};

export const getStages = (state: RootState): Stage[] => {
  return state.bracket.stages;
};

export const getWinner = (state: RootState): Player | undefined => {
  const lastStage: Stage = state.bracket.stages[state.bracket.stages.length - 1];
  const finalMatchId = lastStage.matchIds[0];
  const finalMatch = state.bracket.matches[finalMatchId];
  if (finalMatch.type === "withScore") {
    if (finalMatch.firstPlayerScore > finalMatch.secondPlayerScore) {
      return finalMatch.firstPlayer;
    } else {
      return finalMatch.secondPlayer;
    }
  }
  return undefined;
};

export const getPlayersDistribution = (state: RootState): PlaceWithPlayer[] => {
  const stages = [...state.bracket.stages].reverse();
  const matches = state.bracket.matches;
  const rankedPlayers : PlaceWithPlayer[] = []
  let topPlace = 1;
  let placesDif = 1
  
  const lastStage = stages[0];
  const matchIdInLastStage = lastStage.matchIds[0];
  const lastMatch = matches[matchIdInLastStage];
  if (lastMatch.type === 'withScore') {
    const isFirstLost = lastMatch.firstPlayerScore < lastMatch.secondPlayerScore;
    const wonPlayer = isFirstLost ? lastMatch.secondPlayer : lastMatch.firstPlayer;
    rankedPlayers.push({player: wonPlayer, place: topPlace});
  } 

  topPlace += placesDif;

  stages.forEach((stage) => {
    placesDif = 0
    stage.matchIds.forEach((matchId) => {
      const match = matches[matchId];
      if (match.type === 'withScore') {
        const isFirstLost = match.firstPlayerScore < match.secondPlayerScore;
        const lostPlayer = isFirstLost ? match.firstPlayer : match.secondPlayer;
        rankedPlayers.push({player: lostPlayer, place: topPlace});
        placesDif += 1
      } 
    });
    topPlace += placesDif;
  });

  return rankedPlayers;
};
