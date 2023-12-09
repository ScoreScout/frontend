import React, { useState} from "react";
import type { GroupTableProps } from "../../types/groupTableTypes";
import { TableContainer, HeadRow, Cell } from "./style";
import PlayerRow from "./PlayerRow";

const GroupTable = ({ PlayerNames } : GroupTableProps) : React.JSX.Element => {

const numOfPlayers = PlayerNames.length;

const [scores, setScores] = useState({});

const onScoreChange = (id, value): void => {
  setScores((prevScores) => ({
    ...prevScores,
    [id]: value,
  }));
};

return (
    <TableContainer numPlayers = {numOfPlayers}>
      <HeadRow numPlayers = {numOfPlayers}>
        <Cell rowIndex={0} cellIndex={0} numPlayers={numOfPlayers}>First group</Cell>
        {[...Array(numOfPlayers)].map((_, index) => (
          <Cell key={index} rowIndex={0} cellIndex={index + 1} numPlayers={numOfPlayers}>{index + 1}</Cell>
        ))}
        <Cell rowIndex={0} cellIndex={numOfPlayers + 1} numPlayers={numOfPlayers}>Points</Cell>
        {/* <Cell rowIndex={0} cellIndex={numOfPlayers + 2} numPlayers={numOfPlayers}>Place</Cell> */}
      </HeadRow>
      {PlayerNames.map((player, index) => (
        <PlayerRow key={index}
          player={player} 
          numOfPlayers={numOfPlayers} 
          rowIndex={index + 1}
          onScoreChange = {onScoreChange}
          scores = {scores}
        />
      ))}
    </TableContainer>
  );
};

export default GroupTable;