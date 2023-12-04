export interface Player {
  name: string;
  rating?: number;
}

export interface AddPlayersProps {
  ratingToggleOn: boolean;
  players: any[];
  setPlayers: React.Dispatch<React.SetStateAction<any[]>>;
}
