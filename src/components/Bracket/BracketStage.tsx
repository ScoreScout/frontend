import React from "react";
import type { StageProps, MatchWithPositions } from "../../types/bracketTypes";
import { constructPositionedMatchesBasic } from "../../utils/bracketDistribution";
import BracketMatch from "./BracketMatch";

const BracketStage = ({ matchIds, stageNumber }: StageProps): React.JSX.Element => {
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

export default BracketStage;
