import React, { useEffect, useState } from "react";

import {
  PlayersTableContainer,
  TableContainer,
  TableRow,
  TableColumnName,
  ColumnNamesContainer,
  TableIndex,
  TablePlayerName,
  TableRating,
  TableLine,
} from "./style";


const Table = ({ players, ratingToggleOn }): React.JSX.Element => {
  return (
    <PlayersTableContainer>
      <ColumnNamesContainer>
        <TableColumnName>Players</TableColumnName>
        {ratingToggleOn && <TableColumnName>Rating</TableColumnName>}
      </ColumnNamesContainer>
      <TableLine />
      <TableContainer>
        {players.map((player, index) => (
          <TableRow key={index}>
            <div>
              <TableIndex>{index + 1 + "."}</TableIndex>
              <TablePlayerName>{player.name}</TablePlayerName>
            </div>
            <TableRating>
              {ratingToggleOn ? player.rating !== undefined ? `${player.rating}` : "None" : " "}
            </TableRating>
          </TableRow>
        ))}
      </TableContainer>
      <TableLine />
    </PlayersTableContainer>
  );
};

export default Table;
