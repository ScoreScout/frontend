import React, { useEffect, useState } from "react";
import type { BracketProps, Bracket as BracketType, Match } from "../../types/bracketTypes";
import { StyledGrid } from "./style";
import { getBracket, getStages } from "../../redux/selectors/bracketSelectors";
import { setBracket, setPlayers } from "../../redux/slices/bracket/bracketSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import Winner from "./BracketWinner";
import Stage from "./BracketStage";
import { store } from "../../redux";
import debounce from "lodash/debounce";

function areArraysDifferent(arr1: Match[], arr2: Match[]): boolean {
  if (arr1.length !== arr2.length) {
    return true;
  }

  for (let i = 0; i < arr1.length; i++) {
    const match1 = arr1[i];
    const match2 = arr2[i];

    if (!areMatchesEqual(match1, match2)) {
      return true;
    }
  }

  return false;
}

function areMatchesEqual(match1: Match, match2: Match): boolean {
  return JSON.stringify(match1) === JSON.stringify(match2);
}

const Bracket = ({
  customBracket,
  playerNames,
  viewOnly = false,
  onUpdate,
}: BracketProps): React.JSX.Element => {
  const dispatch = useAppDispatch();
  const bracket = useAppSelector(getBracket);
  const stages = useAppSelector(getStages);

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (playerNames !== undefined) {
      dispatch(setPlayers({ playerNames, viewOnly }));
    }
    if (customBracket !== undefined) {
      dispatch(setBracket({ bracket: customBracket, viewOnly }));
    }
    setLoaded(true);
  }, []);

  useEffect(() => {
    let currentValue = bracket;

    const handleChange = (): void => {
      const previousValue = currentValue;
      currentValue = getBracket(store.getState());

      if (
        currentValue !== undefined &&
        previousValue !== undefined &&
        currentValue.matches.length !== 0 &&
        previousValue.matches.length !== 0 &&
        onUpdate !== undefined &&
        areArraysDifferent(previousValue.matches, currentValue.matches)
      ) {        
        onUpdate(currentValue);
      }
    };

    const unsubscribe = store.subscribe(handleChange);

    return () => {
      unsubscribe();
    };
  }, [bracket]); // Only run the effect if bracket changes

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
