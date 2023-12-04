export enum CreatePageTabs {
  CHOOSE_RATING = "chooseRating",
  ADD_PLAYERS = "addPlayers",
  NUM_STAGES = "numStages",
  FIRST_STAGE = "firstStage",
  SECOND_STAGE = "secondStage",
}

export interface NumStagesProps {
  selectedOption: number | null;
  handleOptionClick: (option: number) => void;
}