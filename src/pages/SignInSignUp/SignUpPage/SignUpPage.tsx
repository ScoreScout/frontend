import React, { useEffect, useState } from "react";
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
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const SignUpPage = (): JSX.Element => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rePassword: "",
  });
  const navigate = useNavigate();
  const parms = useParams();

  const headers = {
    "Content-Type": "application/json",
  };
  useEffect(() => {
    if (parms.uid != null && parms.token != null) {
      const headers = {
        "Content-Type": "application/json",
      };
      const body = JSON.stringify({ uid: parms.uid, token: parms.token });
      axios
        .post("http://localhost:8000/auth/users/activation/", body, { headers })
        .then((res) => {
          navigate("/score-scout/sign-in");
        })
        .catch((e) => {
          if (e.response.data === "Stale token for given user.") {
            navigate("/score-scout/sign-in");
          }
        });
    }
  });

  const { email, password, rePassword } = formData;
  const onChange = (e): void => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const onSubmit = (e): void => {
    e.preventDefault();
    const body = JSON.stringify({ email, password, re_password: rePassword });
    axios
      .post(`http://localhost:8000/auth/users/`, body, { headers })
      .then((res) => {
        // TODO: handle success
        // you will get activation email
      })
      .catch((e) => {
        // TODO: handle failure
        // if (e.response.data)
        // check: e.response.data to find all errors
      });
  };
  return (
    <EntryWrapper>
      <EntryContainer>
        <EntryBlock onSubmit={onSubmit}>
          <TextWrapper>Sign up</TextWrapper>
          <InputsContainer>
            <Input placeholder='E-mail' type='email' name='email' onChange={onChange} />
            <Input placeholder='Password' type='password' name='password' onChange={onChange} />
            <Input
              placeholder='Confirm password'
              type='password'
              name='rePassword'
              onChange={onChange}
            />
          </InputsContainer>
          <ButtonContainer>
            <Button primary={true} size={ButtonSize.S}>
              <ButtonText>
                Create account <AddCircleIcon size={24} color='#FFFFFF' />{" "}
              </ButtonText>
            </Button>
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
