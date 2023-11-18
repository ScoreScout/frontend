import React from "react";
import {
  StyledTitle,
  StyledContianer,
  StyledDescription,
  StyledButtonsContainer,
  StyledStartButton,
} from "./style";
import Button from "../../components/Button/Button";
import { ButtonSize } from "../../types/buttonTypes";

const HomePage = (): React.JSX.Element => {
  return (
    <StyledContianer>
      <StyledTitle>Score Scout</StyledTitle>
      <StyledDescription>
        On this website you can conduct tournaments for different sports.
      </StyledDescription>
      <StyledButtonsContainer>
        <Button primary={false} size={ButtonSize.S} margin='0 1.5rem 0 0'>
          Sign in
        </Button>
        <Button primary={true} size={ButtonSize.S}>
          Sign up
        </Button>
      </StyledButtonsContainer>
      <StyledStartButton>
        <Button primary={true} size={ButtonSize.XL}>
          Start right now!
        </Button>
      </StyledStartButton>
    </StyledContianer>
  );
};

export default HomePage;
