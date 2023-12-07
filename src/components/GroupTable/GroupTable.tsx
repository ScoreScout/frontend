import React from "react";
import type { GroupTableProps } from "../../types/groupTableTypes";
import { TableContainer, HeadRow, Cell } from "./style";
import PlayerRow from "./PlayerRow";

const GroupTable = ({ PlayerNames } : GroupTableProps) => {

const numOfPlayers = PlayerNames.length;

return (
    <TableContainer numPlayers = {numOfPlayers}>
      <HeadRow numPlayers = {numOfPlayers}>
        <Cell>First group</Cell>
        {[...Array(numOfPlayers)].map((_, index) => (
          <Cell key={index}>{index + 1}</Cell>
        ))}
        <Cell>Points</Cell>
        <Cell>Place</Cell>
      </HeadRow>
      {PlayerNames.map((player, index) => (
        <PlayerRow key={index} player={player} numOfPlayers={numOfPlayers}/>
      ))}
    </TableContainer>
  );
};

export default GroupTable;
