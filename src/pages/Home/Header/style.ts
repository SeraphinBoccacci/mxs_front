import styled from "styled-components";

import { colors } from "../../../constants";

export const HeaderContainer = styled.header`
  position: fixed;
  z-index: 200;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  background: ${colors.primary};
  width: 100%;
  height: 5rem;

  padding: 0 1rem;

  @media (min-width: 700px) {
    padding: 0 2rem;
  }

  @media (min-width: 1000px) {
    padding: 0 5rem;
  }
`;
