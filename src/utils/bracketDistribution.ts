import { store } from "../redux";
import { getMatchById } from "../redux/selectors/bracketSelectors";
import type { Bracket, Match, MatchWithPositions, Player, Stage } from "../types/bracketTypes";
import { TournamentStageType } from "../types/tournamentTypes";

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
  const onePlayerMatchIds: number[] = [];
  const matchesInFirstStage = Math.floor(positions.length / 2);
  for (let i = 0; i < stagesAmount; i++) {
    if (i === 0) {
      for (let j = 0; j < positions.length; j += 2) {
        const firstPlayer = players[positions[j] - 1];
        const secondPlayer = players[positions[j + 1] - 1];
        if (firstPlayer === undefined || secondPlayer === undefined) {
          matches.push({
            type: "onePlayer",
            firstPlayer,
            secondPlayer,
            isFinished: true,
            isStarted: true,
          });
          onePlayerMatchIds.push(matches.length - 1);
        } else {
          matches.push({
            type: "pending",
            firstPlayer,
            secondPlayer,
            isFinished: false,
            isStarted: false,
          });
        }
      }
    } else if (i === 1) {
      for (let j = 0; j < matchesInStage[i]; j++) {
        const matchId = matches.length;
        const prevMatchFirstId = (matchId - matchesInFirstStage) * 2;
        const prevMatchSecondId = prevMatchFirstId + 1;
        const prevMatchFirst = matches[prevMatchFirstId];
        const prevMatchSecond = matches[prevMatchSecondId];
        let firstPlayer;
        let secondPlayer;
        if (prevMatchFirst.type === "onePlayer") {
          firstPlayer = prevMatchFirst.firstPlayer ?? prevMatchFirst.secondPlayer;
        }
        if (matches[prevMatchSecondId].type === "onePlayer") {
          secondPlayer = prevMatchSecond.firstPlayer ?? prevMatchSecond.secondPlayer;
        }
        matches.push({
          type: "pending",
          firstPlayer,
          secondPlayer,
          isFinished: false,
          isStarted: false,
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
        });
      }
    }
  }

  const bracket: Bracket = { players, stages, matches, type: TournamentStageType.Bracket };
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
    // Remove matches from the first stage that do not have the first match
    .filter((positionedMatch) => {
      const match: Match = getMatchById(store.getState(), positionedMatch.matchId);
      return (
        (match.firstPlayer !== undefined && match.secondPlayer !== undefined) || stageNumber !== 1
      );
    });

  return positionedMatches;
}

export function promoteToNextStage(stages: Stage[], matchId: number, matches: Match[]): void {
  const prevMatch = matches[matchId];
  if (prevMatch.type !== "withScore") throw Error("previous match is of incorrect type");
  for (let i = 0; i < stages.length; i++) {
    if (stages[i].matchIds.includes(matchId)) {
      const startIdPlayedStage = stages[i].matchIds[0];
      const startIdNextStage = Number(stages[i].matchIds.at(-1)) + 1;
      const relativePositionPlayedMatch = matchId - startIdPlayedStage;
      const relativePositionNextMatch = Math.floor(relativePositionPlayedMatch / 2);
      const idNextMatch = startIdNextStage + relativePositionNextMatch;

      if (idNextMatch < matches.length) {
        const isFirstInNextMatch = relativePositionPlayedMatch % 2 === 0;
        const isFirstWon = prevMatch.firstPlayerScore > prevMatch.secondPlayerScore;
        const firstPlayer = matches[matchId].firstPlayer;
        const secondPlayer = matches[matchId].secondPlayer;
        const playerToPromote = isFirstWon ? firstPlayer : secondPlayer;
        if (isFirstInNextMatch) {
          matches[idNextMatch].firstPlayer = playerToPromote;
        } else {
          matches[idNextMatch].secondPlayer = playerToPromote;
        }
      }
      break;
    }
  }
}
