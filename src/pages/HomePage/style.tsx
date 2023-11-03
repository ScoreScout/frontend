import styled from "styled-components";
import media from "styled-media-query";

const StyledTitle = styled.div`
  background-color: ${(props) => props.theme.color.mainColor};
  color: ${(props) => props.theme.color.bgColor};
  height: 100vh;
  font-size: 5rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: end;
  padding: 0 2rem;
  ${media.lessThan("large")`
    font-size: 4rem;
  `}
  ${media.lessThan("medium")`
    font-size: 3rem;
  `}
`;

const StyledContianer = styled.div`
  display: flex;
`;

const StyledDescription = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.9rem;
  width: 24rem;
  margin-left: 1.5rem;
  font-weight: 500;
  ${media.lessThan("large")`
    font-size: 1.6rem;
  `}
  ${media.lessThan("medium")`
    font-size: 1.4rem;
  `}
`;

const StyledButtonsContainer = styled.div`
  margin-top: 1.5rem;
  right: 2.5%;
  position: absolute;
`;

const StyledStartButton = styled.div`
  position: absolute;
  bottom: 10%;
  left: 30%;
  ${media.lessThan("medium")`
    left: 20%;
  `}
`;

export {
  StyledTitle,
  StyledContianer,
  StyledDescription,
  StyledButtonsContainer,
  StyledStartButton,
};
