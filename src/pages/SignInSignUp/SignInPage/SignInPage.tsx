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
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { getUser } from "../../../redux/selectors/userSelection";
import { signIn, setUserCredintials } from "../../../redux/slices/user/userSlice";
import { useCookies } from "react-cookie";
import { toast } from "react-toastify";

const SignInPage = (): JSX.Element => {
  const user = useAppSelector(getUser);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const onChange = (e): void => {
    dispatch(setUserCredintials({ [e.target.name]: e.target.value }));
  };
  const [, setCookies] = useCookies(["access", "refresh"]);

  const onSubmit = (e): void => {
    e.preventDefault();
    dispatch(signIn(user))
      .then((res) => {
        setCookies("access", res.payload.access, { path: "/" });
        setCookies("refresh", res.payload.refresh, { path: "/" });
        dispatch(
          setUserCredintials({
            accessToken: res.payload.access,
            refreshToken: res.payload.refresh,
          }),
        );
        if (res.type === "user/loginUser/rejected") {
          toast.error(res.payload);
        } else {
          navigate("/score-scout");
          toast.success("Welcome back");
        }
      })
      .catch((e) => {
        toast.error("Unknow error occured");
      });
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
              onChange={onChange}
              data-testid='email'
            />
            <Input placeholder='Password' type='password' name='password' onChange={onChange} />
          </InputsContainer>
          <ButtonContainer>
            <Button primary={true} size={ButtonSize.S}>
              <ButtonText>
                Log in account <AddCircleIcon size={"24px"} color='#FFFFFF' />{" "}
              </ButtonText>
            </Button>
          </ButtonContainer>
        </EntryBlock>
        <GoToAnotherEntryBlock>
          <Link to={`/score-scout/sign-up`}>
            <LinkToAnotherEntry>I don&apos;t have an account</LinkToAnotherEntry>
          </Link>
          <ArrowRightIcon size={"30px"} color='#331515' />
        </GoToAnotherEntryBlock>
      </EntryContainer>
    </EntryWrapper>
  );
};

export default SignInPage;
