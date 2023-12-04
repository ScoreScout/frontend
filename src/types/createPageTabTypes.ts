export enum CreatePageTabs {
  CHOOSE_RATING = "chooseRating",
  ADD_PLAYERS = "addPlayers",
  NUM_STAGES = "numStages",
  FIRST_STAGE = "firstStage",
  SECOND_STAGE = "secondStage",
}

export interface AddPlayersProps {
  ratingToggleOn: boolean;
  players: any[];
  setPlayers: React.Dispatch<React.SetStateAction<any[]>>;
}

export interface NumStagesProps {
  selectedOption: number | null;
  handleOptionClick: (option: number) => void;
}

export interface StageProps {
  players: any[];
  numStages: number | null;
  ratingToggleOn: boolean;
}
