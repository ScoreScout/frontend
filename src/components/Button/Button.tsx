import React from "react";
import { StyledButton } from "./style";
import { type ButtonProps } from "../../types/buttonTypes";

const buttonSizes = {
  XL: {
    fontSize: "2.3rem",
    padding: "0.8rem 4rem",
  },
  L: {
    fontSize: "2rem",
    padding: "0.8rem 3rem",
  },
  M: {
    fontSize: "1.5rem",
    padding: "0.7rem 2rem",
  },
  S: {
    fontSize: "1.25rem",
    padding: "0.6rem 1.6rem",
  },
};

const Button = ({ primary, size, children, margin, onClick, type }: ButtonProps): React.ReactElement => {
  return (
    <StyledButton
      $primary={primary ?? false}
      $fontSize={buttonSizes[size].fontSize}
      $padding={buttonSizes[size].padding}
      $margin={margin}
      onClick={onClick}
      type={type}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
