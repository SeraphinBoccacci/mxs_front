import styled from "styled-components";

import { colors } from "../../../constants";

export const StyledNav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10000;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  overflow-y: visible;
  width: 100vw;
  height: 4rem;
  background-color: ${colors.primary};
`;

export const StyledList = styled.ul`
  display: flex;
  flex-direction: row;
  overflow: visible;
  width: max-content;
  height: 100%;
  margin: 0;
  list-style: none;
`;

export const RightNode = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 10rem;
  height: 2rem;
  margin: 0 2rem;
`;
