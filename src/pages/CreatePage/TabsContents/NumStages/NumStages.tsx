import React from "react";

import {
  NumStagesWrapper,
  NumStagesTitle,
  StageBoxesContainer,
  StageBox,
  StageBoxTitle,
  StageBoxDescription,
} from "./style";

interface NumStagesProps {
  selectedOption: number | null;
  handleOptionClick: (option: number) => void;
}

const NumStages: React.FC<NumStagesProps> = ({ selectedOption, handleOptionClick }: NumStagesProps): React.ReactElement => {
  return (
    <NumStagesWrapper>
      <NumStagesTitle>Choose number of stages in your tournament</NumStagesTitle>
      <StageBoxesContainer>
        <StageBox
          onClick={() => { handleOptionClick(1); }}
          isSelected={selectedOption === 1}
        >
          <StageBoxTitle isSelected={selectedOption === 1}>1 stage</StageBoxTitle>
          <StageBoxDescription isSelected={selectedOption === 1}>
            You will have only one stage. It can be groups or bracket.{" "}
          </StageBoxDescription>
        </StageBox>
        <StageBox
          onClick={() => { handleOptionClick(2); }}
          isSelected={selectedOption === 2}
        >
          <StageBoxTitle isSelected={selectedOption === 2}>2 stages</StageBoxTitle>
          <StageBoxDescription isSelected={selectedOption === 2}>
            You will have two stages. First stage is groups, the second can be groups or bracket.
            You can have several finals.
          </StageBoxDescription>
        </StageBox>
      </StageBoxesContainer>
    </NumStagesWrapper>
  );
};

export default NumStages;
