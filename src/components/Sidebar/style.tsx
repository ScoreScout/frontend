import styled from "styled-components";

const StyledSidebar = styled.div`
  width: 30rem;
  height: 100vh;
  background-color: ${(props) => props.theme.color.secondryBgColor};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export { StyledSidebar };
