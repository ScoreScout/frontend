import React from "react";
import type { StageProps, MatchWithPositions } from "../../types/bracketTypes";
import { constructPositionedMatchesBasic } from "../../utils/bracketDistribution";
import BracketMatch from "./BracketMatch";
import { useAppSelector } from "../../redux/hooks";
import { getBracket } from "../../redux/selectors/bracketSelectors";

const BracketStage = ({ matchIds, stageNumber }: StageProps): React.JSX.Element => {
  const bracket = useAppSelector(getBracket);

  const positionedMatches: MatchWithPositions[] = constructPositionedMatchesBasic(
    matchIds,
    stageNumber,
    bracket.matches
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

export default BracketStage;
