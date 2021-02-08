import styled from "styled-components";

import { colors, fonts, weights } from "../../../constants";

export const AnchorsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  width: 20rem;
  margin-left: -10%;
`;

export const Anchor = styled.label`
  color: ${colors.cultured};
  font-family: ${fonts.Ubuntu};
  font-weight: ${weights.Ubuntu.thin};
  font-size: 1rem;

  line-height: 2rem;

  width: max-content;
`;
