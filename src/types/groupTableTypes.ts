export interface Player {
  name: string;
  rating?: number;
}

export interface GroupTableProps {
  PlayerNames: Player[];
}

export interface PlayerRowProps {
  player: Player;
  numOfPlayers: number;
  rowIndex: number
}