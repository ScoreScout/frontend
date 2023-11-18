import styled from "styled-components";

const StyledNotFound = styled.div`
  width: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  height: 100vh;
  background-color: #ffcccc;
`;

const NotFoundContainer = styled.div`
  text-align: center;
  h1 {
    font-size: 7rem;
    font-weight: bolder;
    margin-bottom: 2rem;
  }
  h2 {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 1rem;
  }
  p {
    margin: auto;
    font-size: 1.2rem;
    font-weight: 500;
    width: 70%;
    margin-bottom: 1.5rem;
  }
`;

export { StyledNotFound, NotFoundContainer };
