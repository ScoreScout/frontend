import styled from "styled-components";

const StyledButton = styled.button<{
  $primary?: boolean;
  $padding: string;
  $fontSize: string;
  $margin?: string;
}>`
  background-color: ${(props) =>
    props.$primary ? props.theme.color.mainColor : props.theme.color.bgColor};
  color: ${(props) =>
    props.$primary ? props.theme.color.bgColor : props.theme.color.mainColor};
  border: solid 2px ${(props) => props.theme.color.mainColor};
  width: "fit-content";
  height: "fit-content";
  padding: ${(props) => props.$padding};
  font-size: ${(props) => props.$fontSize};
  border-radius: 1rem;
  box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.25);
  margin: ${(props) => props.$margin};
  cursor: pointer;
`;

export { StyledButton };
