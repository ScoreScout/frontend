import React from "react";
import {
  StyledTitle,
  StyledContainer,
  StyledDescription,
  StyledButtonsContainer,
  StyledStartButton,
} from "./style";
import Button from "../../components/Button/Button";
import { ButtonSize } from "../../types/buttonTypes";
import { Link } from "react-router-dom";

const HomePage = (): React.JSX.Element => {
  return (
    <StyledContainer>
      <StyledTitle>Score Scout</StyledTitle>
      <StyledDescription>
        On this website you can conduct tournaments for different sports.
      </StyledDescription>
      <StyledButtonsContainer>
      <Link to={`sign-in`}>
        <Button primary={false} size={ButtonSize.S} margin='0 1.5rem 0 0'>
          Sign in
        </Button>
        </Link>
        <Link to={`sign-up`}>
        <Button primary={true} size={ButtonSize.S}>
          Sign up
        </Button>
        </Link>
      </StyledButtonsContainer>
      <StyledStartButton>
      <Link to={`sign-up`}>
        <Button primary={true} size={ButtonSize.XL}>
          Start right now!
        </Button>
        </Link>
      </StyledStartButton>
    </StyledContainer>
  );
};

export default HomePage;
