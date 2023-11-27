import React, { useState } from "react";
import Select from "react-select";

import { FaAngleDown } from "react-icons/fa6";

import { StyledRatingSystemSelectorContainer, customStyles } from "./style";

const SelectRatingSystem = (): React.JSX.Element => {
  const options = [
    { value: "rs1", label: "Rating System 1" },
    { value: "rs2", label: "Rating System 2" },
    { value: "rs3", label: "Rating System 3" },
  ];

 

  const [selectedOption, setSelectedOption] = useState(null);

  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption);
  };

  return (
    <StyledRatingSystemSelectorContainer>
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
