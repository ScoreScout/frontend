import React, { useCallback, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import Sidebar from "../../components/Sidebar/Sidebar";
import Button from "../../components/Button/Button";
import { ButtonSize } from "../../types/buttonTypes";
import ArrowRightIcon from "../../components/icons/ArrowRightIcon";
import ArrowLeftIcon from "../../components/icons/ArrowLeftIcon";
import CupIcon from "../../components/icons/CupIcon";

import AddPlayers from "./TabsContents/AddPlayers/AddPlayers";
import ChooseRating from "./TabsContents/ChooseRating/ChooseRating";
import FirstStage from "./TabsContents/FirstStage/FirstStage";
import NumStages from "./TabsContents/NumStages/NumStages";
import SecondStage from "./TabsContents/SecondStage/SecondStage";
import TournamentTitle from "./TabsContents/TournamentTitle/TournamentTitle";

import { type Player } from "../../types/bracketTypes";
import { CreatePageTabs as Tabs, CompetitionOptions } from "../../types/createPageTabTypes";
import { type Tournament, TournamentStatus } from "../../types/tournamentCardTypes";

import { toast } from "react-toastify";
import { useAppDispatch } from "../../redux/hooks";
import { addTournament } from "../../redux/slices/tournament/tournamentSlice";

import {
  CreateContainer,
  CreateTitle,
  SidebarContainer,
  MainContentContainer,
  SidebarSlider,
  SliderTab,
  ProfileLogo,
  ButtonsContainer,
  ButtonText,
} from "./style";

import { FaUserCircle } from "react-icons/fa";

const CreatePage = (): React.JSX.Element => {
  const [tournamentTitle, setTournamentTitle] = useState<string>("" as string);

  const [activeTab, setActiveTab] = useState<string>(Tabs.TOURNAMENT_TITLE);

  const [ratingToggleOn, setRatingToggleOn] = useState<boolean>(false);
  const [players, setPlayers] = useState<Player[]>([]);

  const handleRatingToggle = useCallback((): void => {
    setRatingToggleOn((prev) => !prev);
  }, []);

  const [numStages, setNumStages] = useState<number>(1);
  const handleNumStagesOptionClick = useCallback((option: number): void => {
    setNumStages(option);
  }, []);

  const [tournamentType, setTournamentType] = useState<CompetitionOptions>(CompetitionOptions.NONE);
  const handleTournamentOptionClick = (option: CompetitionOptions): void => {
    setTournamentType(option);
  };

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const renderTabContent = (): React.ReactNode => {
    switch (activeTab) {
      case Tabs.CHOOSE_RATING:
        return <ChooseRating toggleOn={ratingToggleOn} handleToggle={handleRatingToggle} />;
      case Tabs.ADD_PLAYERS:
        return (
          <AddPlayers ratingToggleOn={ratingToggleOn} players={players} setPlayers={setPlayers} />
        );
      case Tabs.NUM_STAGES:
        return (
          <NumStages selectedOption={numStages} handleOptionClick={handleNumStagesOptionClick} />
        );
      case Tabs.FIRST_STAGE:
        return (
          <FirstStage
            players={players}
            optionChosen={tournamentType}
            handleOptionClick={handleTournamentOptionClick}
          />
        );
      case Tabs.SECOND_STAGE:
        return <SecondStage />;
      case Tabs.TOURNAMENT_TITLE:
        return (
          <TournamentTitle
            tournamentTitle={tournamentTitle}
            setTournamentTitle={setTournamentTitle}
          />
        );
      default:
        return null;
    }
  };

  const handleNext = (): void => {
    switch (activeTab) {
      case Tabs.TOURNAMENT_TITLE:
        setActiveTab(Tabs.CHOOSE_RATING);
        break;
      case Tabs.CHOOSE_RATING:
        setActiveTab(Tabs.ADD_PLAYERS);
        break;
      case Tabs.ADD_PLAYERS:
        setActiveTab(Tabs.NUM_STAGES);
        break;
      case Tabs.NUM_STAGES:
        setActiveTab(Tabs.FIRST_STAGE);
        break;
      case Tabs.FIRST_STAGE:
        setActiveTab(Tabs.SECOND_STAGE);
        break;
      default:
        break;
    }
  };

  const handleBack = (): void => {
    switch (activeTab) {
      case Tabs.CHOOSE_RATING:
        setActiveTab(Tabs.TOURNAMENT_TITLE);
        break;
      case Tabs.ADD_PLAYERS:
        setActiveTab(Tabs.CHOOSE_RATING);
        break;
      case Tabs.NUM_STAGES:
        setActiveTab(Tabs.ADD_PLAYERS);
        break;
      case Tabs.FIRST_STAGE:
        setActiveTab(Tabs.NUM_STAGES);
        break;
      case Tabs.SECOND_STAGE:
        setActiveTab(Tabs.FIRST_STAGE);
        break;
      default:
        break;
    }
  };

  const submitTournament = async (): Promise<void> => {
    const newTournament: Tournament = {
      title: tournamentTitle,
      date: new Date().toLocaleDateString(),
      amountPlayers: players.length,
      amountGamesPlayed: 0,
      status: TournamentStatus.InProgress,
    };

    if (newTournament.title === "") {
      toast.error("Please write a title for your tournament");
    } else if (newTournament.amountPlayers === 0) {
      toast.error("Please add players to your tournament");
    } else {
      try {
        await dispatch(addTournament(newTournament));
        toast.success("Tournament created successfully!");
        navigate("/score-scout/profile");
      } catch (error) {
        toast.error("Error creating tournament");
      }
    }
  };

  return (
    <CreateContainer>
      <Sidebar>
        <SidebarContainer>
          <CreateTitle>Create a tournament</CreateTitle>
          <SidebarSlider>
            <SliderTab
              $active={activeTab === Tabs.TOURNAMENT_TITLE}
              onClick={() => {
                setActiveTab(Tabs.TOURNAMENT_TITLE);
              }}
            >
              Tournament title
            </SliderTab>
            <SliderTab
              $active={activeTab === Tabs.CHOOSE_RATING}
              onClick={() => {
                setActiveTab(Tabs.CHOOSE_RATING);
              }}
            >
              Choose rating
            </SliderTab>
            <SliderTab
              $active={activeTab === Tabs.ADD_PLAYERS}
              onClick={() => {
                setActiveTab(Tabs.ADD_PLAYERS);
              }}
            >
              Add players
            </SliderTab>
            <SliderTab
              $active={activeTab === Tabs.NUM_STAGES}
              onClick={() => {
                setActiveTab(Tabs.NUM_STAGES);
              }}
            >
              Number of stages
            </SliderTab>
            <SliderTab
              $active={activeTab === Tabs.FIRST_STAGE}
              onClick={() => {
                setActiveTab(Tabs.FIRST_STAGE);
              }}
            >
              First stage
            </SliderTab>
            <SliderTab
              $active={activeTab === Tabs.SECOND_STAGE}
              onClick={() => {
                setActiveTab(Tabs.SECOND_STAGE);
              }}
            >
              Second stage
            </SliderTab>
          </SidebarSlider>
        </SidebarContainer>
      </Sidebar>

      <MainContentContainer>
        <ProfileLogo>
          <Link to={`/score-scout/profile`}>
            <FaUserCircle />
          </Link>
        </ProfileLogo>

        {renderTabContent()}

        <ButtonsContainer>
          {activeTab !== Tabs.TOURNAMENT_TITLE ? (
            <Button primary={false} size={ButtonSize.S} onClick={handleBack}>
              <ButtonText>
                <ArrowLeftIcon size={"24"} color='#D22D19' />
                Back
              </ButtonText>
            </Button>
          ) : (
            <div></div>
          )}
          {activeTab !== Tabs.SECOND_STAGE ? (
            <Button primary={true} size={ButtonSize.S} onClick={handleNext}>
              <ButtonText>
                Next <ArrowRightIcon size={"24"} color='#FFFFFF' />
              </ButtonText>
            </Button>
          ) : (
            <Button
              primary={true}
              size={ButtonSize.S}
              onClick={() => {
                submitTournament()
                  .then(() => {
                    // Any additional synchronous code after the promise resolves
                  })
                  .catch(() => {
                    toast.error("Error creating tournament");
                  });
              }}
            >
              <ButtonText>
                Create <CupIcon size={"24"} color='#FFFFFF' />
              </ButtonText>
            </Button>
          )}
        </ButtonsContainer>
      </MainContentContainer>
    </CreateContainer>
  );
};

export default CreatePage;
