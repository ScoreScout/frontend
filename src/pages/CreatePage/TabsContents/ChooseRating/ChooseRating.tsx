import React, { useState } from "react";

import SelectRatingSystem from "./SelectRatingSystem";
import { ChooseRatingWrapper, StyledToggle, ChooseRatingContainer } from "./style";

import { FaToggleOn, FaToggleOff } from "react-icons/fa6";

const ChooseRating = (): React.JSX.Element => {
  const [toggleOn, setToggleOn] = useState(false);

  const handleToggle = () => {
    setToggleOn(!toggleOn);
  };

  return (
    <ChooseRatingWrapper>
      <ChooseRatingContainer>
        <StyledToggle onClick={handleToggle}>
          {toggleOn ? <FaToggleOn /> : <FaToggleOff />}
        </StyledToggle>
        Use rating system
      </ChooseRatingContainer>
      {toggleOn && <SelectRatingSystem />}
    </ChooseRatingWrapper>
  );
};

export default ChooseRating;
