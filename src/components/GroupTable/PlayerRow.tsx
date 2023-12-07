import React from "react";
import type { PlayerRowProps } from "../../types/groupTableTypes";
import { RowStyle, Cell } from "./style";

const PlayerRow = ({ player, numOfPlayers } : PlayerRowProps) => {
  return (
    <RowStyle numPlayers = {numOfPlayers}>
      <Cell>{`${player.firstName} ${player.lastName}`}</Cell>
      {[...Array(numOfPlayers + 2)].map((_, index) => (
        <Cell key={index}></Cell>
      ))}
    </RowStyle>
  );
};

export default PlayerRow;
