import styled from "styled-components";
import { globalRegularFontStyles, globalBoldFontStyles } from "../../theme/FontStyles";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.color.bgColor};
  border: 1.5px solid #ccc;
  border-radius: 20px;
  padding: 1rem 2rem;
  width: 60rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);
  margin-bottom: 2%;
  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.25);
  }
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

const Title = styled.h1`
  ${globalBoldFontStyles};
  color: ${(props) => props.theme.color.mainColor};
  font-size: 2rem;
`;

const Text = styled.span`
  ${globalRegularFontStyles};
  font-size: 1.5rem;
`;
const Date = styled(Text)`
  ${globalRegularFontStyles};
  text-align: right;
  font-size: 1.5rem;
`;

const ParticipantInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
`;

const Icon = styled.span`
  color: ${(props) => props.theme.color.notActiveColor};
  font-size: 1.75rem;
`;

const BoldText = styled.span`
  ${globalBoldFontStyles};
  font-size: 1.5rem;
`;

export { Card, CardHeader, Title, ParticipantInfo, Icon, Text, Date, BoldText };
