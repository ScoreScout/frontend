import { store } from "../redux";
import { getMatchById } from "../redux/selectors/bracketSelectors";
import type { Bracket, Match, MatchWithPositions, Player, Stage } from "../types/bracketTypes";

const isPowerOfTwo = (x: number): boolean => {
  while (x > 1) {
    if (x % 2 !== 0) return false;
    x /= 2;
  }
  return true;
};

export const sortPlayerPositioning = (len: number): number[] => {
  let firstLayer = [1, 0];
  let id = 2;
  while (id <= len) {
    if (isPowerOfTwo(id - 1) && id > 2) {
      const tmp: number[] = [];
      for (let i = 0; i < firstLayer.length; i++) {
        tmp.push(firstLayer[i]);
        tmp.push(0);
      }
      firstLayer = [...tmp];
    }
    let idx = 0;
    let mxValue = -1;
    for (let i = 0; i < firstLayer.length; i += 2) {
      if (firstLayer[i + 1] === 0 && firstLayer[i] > mxValue) {
        mxValue = firstLayer[i];
        idx = i + 1;
      }
    }
    firstLayer[idx] = id;
    id++;
  }
  return firstLayer;
};

function range(size: number, startAt = 0): number[] {
  return [...Array(size).keys()].map((i) => i + startAt);
}

function getMatchesInStage(playersAmount: number): number[] {
  const stagesAmount = Math.ceil(Math.log(playersAmount) / Math.log(2));

  const matchesInStage = Array.from(
    { length: stagesAmount },
    (_, i) => 2 ** (stagesAmount - 1) / 2 ** i,
  );

  return matchesInStage;
}

export function initializeBracket(players: Player[]): Bracket {
  const positions = sortPlayerPositioning(players.length);

  const matchesInStage = getMatchesInStage(players.length);

  const stagesAmount = matchesInStage.length;

  let startAt = 0;
  const stages: Stage[] = Array.from({ length: stagesAmount }, (_, i) => {
    const size = 2 ** (stagesAmount - i - 1);
    const stage = { matchIds: range(size, startAt) };
    startAt += size;
    return stage;
  });

  const matches: Match[] = [];
  for (let i = 0; i < stagesAmount; i++) {
    if (i === 0) {
      for (let j = 0; j < positions.length; j += 2) {
        matches.push({
          type: "pending",
          firstPlayer: players[positions[j] - 1],
          secondPlayer: players[positions[j + 1] - 1],
          isFinished: false,
          isStarted: false,
          isWithScore: false,
        });
      }
    } else {
      for (let j = 0; j < matchesInStage[i]; j++) {
        matches.push({
          type: "pending",
          firstPlayer: undefined,
          secondPlayer: undefined,
          isFinished: false,
          isStarted: false,
          isWithScore: false,
        });
      }
    }
  }

  const bracket: Bracket = { players, stages, matches };
  return bracket;
}

export function constructPositionedMatchesBasic(
  matchIds: number[],
  stageNumber: number,
): MatchWithPositions[] {
  const cellHeight = 2 ** stageNumber;
  const startingPosition = 1 + cellHeight / 2;

  const positionedMatches: MatchWithPositions[] = matchIds
    .map((matchId, i) => {
      const startPosition = startingPosition + 2 * cellHeight * i - 1;
      const middlePosition = startPosition + 1;
      const endPosition = middlePosition + cellHeight;

      return { matchId, startPosition, endPosition };
    })
    .filter((positionedMatch) => {
      const match: Match = getMatchById(store.getState(), positionedMatch.matchId);
      return (
        (match.firstPlayer !== undefined && match.secondPlayer !== undefined) || stageNumber !== 1
      );
    });
  // Remove matches from the first stage that do not have the first match

  return positionedMatches;
}

export function promoteToNextStage(stages: Stage[], matchId: number, matches: Match[]): void {
  for (let i = 0; i < stages.length; i++) {
    if (stages[i].matchIds.includes(matchId)) {
      const startIdxOfPlayedStage = stages[i].matchIds[0];
      const startIdxOfNextStage = Number(stages[i].matchIds.at(-1)) + 1;
      const relativePositionOfPlayedMatch = matchId - startIdxOfPlayedStage;
      const relativePositionOfNextMatch = Math.floor(relativePositionOfPlayedMatch / 2);
      const idxOfNextMatch = startIdxOfNextStage + relativePositionOfNextMatch;
      const isFirstInNextMatch = relativePositionOfPlayedMatch % 2 === 0;

      if (isFirstInNextMatch) {
        matches[idxOfNextMatch].firstPlayer = matches[matchId].firstPlayer;
      } else {
        matches[idxOfNextMatch].secondPlayer = matches[matchId].secondPlayer;
      }
    }
  }
}
