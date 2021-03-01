import styled from "styled-components";

import { colors } from "../../../constants";

export const HeaderContainer = styled.header`
  position: fixed;
  z-index: 50;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  background: ${colors.primary};
  width: 100vw;
  height: 4rem;

  padding: 0 10%;
`;
