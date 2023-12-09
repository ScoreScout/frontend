import type { Player } from "./bracketTypes";

export enum CreatePageTabs {
  CHOOSE_RATING = "chooseRating",
  ADD_PLAYERS = "addPlayers",
  NUM_STAGES = "numStages",
  FIRST_STAGE = "firstStage",
  SECOND_STAGE = "secondStage",
  TOURNAMENT_TITLE = "tournamentTitle",
}

export enum CompetitionOptions {
  TABLE = "Table",
  BRACKET = "Bracket",
  NONE = "None",
}

export interface AddPlayersProps {
  ratingToggleOn: boolean;
  players: Player[];
  setPlayers: React.Dispatch<React.SetStateAction<Player[]>>;
}

export interface NumStagesProps {
  selectedOption: number;
  handleOptionClick: (option: number) => void;
}

export interface StageProps {
  players: Player[];
  optionChosen: CompetitionOptions;
  handleOptionClick: (option: CompetitionOptions) => void;
}
