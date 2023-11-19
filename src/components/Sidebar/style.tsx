import styled from "styled-components";

const StyledSidebar = styled.div`
  width: 25%;
  height: 100vh;
  background-color: ${(props) => props.theme.color.secondryBgColor};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export { StyledSidebar };
