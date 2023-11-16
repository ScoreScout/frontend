import styled from "styled-components";

interface TournamentTabProps {
  active: boolean;
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
  margin: 1.25rem;
  font-size: 2.5rem;
  color: ${props => props.theme.color.mainColor};
  z-index: 10;
  cursor: pointer;
`;

const MainContent = styled.div`
  margin-top: 10rem;
  padding: 0rem 10rem 0rem 5rem;
  height: 100vh;
  overflow-y: scroll;
  flex-grow: 1;
  justify-content: center;
  flex-direction: column;
  background-color: ${props => props.theme.color.bgColor};
`;

const LogoutButton = styled.button`
  display: flex;
  width: fit-content;
  align-items: center;
  background: none;
  border: none;
  color: ${(props) => props.theme.color.mainColor};
  font-size: 1.5rem;
  font-weight: bold;
  padding: 1rem;
  cursor: pointer;
`;

const LogoutIcon = styled.span`
  margin-right: 8px;
`;

const EmailText = styled.div`
  margin: 20px 0;
  align-self: self-end;
  font-size: 1.5rem;
  padding-right: 2rem;
`;

const TournamentSlider = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 20px;
  padding-left: 1rem;
`;

const TournamentTab = styled.button<TournamentTabProps>`
  background: none;
  border: none;
  border-right: 0.5rem solid ${props => props.active ? props.theme.color.mainColor : props.theme.color.secondryBgColor};
  width: 100%;
  padding: 10px 0;
  cursor: pointer;
  font-size: 1.5rem;
  font-weight: ${props => props.active ? 'bold' : 'normal'};
  color: ${props => props.active ? props.theme.color.mainColor : props.theme.color.notActiveColor};
  &:first-child {
    margin-bottom: 10px;
  }
`;

const CreateTournamentButton = styled.button`
  display: flex;
  margin-bottom: 1rem;
  align-self: center;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  border: none;
  color: ${props => props.theme.color.fontColor};
  background: none;
  border-radius: 50%;
  padding: 1rem;
  cursor: pointer;
  font-weight: bold;
  font-size: 1.3rem;

  &:hover {
    border-radius: 6.25rem;
    color: ${props => props.theme.color.bgColor};
    background-color: ${props => props.theme.color.mainColor};
  }
`;

const CreateIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: ${props => props.theme.color.mainColor};
  color: ${props => props.theme.color.bgColor};
  width: 34px;
  height: 30px;
  margin-left: 10px;
  font-size: 1.6rem;
  padding-bottom: 0.2rem;
`;

export {
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
