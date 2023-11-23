import React from "react";
import type {
  BracketProps,
  StageProps,
  BracketMatchProps,
  MatchWithPositions,
  WinnerProps,
} from "../../types/bracketTypes";
import { StyledGrid, StyledMatchTrigger, StyledPlayerSpan, StyledStageItem } from "./style";
import { constructPositionedMatchesBasic } from "../../utils/bracketDistribution";
import { getMatchById, getStages, getWinner } from "../../redux/selectors/bracketSelectors";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../redux";
import { finishMatch, setPlayers, startMatch } from "../../redux/slices/bracket/bracketSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";

const Winner = ({ stageNumber }: WinnerProps): React.JSX.Element => {
  const winner = useAppSelector(getWinner);

  const cellHeight = 2 ** stageNumber;
  const position = cellHeight / 2;

  return (
    <StyledStageItem
      $stageNumber={stageNumber}
      $startPosition={position}
      $endPosition={position + 1}
      $isSecondPlayer={false}
    >
      <StyledPlayerSpan>{winner?.name}</StyledPlayerSpan>
    </StyledStageItem>
  );
};

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
        <StyledPlayerSpan>{match.secondPlayer?.name}</StyledPlayerSpan>
      </StyledStageItem>
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
  const stagesAmount = playersAmountPowOf2;

  const dispatch = useAppDispatch();
  const stages = useAppSelector(getStages);

  if (stages.length === 0) {
    dispatch(setPlayers({ players: bracket.players }));
  }

  return (
    <StyledGrid $height={gridHeight} $width={stagesAmount + 1}>
      {stages.map((stage, i) => (
        <Stage key={i} matchIds={stage.matchIds} stageNumber={i + 1} />
      ))}
	  <Winner stageNumber={stages.length + 1}/>
    </StyledGrid>
  );
};

export default Bracket;
