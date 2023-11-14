import styled from "styled-components";

export const StyledGrid = styled.div<{
	$height: number;
	$width: number;
}>`
	display: grid;
	grid-template-rows: repeat(${(props) => props.$height}, 1rem);
	grid-template-columns: repeat(${(props) => props.$width}, 1fr);
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
	grid-column-start: ${(props) => props.$stageNumber};
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

export const StyledPlayerSpan = styled.div`
	width: 1rem;
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
  top: 50%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  z-index: 1;
`;
