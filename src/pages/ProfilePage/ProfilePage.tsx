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
  EmptyTournamentsMessage,
} from "./style";
import { toast } from "react-toastify";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
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
  getActiveTournamentsState,
  getArchivedTournamentsState,
} from "../../redux/selectors/tournamentSelectors";

const ProfilePage = (): React.JSX.Element => {
  const [, setCookie, removeCookie] = useCookies(["access", "refresh"]);
  const dispatch = useAppDispatch();
  const [activeTab, setActiveTab] = useState("active");
  const user = useAppSelector(getUser);
  const activeTournamentsState = useAppSelector(getActiveTournamentsState);
  const archivedTournamentsState = useAppSelector(getArchivedTournamentsState);
  const handleLogout = (): void => {
    removeCookie("access", { path: "/" });
    removeCookie("refresh", { path: "/" });
    dispatch(logout());
  };

  const handleActiveTabClick = (): void => {
    setActiveTab("active");
    void dispatch(fetchActiveTournaments());
    if (activeTournamentsState.error !== null) {
      toast.error(activeTournamentsState.error);
    }
  };

  const handleArchivedTabClick = (): void => {
    setActiveTab("archived");
    void dispatch(fetchArchivedTournaments());
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
  }, [dispatch]);

  useEffect(() => {
    if (activeTournamentsState.error !== null) {
      toast.error(activeTournamentsState.error);
    }
  }, [activeTournamentsState.error]);

  useEffect(() => {
    if (archivedTournamentsState.error !== null) {
      toast.error(archivedTournamentsState.error);
    }
  }, [archivedTournamentsState.error]);

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

            {/* Active tab is Active Tournaments */}
            {activeTab === "active" &&
              (activeTournamentsState.isLoading ? (
                <LoadingSpinner />
              ) : activeTournamentsState.error === null &&
                activeTournamentsState.tournaments.length === 0 ? (
                <EmptyTournamentsMessage>There are no active tournaments</EmptyTournamentsMessage>
              ) : (
                activeTournamentsState.tournaments.map((tournament, index) => (
                  <TournamentCard key={index} tournament={tournament} />
                ))
              ))}

            {/* Active tab is Archived Tournaments */}
            {activeTab === "archived" &&
              (archivedTournamentsState.isLoading ? (
                <LoadingSpinner />
              ) : archivedTournamentsState.error === null &&
                archivedTournamentsState.tournaments.length === 0 ? (
                <EmptyTournamentsMessage>There are no archived tournaments</EmptyTournamentsMessage>
              ) : (
                archivedTournamentsState.tournaments.map((tournament, index) => (
                  <TournamentCard key={index} tournament={tournament} />
                ))
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
