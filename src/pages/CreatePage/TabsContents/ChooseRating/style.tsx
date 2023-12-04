import styled from "styled-components";
import { globalRegularFontStyles } from "../../../../theme/FontStyles";

const ChooseRatingWrapper = styled.div`
  padding: 12.5rem 6.25rem 0 6.25rem;
  display: flex;
  flex-direction: column;
`;

const StyledToggle = styled.div`
  height: 2.5rem;
  width: 2.5rem;
  font-size: 2.5rem;
  color: ${(props) => props.theme.color.mainColor};
  cursor: pointer;
`;

const ChooseRatingContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
  ${globalRegularFontStyles}
`;

const StyledRatingSystemSelectorContainer = styled.div`
  margin-top: 3.125rem;
  ${globalRegularFontStyles}
`;

const customStyles = {
  control: (provided: any, state: any) => ({
    ...provided,
    border: "1px solid #ACA4A2",
    borderRadius: "1rem",
    width: "24rem",
    height: "3.125rem",
    paddingLeft: "1rem",
  }),
  option: (provided: any, state: any) => ({
    ...provided,
    backgroundColor:
      state.isSelected === true
        ? "#D22D19"
        : state.isFocused === true
          ? "#E8968C"
          : state.isHovered === true
            ? "#E8968C"
            : "white",
    color: state.isSelected === true || state.isFocused === true ? "white" : "black",
  }),
};

export {
  ChooseRatingWrapper,
  StyledToggle,
  ChooseRatingContainer,
  StyledRatingSystemSelectorContainer,
  customStyles,
};
