import React from "react";

import { TournamentTitleContainer, TournamentTitleTitle, TournamentTitleInput } from "./style";

const TournamentTitle = ({
  tournamentTitle,
  setTournamentTitle,
}: {
  tournamentTitle: string;
  setTournamentTitle: (title: string) => void;
}): React.JSX.Element => {
  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setTournamentTitle(event.target.value);
  };
  return (
    <TournamentTitleContainer>
      <TournamentTitleTitle>Tournament Title:</TournamentTitleTitle>
      <TournamentTitleInput
        type='text'
        placeholder='Enter tournament title'
        value={tournamentTitle}
        onChange={handleTitleChange}
      />
    </TournamentTitleContainer>
  );
};

export default TournamentTitle;
