import React from "react";
import { Link, useParams } from "react-router-dom";
import {
  useGetTournamentQuery,
  useUpdateTournamentMutation,
} from "../../redux/apis/tournament/tournamentApi";
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
import type { Tournament } from "../../types/tournamentTypes";
import type { Bracket as BracketType } from "../../types/bracketTypes";

const TournamentViewPage = (): React.JSX.Element => {
  const { tournamentId } = useParams();

  const viewOnly: boolean = false;

  const {
    data: tournament,
    error,
    isUninitialized,
    isSuccess,
    isError,
    isFetching,
    refetch,
  } = useGetTournamentQuery(
    { tournamentId: Number(tournamentId) },
    // { pollingInterval: viewOnly ? 5000 : 0 },
  );

  const [updateTournament, { isLoading: isMutating }] = useUpdateTournamentMutation();

  const handleUpdate = (bracket: BracketType): void => {
    if (tournament !== undefined) {
      const data: Tournament = { ...tournament, firstStage: bracket };
      updateTournament(data).catch((err) => {
        console.error(err);
      });
    }
  };

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
          <Link to={`/score-scout/profile`}>
            <ProfileLogo $isActive={false}>
              <FaUserCircle />
            </ProfileLogo>
          </Link>
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
              {!viewOnly && (
                <Button primary={true} size={ButtonSize.S}>
                  Finish Tournament
                </Button>
              )}
            </StyledFinishButtonContainer>
          </StyledInfoLowerContainer>
        </StyledTournamentInfo>
        <StyledMainContainer>
          <StyledStageTitle>First Stage</StyledStageTitle>

          <StyledBracketContainer>
            {tournament.firstStage.matches.length === 0 ? (
              <Bracket
                playerNames={tournament.players.map((player) => player.name)}
                viewOnly={viewOnly}
                onUpdate={(bracket: BracketType) => {
                  handleUpdate(bracket);
                }}
              />
            ) : (
              <Bracket
                customBracket={tournament.firstStage}
                viewOnly={viewOnly}
                onUpdate={(bracket: BracketType) => {
                  handleUpdate(bracket);
                }}
              />
            )}
          </StyledBracketContainer>
        </StyledMainContainer>
      </>
    );
  }

  return <></>;
};

export default TournamentViewPage;
