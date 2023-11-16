import React from 'react';
import {FaUserGroup, FaBolt, FaRankingStar} from 'react-icons/fa6';
import { Card, CardHeader, Title, ParticipantInfo, Icon, Text, Date, BoldText } from './style';
import { Tournament, TournamentCardProps } from '../../types/tournamentCardTypes';

const TournamentCard = ({tournament, margin}: TournamentCardProps) => {
  return (
    <Card>
      <CardHeader>
        <Title>{tournament.title}</Title>
        <Date>{tournament.date}</Date>
      </CardHeader>
      <ParticipantInfo>
        <Icon><FaUserGroup/></Icon>
        <Text><BoldText>{tournament.n_participants}</BoldText> participants</Text>
      </ParticipantInfo>
      <ParticipantInfo>
        <Icon><FaBolt/></Icon>
        <Text><BoldText>{tournament.n_games}</BoldText> games played</Text>
      </ParticipantInfo>

      <ParticipantInfo>
        <Icon><FaRankingStar/></Icon>
        <BoldText>{tournament.status}</BoldText>
      </ParticipantInfo>
    </Card>
  );
};

export default TournamentCard;

