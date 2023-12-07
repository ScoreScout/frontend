interface Player {
  firstName: string;
  lastName: string;
}

export interface GroupTableProps {
  PlayerNames: Player[];
}

export interface PlayerRowProps {
  player: Player;
  numOfPlayers: number;
}