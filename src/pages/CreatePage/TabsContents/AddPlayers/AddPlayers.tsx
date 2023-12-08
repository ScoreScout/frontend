import React, { useState, type FC, type ReactElement } from "react";
import CSVReader from "react-csv-reader";

import Button from "../../../../components/Button/Button";
import { ButtonSize } from "../../../../types/buttonTypes";
import { type AddPlayersProps } from "../../../../types/createPageTabTypes";

import { FaCirclePlus, FaUpload } from "react-icons/fa6";

import Table from "./Table";

import {
  AddPlayersWrapper,
  AddPlayersContainer,
  AddPlayersInput,
  AddPLayersTitle,
  ButtonContainer,
  ButtonText,
  CsvBox,
  CsvText,
  AddPlayersForm,
} from "./style";
import type { Player } from "../../../../types/bracketTypes";

const AddPlayers: FC<AddPlayersProps> = ({
  ratingToggleOn,
  players,
  setPlayers,
}: AddPlayersProps): ReactElement => {
  const [name, setName] = useState<string>("");
  const [rating, setRating] = useState<string>("");

  const handleAddPlayer = (): void => {
    if (name === "") {
      alert("Please enter the player's name");
      return;
    }

    if (ratingToggleOn && rating !== "" && isNaN(parseInt(rating, 10))) {
      alert("Rating must be a number");
      return;
    }

    const newPlayer : Player = {
      id: players.length,
      name,
    };

    const newRating = parseInt(rating, 10)

    if (!isNaN(newRating) || !ratingToggleOn) {
      newPlayer.rating = newRating
    }


    setPlayers([...players, newPlayer]);

    setName("");
    setRating("");
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    handleAddPlayer();
  };

  const handleFileUpload = (data: any, fileInfo: any): void => {
    // Assuming your CSV file has a header row with "name" and "rating" columns
    const csvPlayers = data.slice(1).map((row: any, index: number) => ({
      id: players.length + index,
      name: row[0],
      rating: ratingToggleOn ? parseInt(row[1], 10) : undefined,
    }));

    setPlayers([...players, ...csvPlayers]);
  };

  return (
    <AddPlayersWrapper>
      <AddPlayersContainer>
        <AddPLayersTitle>Add Players</AddPLayersTitle>
        <AddPlayersForm onSubmit={handleSubmit}>
          <AddPlayersInput
            placeholder="Player's name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          {ratingToggleOn && (
            <AddPlayersInput
              placeholder='Rating (Optional)'
              value={rating}
              onChange={(e) => {
                setRating(e.target.value);
              }}
            />
          )}
          <ButtonContainer>
            <Button primary={true} size={ButtonSize.S} type='submit'>
              <ButtonText>
                Add <FaCirclePlus />{" "}
              </ButtonText>
            </Button>
          </ButtonContainer>
        </AddPlayersForm>
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
