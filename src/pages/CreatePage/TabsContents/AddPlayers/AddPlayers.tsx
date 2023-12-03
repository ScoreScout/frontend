import React, { useState } from "react";
import CSVReader from "react-csv-reader";

import Button from "../../../../components/Button/Button";
import { ButtonSize } from "../../../../types/buttonTypes";

import { FaCirclePlus, FaUpload } from "react-icons/fa6";

import Table from "./table";

import {
  AddPlayersWrapper,
  AddPlayersContainer,
  AddPlayersInput,
  AddPLayersTitle,
  ButtonContainer,
  ButtonText,
  CsvBox,
  CsvText,
} from "./style";

const AddPlayers = ({ ratingToggleOn, players, setPlayers }): React.JSX.Element => {
  
  const [name, setName] = useState("");
  const [rating, setRating] = useState("");

  const handleAddPlayer = () => {
    if (!name) {
      alert("Please enter the player's name");
      return;
    }

    if (ratingToggleOn && rating !== "" && isNaN(parseInt(rating, 10))) {
      alert("Rating must be a number");
      return;
    }

    const newPlayer = {
      name,
      rating: ratingToggleOn ? parseInt(rating, 10) : undefined,
    };

    setPlayers([...players, newPlayer]);

    setName("");
    setRating("");
  };

  const handleFileUpload = (data: any, fileInfo: any) => {
    // Assuming your CSV file has a header row with "name" and "rating" columns
    const csvPlayers = data.slice(1).map((row: any) => ({
      name: row[0],
      rating: ratingToggleOn ? parseInt(row[1], 10) : undefined,
    }));

    setPlayers([...players, ...csvPlayers]);
  };

  return (
    <AddPlayersWrapper>
      <AddPlayersContainer>
        <AddPLayersTitle>Add Players</AddPLayersTitle>
        <AddPlayersInput
          placeholder="Player's name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {ratingToggleOn && (
          <AddPlayersInput
            placeholder='Rating (Optional)'
            value={rating}
            onChange={(e) => setRating(e.target.value)}
          />
        )}
        <ButtonContainer>
          <Button primary={true} size={ButtonSize.S} onClick={handleAddPlayer}>
            <ButtonText>
              Add <FaCirclePlus />{" "}
            </ButtonText>
          </Button>
        </ButtonContainer>
        <CsvBox>
          <CsvText>or you can upload csv</CsvText>
          <Button primary={false} size={ButtonSize.S}>
            <ButtonText>
              {
                <CSVReader
                  onFileLoaded={handleFileUpload}
                  inputStyle={{ height: "fit-content", opacity: 0, position: "absolute" }}
                />
              }{" "}
              Upload <FaUpload />
            </ButtonText>
          </Button>
        </CsvBox>
      </AddPlayersContainer>
      <Table players={players} ratingToggleOn={ratingToggleOn}></Table>
    </AddPlayersWrapper>
  );
};

export default AddPlayers;
