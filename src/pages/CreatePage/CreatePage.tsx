import React, { useCallback, useState } from "react";
import { Link } from "react-router-dom";

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

import { type Player } from "../../types/bracketTypes";
import { CreatePageTabs as Tabs } from "../../types/createPageTabTypes";

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
  const [activeTab, setActiveTab] = useState<string>(Tabs.CHOOSE_RATING);

  const [ratingToggleOn, setRatingToggleOn] = useState<boolean>(false);
  const [players, setPlayers] = useState<Player[]>([]);

  const handleRatingToggle = useCallback((): void => {
    setRatingToggleOn((prev) => !prev);
  }, []);

  const [numStages, setNumStages] = useState<number | null>(null);
  const handleNumStagesOptionClick = useCallback((option: number): void => {
    setNumStages(option);
  }, []);

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
          <FirstStage players={players} numStages={numStages} ratingToggleOn={ratingToggleOn} />
        );
      case Tabs.SECOND_STAGE:
        return <SecondStage />;
      default:
        return null;
    }
  };

  const handleNext = (): void => {
    switch (activeTab) {
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

  return (
    <CreateContainer>
      <Sidebar>
        <SidebarContainer>
          <CreateTitle>Create a tournament</CreateTitle>
          <SidebarSlider>
            <SliderTab
              $active={activeTab === "chooseRating"}
              onClick={() => {
                setActiveTab("chooseRating");
              }}
            >
              Choose rating
            </SliderTab>
            <SliderTab
              $active={activeTab === "addPlayers"}
              onClick={() => {
                setActiveTab("addPlayers");
              }}
            >
              Add players
            </SliderTab>
            <SliderTab
              $active={activeTab === "numStages"}
              onClick={() => {
                setActiveTab("numStages");
              }}
            >
              Number of stages
            </SliderTab>
            <SliderTab
              $active={activeTab === "firstStage"}
              onClick={() => {
                setActiveTab("firstStage");
              }}
            >
              First stage
            </SliderTab>
            <SliderTab
              $active={activeTab === "secondStage"}
              onClick={() => {
                setActiveTab("secondStage");
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
          {activeTab !== "chooseRating" ? (
            <Button primary={false} size={ButtonSize.S} onClick={handleBack}>
              <ButtonText>
                <ArrowLeftIcon size={"24"} color='#D22D19' />
                Back
              </ButtonText>
            </Button>
          ) : (
            <div></div>
          )}
          {activeTab !== "secondStage" ? (
            <Button primary={true} size={ButtonSize.S} onClick={handleNext}>
              <ButtonText>
                Next <ArrowRightIcon size={"24"} color='#FFFFFF' />
              </ButtonText>
            </Button>
          ) : (
            <Button primary={true} size={ButtonSize.S}>
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
