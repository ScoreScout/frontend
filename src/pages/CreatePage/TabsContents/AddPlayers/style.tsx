import styled from "styled-components";
import {
  globalRegularFontStyles,
  globalMediumFontStyles,
  globalSemiBoldFontStyles,
} from "../../../../theme/FontStyles";

const AddPlayersWrapper = styled.div`
  padding: 7.5rem 1.25rem 0 6.25rem;
  display: flex;
  flex-direction: row;
  gap: 6rem;
`;

const AddPlayersContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  gap: 1.25rem;
  margin-top: 4.375rem;
`;

const AddPLayersTitle = styled.div`
  ${globalSemiBoldFontStyles};
  color: ${(props) => props.theme.color.mainColor};
`;

const PlayersTableContainer = styled.div`
  width: 26rem;
  height: 28rem;
`;

const TableColumnName = styled.div`
  ${globalSemiBoldFontStyles};
  color: ${(props) => props.theme.color.mainColor};
`;

const TableLine = styled.div`
  margin-left: 2rem;
  border-radius: 0.325rem;
  height: 0.625rem;
  background-color: ${(props) => props.theme.color.secondaryBgColor};
`;

const ColumnNamesContainer = styled.div`
  padding-left: 2rem;
  padding-right: 0.625rem;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  margin-bottom: 0.3rem;
`;

const TableContainer = styled.div`
  display: flex;
  margin-top: 0.625rem;
  margin-bottom: 0.625rem;
  flex-direction: column;
  padding-right: 0.625rem;
  max-height: 28rem;
  max-width: 26rem;

  overflow-y: auto;
  overflow-x: auto;
  white-space: nowrap;

  &::-webkit-scrollbar {
    height: 0.5rem;
    width: 0;
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

const TableRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: 0.625rem;
  margin-top: 0.8rem;
`;

const TableIndex = styled.span`
  ${globalRegularFontStyles};
  color: ${(props) => props.theme.color.notActiveColor};
  margin-right: 0.625rem;
`;

const TablePlayerName = styled.span`
  ${globalRegularFontStyles};
  color: ${(props) => props.theme.color.fontColor};
`;

const TableRating = styled.span`
  ${globalSemiBoldFontStyles};
  color: ${(props) => props.theme.color.fontColor};
`;

const AddPlayersInput = styled.input`
  width: 19rem;
  height: 2.5rem;
  border: 1.5px solid #aca4a2;
  white-space: nowrap;
  padding: 0;
  padding-left: 1.125rem;
  ${globalRegularFontStyles}

  box-shadow: 0px 0px 2px 1px rgba(0, 0, 0, 0.25);
  border-radius: 1rem;
  padding-left: 1rem;

  &:hover {
    cursor: pointer;
    box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.25);
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  width: 8.75rem;
  margin-top: 0.625rem;
`;

const ButtonText = styled.div`
  justify-content: center;
  ${globalMediumFontStyles}
  font-size: 1rem;
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
`;

const CsvBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.625rem;
  margin-top: 0.625rem;
`;

const CsvText = styled.div`
  ${globalRegularFontStyles}
  color: ${(props) => props.theme.color.fontColor};
`;

export {
  AddPlayersWrapper,
  AddPlayersContainer,
  PlayersTableContainer,
  AddPlayersInput,
  AddPLayersTitle,
  ButtonContainer,
  ButtonText,
  CsvBox,
  CsvText,
  TableColumnName,
  ColumnNamesContainer,
  TableContainer,
  TableRow,
  TableIndex,
  TablePlayerName,
  TableRating,
  TableLine,
};
