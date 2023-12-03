import React, { useEffect, useState } from "react";
import TournamentCard from "../../components/TournamentCard/TournamentCard";
import { TournamentStatus, type Tournament } from "../../types/tournamentCardTypes";
import {
  ProfileContainer,
  ProfileLogo,
  MainContent,
  TournamentSlider,
  LogoutButton,
  LogoutIcon,
  TournamentTab,
  EmailText,
  CreateTournamentButton,
  CreateIcon,
  EmptyBox,
} from "./style";
import Sidebar from "../../components/Sidebar/Sidebar";
import { TbLogout2 } from "react-icons/tb";
import { FaUserCircle } from "react-icons/fa";
import { MdAdd } from "react-icons/md";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { loadUser, logout } from "../../redux/slices/user/userSlice";
import { useCookies } from "react-cookie";
import { getUser } from "../../redux/selectors/userSelection";

const ProfilePage = (): React.JSX.Element => {
  const [, setCookie, removeCookie] = useCookies(["access", "refresh"]);
  const dispatch = useAppDispatch();
  const [activeTab, setActiveTab] = useState("active");
  const user = useAppSelector(getUser);
  const activeTournaments: Tournament[] = [
    {
      title: "Fall Students Tournament",
      n_participants: 32,
      n_games: 124,
      status: TournamentStatus.InProgress,
      date: "2023-10-22",
    },
    {
      title: "Fall Students Tournament",
      n_participants: 32,
      n_games: 124,
      status: TournamentStatus.InProgress,
      date: "2023-10-22",
    },
  ];

  const archivedTournaments: Tournament[] = [
    {
      title: "1st Archived Tournament",
      n_participants: 9999,
      n_games: 80,
      status: TournamentStatus.Finished,
      date: "2005-12-04",
    },
    {
      title: "2nd Archived Tournament",
      n_participants: 10,
      n_games: 80,
      status: TournamentStatus.Finished,
      date: "2005-12-04",
    },
    {
      title: "3rd Archived Tournament",
      n_participants: 4,
      n_games: 6,
      status: TournamentStatus.Finished,
      date: "2023-11-11",
    },
    {
      title: "4th Archived Tournament",
      n_participants: 4,
      n_games: 6,
      status: TournamentStatus.Finished,
      date: "2023-11-11",
    },
    {
      title: "5th Archived Tournament",
      n_participants: 4,
      n_games: 6,
      status: TournamentStatus.Finished,
      date: "2023-11-11",
    },
    {
      title: "6th Archived Tournament",
      n_participants: 4,
      n_games: 6,
      status: TournamentStatus.Finished,
      date: "2023-11-11",
    },
    {
      title: "7th Archived Tournament",
      n_participants: 4,
      n_games: 6,
      status: TournamentStatus.Finished,
      date: "2023-11-11",
    },
    {
      title: "8th Archived Tournament",
      n_participants: 4,
      n_games: 6,
      status: TournamentStatus.Finished,
      date: "2023-11-11",
    },
  ];
  const handleLogout = (): void => {
    removeCookie("access", { path: "/" });
    removeCookie("refresh", { path: "/" });
    dispatch(logout());
  };

  useEffect(() => {
    dispatch(loadUser(user))
      .then((res) => {
        if (res.payload?.access != null) {
          setCookie("access", res.payload.access, { path: "/" });
        }
        if (res.type === "user/getUser/rejected") {
          removeCookie("access", { path: "/" });
          removeCookie("refresh", { path: "/" });
          dispatch(logout());
        }
      })
      .catch((e) => {});
  }, []);

  return (
    <>
      {user.loadState === "success" ? (
        <ProfileContainer>
          <Sidebar>
            <div onClick={handleLogout}>
              <LogoutButton>
                <LogoutIcon>
                  <TbLogout2 />
                </LogoutIcon>
                Log out
              </LogoutButton>
            </div>
            <EmailText>{user.email}</EmailText>
            <TournamentSlider>
              <TournamentTab
                $active={activeTab === "active"}
                onClick={() => {
                  setActiveTab("active");
                }}
              >
                Active tournaments
              </TournamentTab>
              <TournamentTab
                $active={activeTab === "archived"}
                onClick={() => {
                  setActiveTab("archived");
                }}
              >
                Archived tournaments
              </TournamentTab>
            </TournamentSlider>
            <CreateTournamentButton>
              Create tournament
              <CreateIcon>
                <MdAdd />
              </CreateIcon>
            </CreateTournamentButton>
          </Sidebar>

          <MainContent>
            <EmptyBox />
            {activeTab === "active"
              ? activeTournaments.map((tournament, index) => (
                  <TournamentCard key={index} tournament={tournament}></TournamentCard>
                ))
              : archivedTournaments.map((tournament, index) => (
                  <TournamentCard key={index} tournament={tournament}></TournamentCard>
                ))}
          </MainContent>
          <ProfileLogo>
            <FaUserCircle />
          </ProfileLogo>
        </ProfileContainer>
      ) : (
        <></>
      )}
    </>
  );
};

export default ProfilePage;
