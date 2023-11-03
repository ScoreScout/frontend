import React from "react";
import { StyledButton } from "./style";
import { ButtonProps } from "../../types/buttonTypes";

const buttonSizes = {
  XL: {
    fontSize: "2.3rem",
    padding: "1rem 3.8rem",
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

const Button = ({ primary, size, children, margin }: ButtonProps) => {
  return (
    <StyledButton
      $primary={primary ?? false}
      $fontSize={buttonSizes[size].fontSize}
      $padding={buttonSizes[size].padding}
      $margin={margin}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
