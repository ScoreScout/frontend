import React, { useState } from "react";
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

const SignInPage = (): JSX.Element => {
  
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;
  const onChange = (e): void => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e): void => {
    e.preventDefault();
  };

  return (
    <EntryWrapper>
      <EntryContainer>
        <EntryBlock onSubmit={onSubmit}>
          <TextWrapper>Sign in</TextWrapper>
          <InputsContainer>
            <Input
              placeholder='E-mail'
              type='email'
              name='email'
              value={email}
              onChange={onChange}
            />
            <Input
              placeholder='Password'
              type='password'
              name='password'
              value={password}
              onChange={onChange}
            />
          </InputsContainer>
          <ButtonContainer>
            <Button primary={true} size={ButtonSize.S}>
              <ButtonText>
                Log in account <AddCircleIcon size={24} color='#FFFFFF' />{" "}
              </ButtonText>
            </Button>
          </ButtonContainer>
        </EntryBlock>
        <GoToAnotherEntryBlock>
          <Link to={`/score-scout/sign-up`}>
            <LinkToAnotherEntry>I don&apos;t have an account</LinkToAnotherEntry>
          </Link>
          <ArrowRightIcon size={30} color='#331515' />
        </GoToAnotherEntryBlock>
      </EntryContainer>
    </EntryWrapper>
  );
};

export default SignInPage;
