import React from "react";
import AddCircleIcon from "../../../components/icons/AddCircleIcon";
import ArrowRightIcon from "../../../components/icons/ArrowRightIcon";
import Button from "../../../components/Button/Button";
import { ButtonSize } from "../../../types/buttonTypes";
import {
  EntryWrapper,
  EntryContainer,
  EntryBlock,
  TextWrapper,
  InputsContainer,
  Input,
  ButtonContainer,
  ButtonText,
  GoToAnotherEntryBlock,
  LinkToAnotherEntry,
} from "../style";
import { Link } from "react-router-dom";

const SignUpPage = (): JSX.Element => {
  return (
    <EntryWrapper>
      <EntryContainer>
        <EntryBlock>
          <TextWrapper>Sign up</TextWrapper>
          <InputsContainer>
            <Input placeholder='E-mail' type='email' />
            <Input placeholder='Password' type='password' />
            <Input placeholder='Confirm password' type='password' />
          </InputsContainer>
          <ButtonContainer>
          <Link to={`/score-scout/sign-in`}>
            <Button primary={true} size={ButtonSize.S}>
              <ButtonText>
                Create account <AddCircleIcon size={24} color='#FFFFFF' />{" "}
              </ButtonText>
            </Button>
            </Link>
          </ButtonContainer>
        </EntryBlock>
        <GoToAnotherEntryBlock>
          <Link to={`/score-scout/sign-in`}>
            <LinkToAnotherEntry>I already have an account</LinkToAnotherEntry>
          </Link>
          <ArrowRightIcon size={30} color='#331515' />
        </GoToAnotherEntryBlock>
      </EntryContainer>
    </EntryWrapper>
  );
};

export default SignUpPage;
