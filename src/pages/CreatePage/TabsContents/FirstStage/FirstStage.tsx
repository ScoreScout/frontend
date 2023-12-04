import React, { useState } from "react";

import { type StageProps } from "../../../../types/createPageTabTypes";
import { ButtonSize } from "../../../../types/buttonTypes";
import Button from "../../../../components/Button/Button";

import {
  AddPlayersWrapper,
  ChooseWayWrapper,
  ChooseTitle,
  ChooseWay,
  ButtonText,
  ChooseCompetitionConfigWrapper,
  TableChooseNumber,
  BracketSystemTypesWrapper,
  BracketSystemButtonText,
} from "./style";

import { TbTournament } from "react-icons/tb";
import { FaTableCells } from "react-icons/fa6";

enum CompetitionOptions {
  TABLE = "Table",
  BRACKET = "Bracket",
  NONE = "None",
}

const FirstStage = ({ players, numStages, ratingToggleOn }: StageProps): React.JSX.Element => {
  const [optionChosen, setOptionChosen] = useState<CompetitionOptions>(CompetitionOptions.NONE);

  const handleOptionClick = (option: CompetitionOptions): void => {
    setOptionChosen(option);
  };

  return (
    <AddPlayersWrapper>
      <ChooseWayWrapper optionchosen={optionChosen}>
        <ChooseTitle>Choose how you want to conduct competition</ChooseTitle>
        <ChooseWay>
          <Button
            primary={optionChosen === CompetitionOptions.TABLE}
            size={ButtonSize.S}
            onClick={() => {
              handleOptionClick(CompetitionOptions.TABLE);
            }}
          >
            <ButtonText>
              <FaTableCells />
              Table
            </ButtonText>
          </Button>
          <Button
            primary={optionChosen === CompetitionOptions.BRACKET}
            size={ButtonSize.S}
            onClick={() => {
              handleOptionClick(CompetitionOptions.BRACKET);
            }}
          >
            <ButtonText>
              <TbTournament />
              Bracket
            </ButtonText>
          </Button>
        </ChooseWay>
      </ChooseWayWrapper>
      {optionChosen === CompetitionOptions.TABLE ? (
        <ChooseCompetitionConfigWrapper>
          <ChooseTitle>How many groups do you want?</ChooseTitle>
          <TableChooseNumber type='text' />
        </ChooseCompetitionConfigWrapper>
      ) : optionChosen === CompetitionOptions.BRACKET ? (
        <ChooseCompetitionConfigWrapper>
          <ChooseTitle>Choose system for bracket</ChooseTitle>
          <BracketSystemTypesWrapper>
            <Button primary={true} size={ButtonSize.S}>
              <BracketSystemButtonText>Single elimination</BracketSystemButtonText>
            </Button>
            <Button primary={false} size={ButtonSize.S}>
              <BracketSystemButtonText>Double elimination</BracketSystemButtonText>
            </Button>
            <Button primary={false} size={ButtonSize.S}>
              <BracketSystemButtonText>Swiss system</BracketSystemButtonText>
            </Button>
          </BracketSystemTypesWrapper>
        </ChooseCompetitionConfigWrapper>
      ) : (
        <></>
      )}
    </AddPlayersWrapper>
  );
};

export default FirstStage;
