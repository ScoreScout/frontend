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
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../../redux/hooks";
import { getUser } from "../../../redux/selectors/userSelection";
import { setUserCredintials, signUp } from "../../../redux/slices/user/userSlice";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";

const SignUpPage = (): JSX.Element => {
  const user = useSelector(getUser);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onChange = (e): void => {
    dispatch(setUserCredintials({ [e.target.name]: e.target.value }));
  };
  const onSubmit = (e): void => {
    e.preventDefault();
    if (user.email === "") {
      toast.error("Plese write your email");
    } else if (user.password === "") {
      toast.error("Please write your password");
    } else if (user.rePassword === "") {
      toast.error("Please re-write your password");
    } else if (user.password !== user.rePassword) {
      toast.error("Passwords don't match");
    } else {
      dispatch(signUp(user))
        .then((ret) => {
          if (ret.type === "user/registerUser/fulfilled") {
            toast.success("You are registered successfully, check your email for activation link");
            navigate("/score-scout/sign-in");
          } else {
            toast.error(ret.payload);
          }
        })
        .catch((e) => {
          toast.error("Unknown error, please try again later");
        });
    }
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
            <Button primary={true} size={ButtonSize.S} disabled={user.signupState === "pending"}>
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
