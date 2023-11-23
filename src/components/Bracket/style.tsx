import styled from "styled-components";
import { globalRegularFontStyles, globalSemiBoldFontStyles } from "../../theme/FontStyles";

export const StyledGrid = styled.div<{
  $height: number;
  $width: number;
}>`
  display: grid;
  grid-template-rows: repeat(${(props) => props.$height}, 1rem);
  grid-template-columns: 1.6rem repeat(${(props) => props.$width}, 1fr);
  grid-auto-flow: column;
  grid-auto-rows: 1rem;
  grid-auto-columns: 1rem;
  align-items: end;
`;

export const StyledStageItem = styled.div<{
  $stageNumber: number;
  $startPosition: number;
  $endPosition: number;
  $isSecondPlayer: boolean;
}>`
  grid-row-start: ${(props) => props.$startPosition};
  grid-row-end: ${(props) => props.$endPosition};
  grid-column-start: ${(props) => props.$stageNumber + 1};
  height: 100%;
  display: flex;
  flex-direction: column-reverse;
  border-bottom: 4px solid ${(props) => props.theme.color.secondaryBgColor};
  ${(props) =>
    props.$isSecondPlayer &&
    `
    border-right: 4px solid ${props.theme.color.secondaryBgColor};
  `};
  position: relative;
`;

export const StyledPlayerNumber = styled.div<{
  $stageNumber: number;
  $startPosition: number;
  $endPosition: number;
}>`
  grid-row-start: ${(props) => props.$startPosition};
  grid-row-end: ${(props) => props.$endPosition};
  grid-column-start: ${(props) => props.$stageNumber};
  height: 100%;
  justify-self: end;
  margin-bottom: 5px;
  color: ${(props) => props.theme.color.secondaryBgColor};
  ${globalRegularFontStyles}
  font-size: 1em;
`;

export const StyledPlayerSpan = styled.div`
  ${globalRegularFontStyles}
  font-size: 1em;
  width: 100%;
  margin: 0 0.25rem 1px;
`;

export const StyledScoreSpan = styled.span`
  ${globalSemiBoldFontStyles};
  font-size: 1em;
  color: ${(props) => props.theme.color.mainColor};
  margin: 0 0.25rem;
`;

export const StyledMatchTrigger = styled.div<{
  $isStarted: boolean;
}>`
  position: absolute;
  width: 1rem;
  height: 1rem;
  background-color: ${(props) =>
    props.$isStarted ? props.theme.color.mainColor : props.theme.color.notActiveColor};
  border-radius: 100%;
  right: -0.6rem;
  top: calc(50% + 2px);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  z-index: 1;
  cursor: pointer;
`;
