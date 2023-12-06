import styled from "styled-components";

import { globalSemiBoldFontStyles } from "../../../../theme/FontStyles";

import { CompetitionOptions } from "../../../../types/createPageTabTypes";

const FirstStageWrapper = styled.div`
  padding: 5rem 6.25rem 0 6.25rem;
  display: flex;
  flex-direction: column;
`;

const ChooseWayWrapper = styled.div<{ optionchosen: CompetitionOptions }>`
  display: flex;
  flex-direction: column;
  gap: 1.875rem;
  margin-top: ${(props) => (props.optionchosen === CompetitionOptions.NONE ? "7.5rem" : 0)};
`;

const ChooseTitle = styled.div`
  ${globalSemiBoldFontStyles};
  color: ${(props) => props.theme.color.fontColor};
`;

const ChooseWay = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1.875rem;
`;

const ChooseCompetitionConfigWrapper = styled.div`
  margin-top: 3.75rem;
  display: flex;
  flex-direction: column;
  justify-content: left;
  gap: 1.875rem;
`;

const TableChooseNumber = styled.input`
  width: 5rem;
  height: 2.5rem;
  border-radius: 1rem;
  box-shadow: 0px 0px 2px 1px rgba(0, 0, 0, 0.25);
  border: 1.5px solid #aca4a2;
  white-space: nowrap;
  text-align: center;
  ${globalSemiBoldFontStyles};
  &:hover {
    cursor: pointer;
    box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.25);
  }
`;

const BracketSystemTypesWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1.875rem;
`;

const ButtonText = styled.div`
  ${globalSemiBoldFontStyles};
  font-size: 1.25rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 0.625rem;
  width: 8rem;
`;

const BracketSystemButtonText = styled(ButtonText)`
  width: none;
  font-size: 0.875rem;
  padding: 0;
  display: inline-block;
`;

const BracketWrapper = styled.div`
  display: flex;
  margin-top: 3.75rem;
  margin-bottom: 0.25rem;
  flex-direction: column;
  max-height: 20rem;
  max-width: 26rem;

  overflow-y: auto;
  overflow-x: auto;
  white-space: nowrap;

  &::-webkit-scrollbar {
    height: 0.5rem;
    width: 0.5rem;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #ccc;
    border-radius: 5px;
  }

  &::-webkit-scrollbar-track {
    background-color: ${(props) => props.theme.color.bgColor};
    border-radius: 5px;
  }
`;

const NoPlayersText = styled.div`
  margin-top: 12.5rem;
  color: ${(props) => props.theme.color.fontColor};
  ${globalSemiBoldFontStyles};
  padding-left: 6.25rem;
`;

export {
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
};
