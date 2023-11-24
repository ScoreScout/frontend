import React from "react";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../../redux";
import { getMatchById, getPrevMatches } from "../../redux/selectors/bracketSelectors";
import { startMatch, finishMatch } from "../../redux/slices/bracket/bracketSlice";
import type { BracketMatchProps } from "../../types/bracketTypes";
import PlayerSpan from "./PlayerSpan";
import { StyledPlayerNumber, StyledStageItem, StyledMatchTrigger } from "./style";

const BracketMatch = ({
  matchId,
  startPosition,
  endPosition,
  stageNumber,
}: BracketMatchProps): React.JSX.Element => {
  const match = useSelector((state: RootState) => getMatchById(state, matchId));

  const { firstPlayerMatch, secondPlayerMatch } = useSelector((state: RootState) =>
    getPrevMatches(state, matchId),
  );
  const dispatch = useDispatch();

  return (
    <>
      {(firstPlayerMatch === undefined || firstPlayerMatch.type === "onePlayer") &&
        match.firstPlayer !== undefined && (
          <StyledPlayerNumber
            $stageNumber={stageNumber}
            $startPosition={startPosition}
            $endPosition={startPosition + 1}
          >
            {match.firstPlayer?.id + 1}.
          </StyledPlayerNumber>
        )}
      {(secondPlayerMatch === undefined || secondPlayerMatch.type === "onePlayer") &&
        match.secondPlayer !== undefined && (
          <StyledPlayerNumber
            $stageNumber={stageNumber}
            $startPosition={endPosition - 1}
            $endPosition={endPosition}
          >
            {match.secondPlayer?.id + 1}.
          </StyledPlayerNumber>
        )}
      <StyledStageItem
        $stageNumber={stageNumber}
        $startPosition={startPosition}
        $endPosition={startPosition + 1}
        $isSecondPlayer={false}
      >
        <PlayerSpan match={firstPlayerMatch} player={match.firstPlayer} />
      </StyledStageItem>
      <StyledStageItem
        $stageNumber={stageNumber}
        $startPosition={startPosition + 1}
        $endPosition={endPosition}
        $isSecondPlayer={true}
      >
        {match.firstPlayer !== undefined &&
          match.secondPlayer !== undefined &&
          !match.isFinished && (
            <StyledMatchTrigger
              onClick={() => {
                if (!match.isStarted) dispatch(startMatch(matchId));
                else dispatch(finishMatch({ matchId }));
              }}
              $isStarted={match.isStarted}
            />
          )}
        <PlayerSpan match={secondPlayerMatch} player={match.secondPlayer} />
      </StyledStageItem>
    </>
  );
};

export default BracketMatch;
