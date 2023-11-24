import React from "react";
import { useAppSelector } from "../../redux/hooks";
import { getFinalMatch, getWinner } from "../../redux/selectors/bracketSelectors";
import type { WinnerProps } from "../../types/bracketTypes";
import { StyledStageItem } from "./style";
import PlayerSpan from "./PlayerSpan";

const BracketWinner = ({ stageNumber }: WinnerProps): React.JSX.Element => {
  const winner = useAppSelector(getWinner);
  const finalMatch = useAppSelector(getFinalMatch);

  const cellHeight = 2 ** stageNumber;
  const position = cellHeight / 2;

  return (
    <StyledStageItem
      $stageNumber={stageNumber}
      $startPosition={position}
      $endPosition={position + 1}
      $isSecondPlayer={false}
    >
      <PlayerSpan match={finalMatch} player={winner} />
    </StyledStageItem>
  );
};

export default BracketWinner;
