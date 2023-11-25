import styled from "styled-components";
import { globalBoldFontStyles, globalRegularFontStyles } from "../../theme/FontStyles";

export const StyledModalOverlay = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;

  &:hover {
    cursor: default;
  }
`;

export const StyledModal = styled.form`
  width: 37rem;
  border-radius: 30px;
  background-color: ${(props) => props.theme.color.bgColor};
  padding: 2.5rem 1.25rem 1.25rem;
`;

export const StyledTitle = styled.div`
  width: 100%;
  ${globalBoldFontStyles}
  font-size: 1.6rem;
  color: ${(props) => props.theme.color.mainColor};
`;

export const StyledButtonContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const StyledButton = styled.button`
  width: 12.5rem;
  height: 2.5rem;
  background-color: ${(props) => props.theme.color.mainColor};
  ${globalBoldFontStyles}
  color: ${(props) => props.theme.color.bgColor};
  border-radius: 16px;
  outline: none;
  border: none;
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  gap: 0.62rem;
`;

export const StyledNamesContainer = styled.div`
  margin-top: 1.87rem;
  margin-bottom: 2.5rem;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  height: 2.5rem;
  gap: 1.25rem;
`;

export const StyledNameInputContainer = styled.div<{
  $reversed: boolean;
}>`
  display: flex;
  align-items: center;
  flex-direction: ${(props) => (props.$reversed ? "row-reverse" : "row")};
  justify-self: ${(props) => (props.$reversed ? "start" : "end")};
  text-align: ${(props) => (props.$reversed ? "start" : "end")};
  gap: 0.62rem;
`;

export const StyledPlayerName = styled.div`
  ${globalRegularFontStyles}
`;

export const StyledScoreInput = styled.input`
  width: 5rem;
  height: 2.5rem;
  border-radius: 16px;
  background-color: ${(props) => props.theme.color.bgColor};
  box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.25);
  outline: none;
  border: none;
  box-sizing: border-box;
  text-align: center;
`;
