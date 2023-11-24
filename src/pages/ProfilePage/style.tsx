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
  top: 0;
  right: 0;
  margin: 2rem 3rem;
  font-size: 3.5rem;
  color: ${(props) => props.theme.color.mainColor};
  z-index: 10;
  cursor: pointer;
`;

const MainContent = styled.div`
  padding: 0rem 10rem 0rem 5rem;
  height: 100vh;
  overflow-y: scroll;
  flex-grow: 1;
  justify-content: center;
  flex-direction: column;
  background-color: ${(props) => props.theme.color.bgColor};
`;

const LogoutButton = styled.button`
  display: flex;
  width: 10rem;
  align-items: center;
  background: none;
  border: none;
  color: ${(props) => props.theme.color.mainColor};
  font-size: 1.75rem;
  font-weight: bold;
  margin: 2rem;
  cursor: pointer;
`;

const LogoutIcon = styled.span`
  margin-right: 0.5rem;
`;

const EmailText = styled.div`
  align-self: self-end;
  margin-right: 1rem;
  padding-right: 2rem;
  ${globalRegularFontStyles}
  font-size: 2rem;
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
  width: 23rem;
  text-align: right;
  padding: 1rem 2.5rem 0rem 0;

  border-right: 0.5rem solid
    ${(props) => (props.$active ? props.theme.color.mainColor : props.theme.color.secondryBgColor)};

  ${(props) => (props.active ? globalSemiBoldFontStyles : globalRegularFontStyles)}
  font-size: 1.8rem;

  color: ${(props) =>
    props.$active ? props.theme.color.mainColor : props.theme.color.notActiveColor};

  &:first-child {
    margin-bottom: 1rem;
  }
`;

const CreateTournamentButton = styled.button`
  display: flex;
  margin-bottom: 1rem;
  align-self: self-end;
  align-items: end;
  flex-direction: row;
  justify-content: space-between;
  border: none;
  background: none;
  border-radius: 50%;
  padding: 0.5rem 0 0.5rem 1rem;
  margin-right: 3rem;
  cursor: pointer;
  ${globalRegularFontStyles}
  color: ${(props) => props.theme.color.fontColor};
  font-size: 2rem;
  width: 21rem;
  &:hover {
    border-radius: 6.25rem;
    color: ${(props) => props.theme.color.bgColor};
    background-color: ${(props) => props.theme.color.mainColor};
  }
`;

const CreateIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: ${(props) => props.theme.color.mainColor};
  color: ${(props) => props.theme.color.bgColor};
  width: 2.5rem;
  height: 2.3rem;
  font-size: 2rem;
  padding-bottom: 0.2rem;
`;

const EmptyBox = styled.div`
  height: 12.5rem;
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
