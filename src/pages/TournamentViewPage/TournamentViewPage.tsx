import React from "react";
import { useParams } from "react-router-dom";
import { useGetTournamentQuery } from "../../redux/slices/tournament/tournamentSlice";
import Loading from "../../components/Loading/Loading";
import { ProfileLogo } from "../ProfilePage/style";
import { FaUserCircle } from "react-icons/fa";
import { StyledHeader, StyledTournamentDate, StyledTournamentInfo, StyledTournamentMeta, StyledTournamentMetaContainer, StyledTournamentTitle } from "./style";
import { TournamentStatus } from "../../types/tournamentCardTypes";

const TournamentViewPage = (): React.JSX.Element => {
  const { tournamentId } = useParams();

  const {
    data: tournament,
    error,
    isUninitialized,
    isSuccess,
    isError,
    isFetching,
    refetch,
  } = useGetTournamentQuery({ tournamentId: Number(tournamentId) }, { pollingInterval: 0 });

  if (isFetching || isUninitialized || tournamentId === undefined) {
    return <Loading />;
  }

  if (isError) {
    return <>Some error occurred: {error}</>;
  }

  if (isSuccess) {
    return (
      <>
        <StyledHeader>
          <ProfileLogo $isActive={false}>
            <FaUserCircle />
          </ProfileLogo>
        </StyledHeader>
        <StyledTournamentInfo>
          <StyledTournamentTitle>{tournament.title}</StyledTournamentTitle>
          <StyledTournamentDate>{new Date(tournament.date).toLocaleDateString('ru-RU')}</StyledTournamentDate>
          <StyledTournamentMetaContainer>
            <StyledTournamentMeta>{tournament.players.length}</StyledTournamentMeta>
            <StyledTournamentMeta>{tournament.amountGamesPlayed}</StyledTournamentMeta>
            <StyledTournamentMeta>{tournament.isFinished ? TournamentStatus.Finished : TournamentStatus.InProgress}</StyledTournamentMeta>
          </StyledTournamentMetaContainer>
        </StyledTournamentInfo>
      </>
    );
  }

  return <></>;
};

export default TournamentViewPage;
