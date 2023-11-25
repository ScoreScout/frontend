import styled from "styled-components";
import { globalRegularFontStyles, globalSemiBoldFontStyles } from "../../theme/FontStyles";

interface TournamentTabProps {
  $active: boolean;
}

const ProfileContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  height: 100vh;
  overflow-y: hidden;
`;

const ProfileLogo = styled.div`
  position: absolute;
  top: 1.25rem;
  right: 1.25rem;
  
  height: 2.5rem;
  width: 2.5rem;
  font-size: 2.5rem;
  color: ${(props) => props.theme.color.mainColor};
  cursor: pointer;
`;

const MainContent = styled.div`
  height: 100vh;
  overflow-y: scroll;
  flex-grow: 1;
  justify-content: center;
  flex-direction: column;
  background-color: ${(props) => props.theme.color.bgColor};
`;

const LogoutButton = styled.button`
  position: absolute;
  top: 2.5rem;
  left: 2.5rem;
  gap: 0.5rem;
  display: flex;
  align-items: center;
  background: none;
  border: none;
  ${globalSemiBoldFontStyles};
  color: ${(props) => props.theme.color.mainColor};
  cursor: pointer;
`;

const LogoutIcon = styled.span`
  ${globalSemiBoldFontStyles};
  display: flex;
  width: 1.5rem;
  height: 1.5rem;
  justify-content: center;
  align-items: center;
`;

const EmailText = styled.div`
  align-self: self-end;
  margin-right: 1.75rem;
  ${globalRegularFontStyles}
  font-size: 1.25rem;
`;

const TournamentSlider = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const TournamentTab = styled.button<TournamentTabProps>`
  background: none;
  border: none;
  cursor: pointer;

  align-self: self-end;
  justify-content: center;
  width: 15rem;
  text-align: right;
  padding: 0.5rem 1.75rem 0.5rem 0;

  border-right: 0.5rem solid
    ${(props) => (props.$active ? props.theme.color.mainColor : props.theme.color.secondaryBgColor)};
  

  ${(globalRegularFontStyles)};
  /* ${(props) => (props.$active ? globalSemiBoldFontStyles : globalRegularFontStyles)}; */
  font-size: 1.25rem;

  color: ${(props) =>
    props.$active ? props.theme.color.mainColor : props.theme.color.notActiveColor};

  &:first-child {
    margin-bottom: 1rem;
  }
`;

const CreateTournamentButton = styled.button`
  display: flex;
  margin-bottom: 2.5rem;
  align-self: self-end;
  align-items: center;
  flex-direction: row;
  justify-content: space-evenly;
  border: none;
  background: none;
  border-radius: 50%;
  padding: 0.5rem 0 0.5rem 1rem;
  margin-right: 3rem;
  cursor: pointer;
  ${globalRegularFontStyles}
  color: ${(props) => props.theme.color.fontColor};
  font-size: 1.25rem;
  width: 15rem;
  height: 2.5rem;
  &:hover {
    border-radius: 6.25rem;
    color: ${(props) => props.theme.color.bgColor};
    background-color: ${(props) => props.theme.color.mainColor};
  }
`;

const CreateIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-radius: 50%;
  background-color: ${props => props.theme.color.mainColor};
  ${globalRegularFontStyles};
  width: 1.875rem;
  height: 1.875rem;
  font-size: 1.5rem;
  color: white;
`;

const EmptyBox = styled.div`
  height: 8rem;
  background: none;
`;

export {
  EmptyBox,
  ProfileContainer,
  ProfileLogo,
  MainContent,
  LogoutButton,
  LogoutIcon,
  TournamentSlider,
  EmailText,
  TournamentTab,
  CreateTournamentButton,
  CreateIcon,
};
