import React, { useState, useEffect } from "react";
import type { PlayerRowProps } from "../../types/groupTableTypes";
import { RowStyle, Cell } from "./style";
import ScorePopup from "./ScorePopup";

const PlayerRow = ({ player, numOfPlayers, rowIndex, onScoreChange, scores } : PlayerRowProps) : React.JSX.Element => {
  const [popupOpen, setPopupOpen] = useState(false);
  const [selectedCell, setSelectedCell] = useState(null);
  const [rowSum, setRowSum] = useState(0);
  const [places, setPlaces] = useState('');

  const openPopup = (cellIndex) => {
    console.log(`Clicked on cell: (${rowIndex},${cellIndex})`);
    setSelectedCell(cellIndex);
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
    setSelectedCell(null);
  };


  const handlePopupSubmit = (result) => {
    if (selectedCell !== null) {
      const cellId = `${rowIndex}-${selectedCell}`;
      // console.log(`${cellId}`);
      onScoreChange(cellId, result);
    }
    closePopup();
  };

  useEffect(() => {
    const sum = Array.from({ length: numOfPlayers }, (_, index) => {
      const cellId = `${rowIndex}-${index + 1}`;
      return Number(scores[cellId]) || 0;
    }).reduce((acc, score) => acc + score, 0);

    setRowSum(sum);
  }, [scores, rowIndex, numOfPlayers]);

  return (
    <RowStyle numPlayers = {numOfPlayers}>
      <Cell rowIndex={rowIndex} cellIndex={0} numPlayers={numOfPlayers}>{`${player.name}`}</Cell>
      {[...Array(numOfPlayers + 1)].map((_, index) => (
        <Cell 
          key={index} 
          rowIndex={rowIndex} 
          cellIndex={index + 1} 
          numPlayers={numOfPlayers}
          onClick={() => (index + 1 !== rowIndex && index !== numOfPlayers && index !== numOfPlayers + 1) ? 
          openPopup(index + 1) : null}
          >
          {index + 1 === rowIndex || index === numOfPlayers ? (
            index === numOfPlayers? <span className="cellValue">{rowSum}</span> : <></>
          ) : (
            <span className="cellValue">{scores[`${rowIndex}-${index + 1}`] ?? ""}</span>
          )}
        </Cell>
      ))}
      {popupOpen && (
        <ScorePopup onClose={closePopup} onSubmit={handlePopupSubmit} />
      )}
    </RowStyle>
  );
};

export default PlayerRow;