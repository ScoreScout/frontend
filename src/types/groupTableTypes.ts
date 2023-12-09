export interface GroupTableProps {
  PlayerNames: string[];
}

export interface score {
  id?:string
}

export interface PlayerRowProps {
  player: string;
  numOfPlayers: number;
  rowIndex: number
  scores: score
  onScoreChange: (id: string, value: string) => void;
}

export interface styleProps {
  numPlayers: number;
}

export interface cellProps {
  rowIndex: number;
  cellIndex: number;
  numPlayers: number;
}