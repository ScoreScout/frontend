import styled from "styled-components";

import { globalRegularFontStyles, globalSemiBoldFontStyles } from "../../../../theme/FontStyles";

const NumStagesWrapper = styled.div`
  padding: 12.5rem 6.25rem 0 6.25rem;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`;

const NumStagesTitle = styled.div`
  ${globalSemiBoldFontStyles}
  color: ${(props) => props.theme.color.fontColor};
`;

const StageBoxesContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1.875rem;
`;

const StageBox = styled.div.attrs<{ isselected: string }>((props) => ({
  isselected:
    props.isselected !== "" ? (props.isselected === "true" ? props.isselected : "false") : "false",
}))`
  width: 15.625rem;
  height: 15rem;
  padding: 1.25rem;
  border-radius: 1rem;
  box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.25);
  border: 1.5px solid #aca4a2;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 0.8rem;
  ${globalRegularFontStyles}

  &:hover {
    cursor: pointer;
    box-shadow: 0px 0px 8px 4px rgba(0, 0, 0, 0.25);
    border: 1.5px solid #6d6766;
  }

  background-color: ${(props) =>
    props.isselected === "true" ? props.theme.color.mainColor : props.theme.color.bgColor};
`;

const StageBoxTitle = styled.div.attrs<{ isselected: string }>((props) => ({
  isselected:
    props.isselected !== "" ? (props.isselected === "true" ? props.isselected : "false") : "false",
}))`
  ${globalSemiBoldFontStyles}
  font-size: 1.25rem;
  color: ${(props) => (props.isselected === "true" ? "white" : props.theme.color.mainColor)};
`;

const StageBoxDescription = styled.div.attrs<{ isselected: string }>((props) => ({
  isselected:
    props.isselected !== "" ? (props.isselected === "true" ? props.isselected : "false") : "false",
}))`
  ${globalRegularFontStyles}
  font-size: 1rem;
  color: ${(props) => (props.isselected === "true" ? "white" : props.theme.color.fontColor)};
`;

export {
  NumStagesWrapper,
  NumStagesTitle,
  StageBoxesContainer,
  StageBox,
  StageBoxTitle,
  StageBoxDescription,
};
