import React from "react";
import type { GroupTableProps } from "../../types/groupTableTypes";
import { TableContainer, HeadRow, Cell } from "./style";
import PlayerRow from "./PlayerRow";

const GroupTable = ({ PlayerNames } : GroupTableProps) => {

const numOfPlayers = PlayerNames.length;

return (
    <TableContainer numPlayers = {numOfPlayers}>
      <HeadRow numPlayers = {numOfPlayers}>
        <Cell rowIndex={0} cellIndex={0}>First group</Cell>
        {[...Array(numOfPlayers)].map((_, index) => (
          <Cell key={index} rowIndex={0} cellIndex={index + 1}>{index + 1}</Cell>
        ))}
        <Cell rowIndex={0} cellIndex={numOfPlayers - 2}>Points</Cell>
        <Cell rowIndex={0} cellIndex={numOfPlayers - 1}>Place</Cell>
      </HeadRow>
      {PlayerNames.map((player, index) => (
        <PlayerRow key={index} player={player} numOfPlayers={numOfPlayers} rowIndex={index + 1}/>
      ))}
    </TableContainer>
  );
};

export default GroupTable;
