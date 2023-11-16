export enum TournamentStatus {
    InProgress = "In Progress",
    Finished = "Finished"
}

export type Tournament = {
  title: string;
  date: string;
  n_participants: number;
  n_games: number;
  status: TournamentStatus;
};

export type TournamentCardProps = {
  tournament: Tournament;
  children?: React.ReactNode;
  margin?: string;
};
