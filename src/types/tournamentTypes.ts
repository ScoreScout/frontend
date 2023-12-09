import type { Bracket } from "./bracketTypes";

export enum TournamentStageType {
  Bracket = "Bracket",
  Group = "Group",
}

export interface Player {
  name: string;
  rating?: number;
}

export interface FirstStage extends Bracket {}

export interface Tournament {
  title: string;
  date: string;
  amountGamesPlayed: number;
  isFinished: boolean;
  isRatingSystem: boolean;
  players: Player[];
  firstStage: FirstStage;
}
