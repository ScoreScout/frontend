import styled from "styled-components";
import {
  globalBoldFontStyles,
  globalRegularFontStyles,
  globalSemiBoldFontStyles,
} from "../../theme/FontStyles";

export const StyledHeader = styled.div`
  height: 5rem;
`;

export const StyledTournamentInfo = styled.div`
  background-color: ${(props) => props.theme.color.secondaryBgColor};
  padding: 2.62rem;
`;
export const StyledTitleDateContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const StyledTournamentTitle = styled.div`
  color: ${(props) => props.theme.color.mainColor};
  ${globalSemiBoldFontStyles};
  font-size: 1.875rem;
`;
export const StyledTournamentDate = styled.div`
  ${globalRegularFontStyles}
`;
export const StyledTournamentMetaContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 0.87rem;
`;
export const StyledTournamentMeta = styled.div`
  ${globalRegularFontStyles}
`;

export const StyledBoldSpan = styled.span`
  ${globalBoldFontStyles}
`;

export const StyledFinishButtonContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
`;

export const StyledInfoLowerContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const StyledMainContainer = styled.div`
  margin: 2.5rem;
`;

export const StyledStageTitle = styled.div`
  ${globalSemiBoldFontStyles}
`;

export const StyledBracketContainer = styled.div`
  margin: 2.5rem 0;
`;

export const SpinnerOverlay = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9;
`;
