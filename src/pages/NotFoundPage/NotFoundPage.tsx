import React from "react";
import { StyledNotFound, NotFoundContainer } from "./stlye";
import Button from "../../components/Button/Button";
import { ButtonSize } from "../../types/buttonTypes";
import { Link } from "react-router-dom";

const NotFoundPage = (): React.JSX.Element => {
  return (
    <StyledNotFound>
      <NotFoundContainer>
        <h1>Opps!</h1>
        <h2>404 - PAGE NOT FOUND</h2>
        <p>The page you are looking for might have been removed or is temporarily unavailable</p>
        <Link to='/score-scout'>
          <Button primary={true} size={ButtonSize.XL}>
            GO TO HOME PAGE
          </Button>
        </Link>
      </NotFoundContainer>
    </StyledNotFound>
  );
};

export default NotFoundPage;
