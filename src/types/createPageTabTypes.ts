export enum CreatePageTabs {
  CHOOSE_RATING = "chooseRating",
  ADD_PLAYERS = "addPlayers",
  NUM_STAGES = "numStages",
  FIRST_STAGE = "firstStage",
  SECOND_STAGE = "secondStage",
}

export enum CompetitionOptions {
  TABLE = "Table",
  BRACKET = "Bracket",
  NONE = "None",
}

export interface AddPlayersProps {
  ratingToggleOn: boolean;
  players: any[];
  setPlayers: React.Dispatch<React.SetStateAction<any[]>>;
}

export interface NumStagesProps {
  selectedOption: number;
  handleOptionClick: (option: number) => void;
}

export interface StageProps {
  players: any[];
  optionChosen: CompetitionOptions;
  handleOptionClick: (option: CompetitionOptions) => void;
}
