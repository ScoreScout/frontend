import React from "react";

import { type StageProps } from "../../../../types/createPageTabTypes";
import { ButtonSize } from "../../../../types/buttonTypes";
import Button from "../../../../components/Button/Button";
import Bracket from "../../../../components/Bracket/Bracket";

import {
  FirstStageWrapper,
  ChooseWayWrapper,
  ChooseTitle,
  ChooseWay,
  ButtonText,
  ChooseCompetitionConfigWrapper,
  TableChooseNumber,
  BracketSystemTypesWrapper,
  BracketSystemButtonText,
  BracketWrapper,
  NoPlayersText,
} from "./style";

import { TbTournament } from "react-icons/tb";
import { FaTableCells } from "react-icons/fa6";
import type { Player } from "../../../../types/bracketTypes";
import { CompetitionOptions } from "../../../../types/createPageTabTypes";

const FirstStage = ({
  players,
  optionChosen,
  handleOptionClick,
}: StageProps): React.JSX.Element => {
  const sortedPlayers: Player[] = [...players]
    .sort((a, b) => {
      return (b.rating ?? 0) - (a.rating ?? 0);
    })
    .map((player, index) => ({ ...player, id: index + 1 }));

  return (
    <>
      {players.length > 0 ? (
        <FirstStageWrapper>
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
            <>
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
              <BracketWrapper>
                {optionChosen === CompetitionOptions.BRACKET ? (
                  <Bracket playerNames={sortedPlayers.map((player) => player.name)} />
                ) : (
                  <></>
                )}
              </BracketWrapper>
            </>
          ) : (
            <></>
          )}
        </FirstStageWrapper>
      ) : (
        <NoPlayersText>You have no players yet. Please add players first.</NoPlayersText>
      )}
    </>
  );
};

export default FirstStage;
