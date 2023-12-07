import React, { Fragment } from "react";
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
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { getUser } from "../../redux/selectors/userSelection";
import { logout } from "../../redux/slices/user/userSlice";
import { useCookies } from "react-cookie";

const HomePage = (): React.JSX.Element => {
  const [, , removeCookie] = useCookies(["access", "refresh"]);
  const user = useAppSelector(getUser);
  const dispatch = useAppDispatch();
  return (
    <StyledContainer>
      <StyledTitle>Score Scout</StyledTitle>
      <StyledDescription>
        On this website you can conduct tournaments for different sports.
      </StyledDescription>
      <StyledButtonsContainer>
        {user.accessToken != null && user.accessToken !== "" ? (
          <Fragment>
            <Button
              primary={false}
              size={ButtonSize.S}
              margin='0 1.5rem 0 0'
              onClick={() => {
                removeCookie("access", { path: "/" });
                removeCookie("refresh", { path: "/" });
                dispatch(logout());
              }}
            >
              Logout
            </Button>
            <Link to={`profile`}>
              <Button primary={true} size={ButtonSize.S}>
                Profile
              </Button>
            </Link>
          </Fragment>
        ) : (
          <Fragment>
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
          </Fragment>
        )}
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
