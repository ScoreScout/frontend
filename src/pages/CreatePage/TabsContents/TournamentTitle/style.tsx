import styled from "styled-components";
import { globalSemiBoldFontStyles, globalRegularFontStyles } from "../../../../theme/FontStyles";

const TournamentTitleContainer = styled.div`
  padding: 12.5rem 6.25rem 0 6.25rem;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`;

const TournamentTitleTitle = styled.div`
  ${globalSemiBoldFontStyles}
  color: ${(props) => props.theme.color.mainColor};
`;

const TournamentTitleInput = styled.input`
  width: 19rem;
  height: 2.5rem;
  border: 1.5px solid #aca4a2;
  white-space: nowrap;
  padding: 0;
  padding-left: 1.125rem;
  ${globalRegularFontStyles}

  box-shadow: 0px 0px 2px 1px rgba(0, 0, 0, 0.25);
  border-radius: 1rem;
  padding-left: 1rem;

  &:hover {
    cursor: pointer;
    box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.25);
  }
`;

export { TournamentTitleContainer, TournamentTitleTitle, TournamentTitleInput };
