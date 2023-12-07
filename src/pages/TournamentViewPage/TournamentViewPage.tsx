import React from "react";
import { useParams } from "react-router-dom";
import { useGetTournamentQuery } from "../../redux/apis/tournament/tournamentApi";
import Loading from "../../components/Loading/Loading";
import { ProfileLogo } from "../ProfilePage/style";
import { FaUserCircle } from "react-icons/fa";
import {
  StyledBoldSpan,
  StyledBracketContainer,
  StyledFinishButtonContainer,
  StyledHeader,
  StyledInfoLowerContainer,
  StyledMainContainer,
  StyledStageTitle,
  StyledTitleDateContainer,
  StyledTournamentDate,
  StyledTournamentInfo,
  StyledTournamentMeta,
  StyledTournamentMetaContainer,
  StyledTournamentTitle,
} from "./style";
import { TournamentStatus } from "../../types/tournamentCardTypes";
import Button from "../../components/Button/Button";
import { ButtonSize } from "../../types/buttonTypes";
import Bracket from "../../components/Bracket/Bracket";

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
          <StyledTitleDateContainer>
            <StyledTournamentTitle>{tournament.title}</StyledTournamentTitle>
            <StyledTournamentDate>
              {new Date(tournament.date).toLocaleDateString("ru-RU")}
            </StyledTournamentDate>
          </StyledTitleDateContainer>
          <StyledInfoLowerContainer>
            <StyledTournamentMetaContainer>
              <StyledTournamentMeta>
                <StyledBoldSpan>{tournament.players.length}</StyledBoldSpan> participants
              </StyledTournamentMeta>
              <StyledTournamentMeta>
                <StyledBoldSpan>{tournament.amountGamesPlayed}</StyledBoldSpan> games played
              </StyledTournamentMeta>
              <StyledTournamentMeta>
                <StyledBoldSpan>
                  {tournament.isFinished ? TournamentStatus.Finished : TournamentStatus.InProgress}
                </StyledBoldSpan>
              </StyledTournamentMeta>
            </StyledTournamentMetaContainer>
            <StyledFinishButtonContainer>
              <Button primary={true} size={ButtonSize.S}>
                Finish Tournament
              </Button>
            </StyledFinishButtonContainer>
          </StyledInfoLowerContainer>
        </StyledTournamentInfo>
        <StyledMainContainer>
          <StyledStageTitle>First Stage</StyledStageTitle>

          <StyledBracketContainer>
            <Bracket playerNames={tournament.players.map((player) => player.name)}></Bracket>
            {/* <Bracket customBracket={tournament.firstStage}></Bracket> */}
          </StyledBracketContainer>
        </StyledMainContainer>
      </>
    );
  }

  return <></>;
};

export default TournamentViewPage;
