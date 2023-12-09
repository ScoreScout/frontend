import React, { useState, useEffect } from "react";
import type { PlayerRowProps } from "../../types/groupTableTypes";
import { RowStyle, Cell } from "./style";
import ScorePopup from "./ScorePopup";

const PlayerRow = ({
  player,
  numOfPlayers,
  rowIndex,
  onScoreChange,
  scores,
}: PlayerRowProps): React.JSX.Element => {
  const [popupOpen, setPopupOpen] = useState(false);
  const [selectedCell, setSelectedCell] = useState<number | null>(null);
  const [rowSum, setRowSum] = useState(0);

  const openPopup = (cellIndex): void => {
    // console.log(`Clicked on cell: (${rowIndex},${cellIndex})`);
    setSelectedCell(cellIndex);
    setPopupOpen(true);
  };

  const closePopup = (): void => {
    setPopupOpen(false);
    setSelectedCell(null);
  };

  const handlePopupSubmit = (result): void => {
    if (selectedCell !== null) {
      const cellId: string = `${rowIndex}-${selectedCell}`;
      onScoreChange(cellId, result);
    }
    closePopup();
  };

  useEffect(() => {
    const sum = Array.from({ length: numOfPlayers }, (_, index) => {
      const cellId = `${rowIndex}-${index + 1}`;
      return isNaN(Number(scores[cellId])) ? 0 : Number(scores[cellId]);
    }).reduce((acc, score) => acc + score, 0);

    setRowSum(sum);
  }, [scores, rowIndex, numOfPlayers]);

  return (
    <RowStyle numPlayers={numOfPlayers}>
      <Cell rowIndex={rowIndex} cellIndex={0} numPlayers={numOfPlayers}>{`${player}`}</Cell>
      {[...Array(numOfPlayers + 1)].map((_, index) => (
        <Cell
          key={index}
          rowIndex={rowIndex}
          cellIndex={index + 1}
          numPlayers={numOfPlayers}
          onClick={() => {
            if (index + 1 !== rowIndex && index !== numOfPlayers && index !== numOfPlayers + 1) {
              openPopup(index + 1);
            }
          }}
        >
          {index + 1 === rowIndex || index === numOfPlayers ? (
            index === numOfPlayers ? (
              <span className='cellValue'>{rowSum}</span>
            ) : (
              <></>
            )
          ) : (
            <span className='cellValue'>{scores[`${rowIndex}-${index + 1}`] ?? ""}</span>
          )}
        </Cell>
      ))}
      {popupOpen && <ScorePopup onClose={closePopup} onSubmit={handlePopupSubmit} />}
    </RowStyle>
  );
};

export default PlayerRow;
