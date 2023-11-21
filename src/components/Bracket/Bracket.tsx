import React from "react";
import type {
  BracketProps,
  StageProps,
  BracketMatchProps,
  MatchWithPositions,
} from "../../types/bracketTypes";
import { StyledGrid, StyledMatchTrigger, StyledPlayerSpan, StyledStageItem } from "./style";
import { constructPositionedMatchesBasic } from "../../utils/bracketDistribution";
import { getMatchById, getStages } from "../../redux/selectors/bracketSelectors";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../redux";
import { finishMatch, setPlayers, startMatch } from "../../redux/slices/bracket/bracketSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";

const BracketMatch = ({
  matchId,
  startPosition,
  endPosition,
  stageNumber,
}: BracketMatchProps): React.JSX.Element => {
  const match = useSelector((state: RootState) => getMatchById(state, matchId));
  const dispatch = useDispatch();

  return (
    <>
      <>
        <StyledStageItem
          key={startPosition}
          $stageNumber={stageNumber}
          $startPosition={startPosition}
          $endPosition={startPosition + 1}
          $isSecondPlayer={false}
        >
          <StyledPlayerSpan>{match.firstPlayer?.name}</StyledPlayerSpan>
        </StyledStageItem>
        <StyledStageItem
          key={startPosition + 1}
          $stageNumber={stageNumber}
          $startPosition={startPosition + 1}
          $endPosition={endPosition}
          $isSecondPlayer={true}
        >
          {typeof match.firstPlayer === "undefined" &&
            typeof match.secondPlayer === "undefined" &&
            // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
            !match.isFinished && (
              <StyledMatchTrigger
                onClick={() => {
                  // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
                  if (!match.isStarted) dispatch(startMatch(matchId));
                  else dispatch(finishMatch(matchId));
                }}
                $isStarted={match.isStarted}
              />
            )}
          <StyledPlayerSpan>{match.secondPlayer?.name}</StyledPlayerSpan>
        </StyledStageItem>
      </>
    </>
  );
};

const Stage = ({ matchIds, stageNumber }: StageProps): React.JSX.Element => {
  const positionedMatches: MatchWithPositions[] = constructPositionedMatchesBasic(
    matchIds,
    stageNumber,
  );

  return (
    <>
      {positionedMatches.map((match) => (
        <BracketMatch
          key={match.startPosition}
          matchId={match.matchId}
          stageNumber={stageNumber}
          startPosition={match.startPosition}
          endPosition={match.endPosition}
        />
      ))}
    </>
  );
};

const Bracket = ({ bracket }: BracketProps): React.JSX.Element => {
  const playersAmountPowOf2 = Math.ceil(Math.log(bracket.players.length) / Math.log(2));
  const playersAmountLog2 = 2 ** playersAmountPowOf2;
  const gridHeight = playersAmountLog2 * 2 - 1;
  const stagesAmount = playersAmountPowOf2 + 1;

  const dispatch = useAppDispatch();
  const stages = useAppSelector(getStages);

  if (stages.length === 0) {
    dispatch(setPlayers({ players: bracket.players }));
  }

  return (
    <StyledGrid $height={gridHeight} $width={stagesAmount}>
      {stages.map((stage, i) => (
        <Stage key={i} matchIds={stage.matchIds} stageNumber={i + 1} />
      ))}
    </StyledGrid>
  );
};

export default Bracket;
