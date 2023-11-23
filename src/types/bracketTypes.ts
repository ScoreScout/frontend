export interface BracketProps {
  bracket: Bracket;
}

export interface WinnerProps {
  stageNumber: number;
}

export interface Bracket {
  players: Player[];
  stages: Stage[];
  matches: Match[];
}

export interface Player {
  name: string;
  rating?: number;
}

export interface PlaceWithPlayer {
  player: Player;
  place: number;
}

export interface FinishedMatchWithScore {
  type: 'withScore'
  firstPlayer: Player;
  secondPlayer: Player;
  isFinished: true;
  firstPlayerScore: number;
  secondPlayerScore: number;
  isStarted: true;
}

export interface FinishedMatchOnePlayer {
  type: 'onePlayer';
  firstPlayer?: Player;
  secondPlayer?: Player;
  isFinished: true;
  isStarted: true;
}

export interface PendingMatch {
  type: 'pending';
  firstPlayer?: Player;
  secondPlayer?: Player;
  isStarted: boolean;
  isFinished: false;
}

export type FinishedMatch = FinishedMatchWithScore | FinishedMatchOnePlayer;
export type Match = FinishedMatch | PendingMatch;

export interface Stage {
  matchIds: number[];
}

export interface StageProps {
  matchIds: number[];
  stageNumber: number;
}

export interface BracketMatchProps {
  matchId: number;
  startPosition: number;
  endPosition: number;
  stageNumber: number;
}

export interface MatchWithPositions {
  matchId: number;
  startPosition: number;
  endPosition: number;
}
