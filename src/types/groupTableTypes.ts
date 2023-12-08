export interface Player {
  name: string;
  rating?: number;
}

export interface GroupTableProps {
  PlayerNames: Player[];
}

interface score {
  id?:string
}

export interface PlayerRowProps {
  player: Player;
  numOfPlayers: number;
  rowIndex: number
  scores: score
  onScoreChange: (id: string, value: string) => void;
}