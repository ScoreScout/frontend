import styled from "styled-components";
import {
  globalRegularFontStyles,
  globalBoldFontStyles,
  globalMediumFontStyles,
} from "../../theme/FontStyles";

interface SliderTabProps {
  $active: boolean;
}

const CreateContainer = styled.div`
  display: flex;
`;
const SidebarContainer = styled.div`
  all: unset;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem 0rem 2rem 2rem;
  position: relative;
`;

const CreateTitle = styled.div`
  all: unset;
  ${globalMediumFontStyles}
  color: ${(props) => props.theme.color.mainColor};
  font-size: 1.8rem;
  margin-right: 0.75rem;
  margin-top: 10.5rem;
`;

const SidebarSlider = styled.div`
  margin-top: 4.3rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const SliderTab = styled.button<SliderTabProps>`
  background: none;
  border: none;
  cursor: pointer;
  align-self: flex-end;
  justify-content: center;
  text-align: right;
  padding: 0.5rem 1.75rem 0.5rem 0;

  border-right: 0.5rem solid
    ${(props) => (props.$active ? props.theme.color.mainColor : props.theme.color.secondaryBgColor)};

  ${globalRegularFontStyles};

  color: ${(props) =>
    props.$active ? props.theme.color.mainColor : props.theme.color.notActiveColor};
`;

const MainContentContainer = styled.div``;

const ProfileLogo = styled.div`
  position: absolute;
  top: 1.25rem;
  right: 1.25rem;
  height: 2.5rem;
  width: 2.5rem;
  font-size: 2.5rem;
  color: ${(props) => props.theme.color.mainColor};
  cursor: pointer;

  a {
    text-decoration: none;
    color: ${(props) => props.theme.color.mainColor};
  }
`;

const ButtonsContainer = styled.div`
  all: unset;
  position: absolute;
  bottom: 1.25rem;
  right: 1.25rem;
  display: flex;
  flex-direction: row;
  gap: 1.25rem;
`;

const ButtonText = styled.div`
  ${globalBoldFontStyles};
  font-size: 1em;
  white-space: nowrap;
  display: flex;
  align-items: center;
  gap: 0.3125rem;
`;

export {
  CreateContainer,
  CreateTitle,
  SidebarContainer,
  MainContentContainer,
  SidebarSlider,
  SliderTab,
  ProfileLogo,
  ButtonsContainer,
  ButtonText,
};
