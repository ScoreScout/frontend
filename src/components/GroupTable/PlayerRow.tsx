import React from "react";
import type { PlayerRowProps } from "../../types/groupTableTypes";
import { RowStyle, Cell } from "./style";

const PlayerRow = ({ player, numOfPlayers, rowIndex, onScoreChange } : PlayerRowProps) => {

  return (
    <RowStyle numPlayers = {numOfPlayers}>
      <Cell rowIndex={rowIndex} cellIndex={0}>{`${player.name}`}</Cell>
      {[...Array(numOfPlayers + 2)].map((_, index) => (
        <Cell key={index} rowIndex={rowIndex} cellIndex={index + 1}>
          {index + 1 === rowIndex || index === numOfPlayers || index === numOfPlayers + 1 ? (
            <span></span>
          ) : (
            <input
              className="cellInput"
              type="text"
              id={`${rowIndex}-${index + 1}`}
              onChange={(e) => onScoreChange(`${rowIndex}-${index + 1}`, e.target.value)}
            />
          )}
        </Cell>
      ))}
    </RowStyle>
  );
};

export default PlayerRow;