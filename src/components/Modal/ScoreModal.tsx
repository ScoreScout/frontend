import React from "react";
import {
  StyledButton,
  StyledButtonContainer,
  StyledModal,
  StyledModalOverlay,
  StyledNameInputContainer,
  StyledNamesContainer,
  StyledPlayerName,
  StyledScoreInput,
  StyledTitle,
} from "./style";
import ConfirmIcon from "../icons/ConfirmIcon";
import { theme } from "../../theme/Theme";

const ScoreModal = (): React.JSX.Element => {
  return (
    <StyledModalOverlay>
      <StyledModal>
        <StyledTitle>Write the score</StyledTitle>
        <StyledNamesContainer>
          <StyledNameInputContainer $reversed={false}>
            <StyledPlayerName>Abdurakhmon Abdukhamidov</StyledPlayerName>
            <StyledScoreInput />
          </StyledNameInputContainer>
          <StyledNameInputContainer $reversed={true}>
            <StyledPlayerName>Anvar Iskhakov</StyledPlayerName>
            <StyledScoreInput />
          </StyledNameInputContainer>
        </StyledNamesContainer>
        <StyledButtonContainer>
          <StyledButton>
            Confirm
            <ConfirmIcon size={"1.5rem"} color={theme.color.bgColor} />
          </StyledButton>
        </StyledButtonContainer>
      </StyledModal>
    </StyledModalOverlay>
  );
};

export default ScoreModal;
