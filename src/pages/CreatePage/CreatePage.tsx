import React, { useState } from "react";
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
  const [activeTab, setActiveTab] = useState("chooseRating");

  const renderTabContent = () => {
    switch (activeTab) {
      case "chooseRating":
        return <ChooseRating />;
      case "addPlayers":
        return <AddPlayers />;
      case "numStages":
        return <NumStages />;
      case "firstStage":
        return <FirstStage />;
      case "secondStage":
        return <SecondStage />;
      default:
        return null;
    }
  };

  const handleNext = () => {
    switch (activeTab) {
      case "chooseRating":
        setActiveTab("addPlayers");
        break;
      case "addPlayers":
        setActiveTab("numStages");
        break;
      case "numStages":
        setActiveTab("firstStage");
        break;
      case "firstStage":
        setActiveTab("secondStage");
        break;
      default:
        break;
    }
  };

  const handleBack = () => {
    switch (activeTab) {
      case "addPlayers":
        setActiveTab("chooseRating");
        break;
      case "numStages":
        setActiveTab("addPlayers");
        break;
      case "firstStage":
        setActiveTab("numStages");
        break;
      case "secondStage":
        setActiveTab("firstStage");
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
              onClick={() => setActiveTab("chooseRating")}
            >
              Choose rating
            </SliderTab>
            <SliderTab
              $active={activeTab === "addPlayers"}
              onClick={() => setActiveTab("addPlayers")}
            >
              Add players
            </SliderTab>

            <SliderTab
              $active={activeTab === "numStages"}
              onClick={() => setActiveTab("numStages")}
            >
              Number of stages
            </SliderTab>
            <SliderTab
              $active={activeTab === "firstStage"}
              onClick={() => setActiveTab("firstStage")}
            >
              First stage
            </SliderTab>
            <SliderTab
              $active={activeTab === "secondStage"}
              onClick={() => setActiveTab("secondStage")}
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
          {activeTab !== "chooseRating" ?
          <Button primary={false} size={ButtonSize.S} onClick={handleBack}>
            <ButtonText>
              <ArrowLeftIcon size={24} color="#D22D19"/>
              Back
            </ButtonText>
          </Button> : <div></div>}
          { activeTab !== "secondStage" ? 
          <Button primary={true} size={ButtonSize.S} onClick={handleNext}>
          <ButtonText>
            Next <ArrowRightIcon size={24} color='#FFFFFF' />
          </ButtonText>
        </Button> : 
        <Button primary={true} size={ButtonSize.S} >
          <ButtonText>
            Create <CupIcon size={24} color='#FFFFFF' />
          </ButtonText>
        </Button> }
        </ButtonsContainer>
      </MainContentContainer>
    </CreateContainer>
  );
};

export default CreatePage;
