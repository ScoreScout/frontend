import React, { useEffect, useState } from "react";
import TournamentCard from "../../components/TournamentCard/TournamentCard";
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
import { LoadType } from "../../types/userTypes";
import {
  fetchActiveTournaments,
  fetchArchivedTournaments,
} from "../../redux/slices/tournament/tournamentSlice";
import {
  getActiveTournaments,
  getArchivedTournaments,
} from "../../redux/selectors/tournamentSelectors";

const ProfilePage = (): React.JSX.Element => {
  const [, setCookie, removeCookie] = useCookies(["access", "refresh"]);
  const dispatch = useAppDispatch();
  const [activeTab, setActiveTab] = useState("active");
  const user = useAppSelector(getUser);
  const activeTournaments = useAppSelector(getActiveTournaments);
  const archivedTournaments = useAppSelector(getArchivedTournaments);
  const [archivedLoaded, setArchivedLoaded] = useState(false);
  const [activeLoaded, setActiveLoaded] = useState(false);

  const handleLogout = (): void => {
    removeCookie("access", { path: "/" });
    removeCookie("refresh", { path: "/" });
    dispatch(logout());
  };

  const handleActiveTabClick = (): void => {
    // Only fetch active tournaments if they haven't been loaded yet
    if (!activeLoaded) {
      void dispatch(fetchActiveTournaments());
      setActiveLoaded(true);
    }
    setActiveTab("active");
  };

  const handleArchivedTabClick = (): void => {
    // Only fetch archived tournaments if they haven't been loaded yet
    if (!archivedLoaded) {
      void dispatch(fetchArchivedTournaments());
      setArchivedLoaded(true);
    }
    setActiveTab("archived");
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

    // Dispatch Active tournaments by default
    void dispatch(fetchActiveTournaments());
    setActiveLoaded(true);
  }, [dispatch]);

  return (
    <>
      {user.loadState === LoadType.success ? (
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
                  handleActiveTabClick();
                }}
              >
                Active Tournaments
              </TournamentTab>
              <TournamentTab
                $active={activeTab === "archived"}
                onClick={() => {
                  handleArchivedTabClick();
                }}
              >
                Archived Tournaments
              </TournamentTab>
            </TournamentSlider>
            <CreateTournamentButton>
              Create Tournament
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
