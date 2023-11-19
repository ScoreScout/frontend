export enum TournamentStatus {
    InProgress = "In Progress",
    Finished = "Finished"
}

export interface Tournament {
  title: string;
  date: string;
  n_participants: number;
  n_games: number;
  status: TournamentStatus;
};

export interface TournamentCardProps {
  tournament: Tournament;
};
