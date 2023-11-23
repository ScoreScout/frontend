import React, { useEffect, useState } from "react";
import type {
  BracketProps,
  StageProps,
  BracketMatchProps,
  MatchWithPositions,
  WinnerProps,
  PlayerSpanProps,
} from "../../types/bracketTypes";
import {
  StyledGrid,
  StyledMatchTrigger,
  StyledPlayerNumber,
  StyledPlayerSpan,
  StyledScoreSpan,
  StyledStageItem,
} from "./style";
import { constructPositionedMatchesBasic } from "../../utils/bracketDistribution";
import {
  getBracket,
  getFinalMatch,
  getMatchById,
  getPrevMatches,
  getStages,
  getWinner,
} from "../../redux/selectors/bracketSelectors";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../redux";
import {
  finishMatch,
  setBracket,
  setPlayers,
  startMatch,
} from "../../redux/slices/bracket/bracketSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";

const Winner = ({ stageNumber }: WinnerProps): React.JSX.Element => {
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

const PlayerSpan = ({ match, player }: PlayerSpanProps): React.JSX.Element => {
  return (
    <StyledPlayerSpan>
      {match !== undefined && match.type === "withScore" && (
        <StyledScoreSpan>
          {match.firstPlayerScore}:{match.secondPlayerScore}
        </StyledScoreSpan>
      )}
      {player?.name}
    </StyledPlayerSpan>
  );
};

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
        key={startPosition}
        $stageNumber={stageNumber}
        $startPosition={startPosition}
        $endPosition={startPosition + 1}
        $isSecondPlayer={false}
      >
        <PlayerSpan match={firstPlayerMatch} player={match.firstPlayer} />
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
        <PlayerSpan match={secondPlayerMatch} player={match.secondPlayer} />
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

const Bracket = ({ customBracket, playerNames }: BracketProps): React.JSX.Element => {
  const dispatch = useAppDispatch();
  const bracket = useAppSelector(getBracket);
  const stages = useAppSelector(getStages);

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (playerNames !== undefined) {
      dispatch(setPlayers({ playerNames }));
    }
    if (customBracket !== undefined) {
      dispatch(setBracket({ bracket: customBracket }));
    }
    setLoaded(true);
  }, []);

  if (!loaded) return <></>;

  const playersAmountPowOf2 = Math.ceil(Math.log(bracket.players.length) / Math.log(2));
  const playersAmountLog2 = 2 ** playersAmountPowOf2;
  const gridHeight = playersAmountLog2 * 2 - 1;
  const stagesAmount = playersAmountPowOf2;

  return (
    <StyledGrid $height={gridHeight} $width={stagesAmount + 1}>
      {stages.map((stage, i) => (
        <Stage key={i} matchIds={stage.matchIds} stageNumber={i + 1} />
      ))}
      <Winner stageNumber={stages.length + 1} />
    </StyledGrid>
  );
};

export default Bracket;
