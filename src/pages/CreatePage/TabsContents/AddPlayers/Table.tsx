import React from "react";

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

interface TableProps {
  players: Array<{ name: string; rating?: number }>;
  ratingToggleOn: boolean;
}

const Table: React.FC<TableProps> = ({
  players,
  ratingToggleOn,
}: TableProps): React.ReactElement => {
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
              {ratingToggleOn ? (player.rating !== undefined ? `${player.rating}` : "None") : " "}
            </TableRating>
          </TableRow>
        ))}
      </TableContainer>
      <TableLine />
    </PlayersTableContainer>
  );
};

export default Table;
