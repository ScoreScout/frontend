import React from "react";

import SelectRatingSystem from "./SelectRatingSystem";
import { ChooseRatingWrapper, StyledToggle, ChooseRatingContainer } from "./style";

import { FaToggleOn, FaToggleOff } from "react-icons/fa6";

const ChooseRating = ({
  toggleOn,
  handleToggle,
}: {
  toggleOn: boolean;
  handleToggle: () => void;
}): React.JSX.Element => {
  return (
    <ChooseRatingWrapper>
      <ChooseRatingContainer data-testid='use-rating-system-title'>
        <StyledToggle onClick={handleToggle} data-testid='rating-system-toggle'>
          {toggleOn ? <FaToggleOn /> : <FaToggleOff />}
        </StyledToggle>
        Use rating system
      </ChooseRatingContainer>
      {toggleOn && <SelectRatingSystem />}
    </ChooseRatingWrapper>
  );
};

export default ChooseRating;
