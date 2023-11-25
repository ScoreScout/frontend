import styled from "styled-components";
import { globalRegularFontStyles, globalSemiBoldFontStyles, globalBoldFontStyles } from "../../theme/FontStyles";

const Card = styled.div`
  box-sizing: border-box;
  flex-shrink: 0;
  padding: 1.25rem 1.25rem 1.25rem 1.87rem;
  margin: 1.25rem 5rem 1.25rem 5rem;
  
  width: 50rem;
  height: 11rem;
  background-color: ${(props) => props.theme.color.bgColor};
  
  border-radius: 1.25rem;
  box-shadow: 0 0 4px 2px rgba(0, 0, 0, 0.25);
  
  &:hover {
    box-shadow: 0 0 8px 4px rgba(0, 0, 0, 0.25);
  }
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
`;

const CardContent = styled.div`
  /* background-color: black; */
  height: 7.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const Title = styled.h1`
  ${globalSemiBoldFontStyles};
  color: ${(props) => props.theme.color.mainColor};
  font-size: 1.56rem;
`;

const Text = styled.span`
  ${globalRegularFontStyles};
  font-size: 1.25rem;
`;
const Date = styled(Text)`
  ${globalRegularFontStyles};
  text-align: right;
  font-size: 1.25rem;
`;

const ParticipantInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.5rem;
`;

const Icon = styled.span`
  color: ${(props) => props.theme.color.notActiveColor};
  font-size: 1.25rem;
`;

const BoldText = styled.span`
  ${globalBoldFontStyles};
  font-size: 1.25rem;
`;

export { Card, CardHeader, CardContent, Title, ParticipantInfo, Icon, Text, Date, BoldText };
