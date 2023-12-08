import React, { useState } from "react";
import type { PlayerRowProps } from "../../types/groupTableTypes";
import { RowStyle, Cell } from "./style";
import ScorePopup from "./ScorePopup";

const PlayerRow = ({ player, numOfPlayers, rowIndex, onScoreChange } : PlayerRowProps) => {
  const [popupOpen, setPopupOpen] = useState(false);
  const [selectedCell, setSelectedCell] = useState(null);

  const openPopup = (cellIndex) => {
    setSelectedCell(cellIndex);
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
    setSelectedCell(null);
  };

  const handlePopupSubmit = (result) => {
    if (selectedCell !== null) {
      onScoreChange(`${rowIndex}-${selectedCell}`, result);
    }
  };

  return (
    <RowStyle numPlayers = {numOfPlayers}>
      <Cell rowIndex={rowIndex} cellIndex={0}>{`${player.name}`}</Cell>
      {[...Array(numOfPlayers + 2)].map((_, index) => (
        <Cell 
          key={index} 
          rowIndex={rowIndex} 
          cellIndex={index + 1} 
          onClick={() => (index + 1 !== rowIndex && index !== numOfPlayers && index !== numOfPlayers + 1) ? openPopup(index + 1) : null}>
          {index + 1 === rowIndex || index === numOfPlayers || index === numOfPlayers + 1 ? (
            <span></span>
          ) : (
            <span></span>
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