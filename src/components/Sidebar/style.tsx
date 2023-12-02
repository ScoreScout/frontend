import styled from "styled-components";

const StyledSidebar = styled.div`
  width: 20rem;
  height: 100vh;
  flex-shrink: 0;
  background-color: ${(props) => props.theme.color.secondaryBgColor};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export { StyledSidebar };
