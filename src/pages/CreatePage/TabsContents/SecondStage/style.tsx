import styled from "styled-components";

import { globalSemiBoldFontStyles } from "../../../../theme/FontStyles";

const SecondStageText = styled.div`
  margin-top: 12.5rem;
  color: ${(props) => props.theme.color.fontColor};
  ${globalSemiBoldFontStyles};
  padding-left: 6.25rem;
`;

export { SecondStageText };
