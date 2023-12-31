import React from "react";
import { FaUserGroup, FaBolt, FaRankingStar } from "react-icons/fa6";
import {
  Card,
  CardHeader,
  CardContent,
  Title,
  ParticipantInfo,
  Icon,
  Text,
  Date,
  BoldText,
} from "./style";
import type { TournamentCardProps } from "../../types/tournamentCardTypes";

const TournamentCard = ({ tournament }: TournamentCardProps): React.JSX.Element => {
  return (
    <Card>
      <CardHeader>
        <Title>{tournament.title}</Title>
        <Date>{tournament.date}</Date>
      </CardHeader>
      <CardContent>
        <ParticipantInfo>
          <Icon>
            <FaUserGroup />
          </Icon>
          <Text>
            <BoldText>{tournament.amountPlayers}</BoldText> Participant
            {tournament.amountPlayers > 1 ? "s" : ""}
          </Text>
        </ParticipantInfo>
        <ParticipantInfo>
          <Icon>
            <FaBolt />
          </Icon>
          <Text>
            <BoldText>{tournament.amountGamesPlayed}</BoldText> Game
            {tournament.amountGamesPlayed > 1 ? "s" : ""} Played
          </Text>
        </ParticipantInfo>

        <ParticipantInfo>
          <Icon>
            <FaRankingStar />
          </Icon>
          <BoldText>{tournament.status}</BoldText>
        </ParticipantInfo>
      </CardContent>
    </Card>
  );
};

export default TournamentCard;
