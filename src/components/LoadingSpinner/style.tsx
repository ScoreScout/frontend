import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled.div`
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-top: 4px solid ${(props) => props.theme.color.mainColor};
  border-radius: 50%;
  margin: auto;
  width: 5rem;
  height: 5rem;
  animation: ${rotate} 2s linear infinite;
`;
