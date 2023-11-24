import React from "react";
import type { PlayerSpanProps } from "../../types/bracketTypes";
import { StyledPlayerSpan, StyledScoreSpan } from "./style";

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

export default PlayerSpan;
