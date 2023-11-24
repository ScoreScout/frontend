import React, { useEffect, useState } from "react";
import type { BracketProps } from "../../types/bracketTypes";
import { StyledGrid } from "./style";
import { getBracket, getStages } from "../../redux/selectors/bracketSelectors";
import { setBracket, setPlayers } from "../../redux/slices/bracket/bracketSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import Winner from "./BracketWinner";
import Stage from "./BracketStage";

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
