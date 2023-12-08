import React from "react";
import type { PlayerRowProps } from "../../types/groupTableTypes";
import { RowStyle, Cell } from "./style";

const PlayerRow = ({ player, numOfPlayers, rowIndex } : PlayerRowProps) => {
  return (
    <RowStyle numPlayers = {numOfPlayers}>
      <Cell rowIndex={rowIndex} cellIndex={0}>{`${player.name}`}</Cell>
      {[...Array(numOfPlayers + 2)].map((_, index) => (
        <Cell key={index} rowIndex={rowIndex} cellIndex={index + 1}></Cell>
      ))}
    </RowStyle>
  );
};

export default PlayerRow;
