import React from "react";
import type { RootState } from "../../redux";
import { getMatchById, getPrevMatches, getViewOnly } from "../../redux/selectors/bracketSelectors";
import { startMatch, finishMatch } from "../../redux/slices/bracket/bracketSlice";
import type { BracketMatchProps } from "../../types/bracketTypes";
import PlayerSpan from "./PlayerSpan";
import { StyledPlayerNumber, StyledStageItem, StyledMatchTrigger } from "./style";
import { awaitModalInput } from "../../redux/slices/modal/modalSlice";
import type { ModalOutput } from "../../types/modalTypes";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";

const BracketMatch = ({
  matchId,
  startPosition,
  endPosition,
  stageNumber,
}: BracketMatchProps): React.JSX.Element => {
  const match = useAppSelector((state: RootState) => getMatchById(state, matchId));
  const viewOnly = useAppSelector(getViewOnly);
  const dispatch = useAppDispatch();

  const { firstPlayer, secondPlayer } = match;

  const { firstPlayerMatch, secondPlayerMatch } = useAppSelector((state: RootState) =>
    getPrevMatches(state, matchId),
  );

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
        {firstPlayer !== undefined && secondPlayer !== undefined && !match.isFinished && (
          <StyledMatchTrigger
          $viewOnly = {viewOnly}
            onClick={() => {
              if (viewOnly) return;
              if (!match.isStarted) {
                dispatch(startMatch(matchId));
              } else {
                dispatch(
                  awaitModalInput({
                    firstPlayerName: firstPlayer.name,
                    secondPlayerName: secondPlayer.name,
                  }),
                )
                  .then((res) => {
                    const score = res.payload as ModalOutput;
                    dispatch(finishMatch({ matchId, ...score }));
                  })
                  .catch((err) => {
                    // TODO: handle errors
                    // eslint-disable-next-line no-console
                    console.error(err);
                  });
              }
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
