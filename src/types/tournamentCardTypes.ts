export enum TournamentStatus {
  InProgress = "In Progress",
  Finished = "Finished",
}

export interface Tournament {
  title: string;
  date: string;
  amountPlayers: number;
  amountGamesPlayed: number;
  status: TournamentStatus;
}

export interface TournamentCardProps {
  tournament: Tournament;
}
