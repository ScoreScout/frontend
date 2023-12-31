import React, { useState } from "react";
import Select from "react-select";

import { StyledRatingSystemSelectorContainer, customStyles } from "./style";

const SelectRatingSystem = (): React.ReactElement => {
  const options = [{ value: "ttw", label: "TTW" }];

  const [selectedOption, setSelectedOption] = useState(options[0]);

  const handleChange = (selectedOption: any): void => {
    setSelectedOption(selectedOption);
  };

  return (
    <StyledRatingSystemSelectorContainer data-testid='rating-system-selector'>
      <Select
        defaultValue={selectedOption}
        onChange={handleChange}
        options={options}
        placeholder={`Select rating system `}
        styles={customStyles}
      />
    </StyledRatingSystemSelectorContainer>
  );
};

export default SelectRatingSystem;
