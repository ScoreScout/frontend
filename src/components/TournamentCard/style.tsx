import styled from 'styled-components';


const Card = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme.color.bgColor};
  border: 1.5px solid #ccc;
  border-radius: 20px;
  padding: 1rem 2rem;
  width: 50rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);
  margin-bottom: 2%;
  &:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.25);
  };
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

const Title = styled.h1`
  font-size: 1.5rem;
  color: ${(props) => props.theme.color.mainColor};
  margin: 0;
  flex: 1;
`;

const Text = styled.span`
  font-size: 1rem;
  color: #333;
`;
const Date = styled(Text)`
  font-size: 1rem;
  text-align: right;
  color: #999;
  white-space: nowrap;
`;

const ParticipantInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 8px;
`;

const Icon = styled.span`
  color: ${(props) => props.theme.color.notActiveColor};
`;

const BoldText = styled.span`
  font-weight: bold;
`;


export {
  Card,
  CardHeader,
  Title,
  ParticipantInfo,
  Icon,
  Text,
  Date,
  BoldText,
};