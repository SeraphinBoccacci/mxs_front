import styled from "styled-components";

import { colors } from "../../../constants";

export const StyledNav = styled.nav`
  position: fixed;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  z-index: 10000;
  top: 0;
  left: 0;
  height: 4rem;
  width: 100vw;

  background-color: ${colors.primary};
  overflow-y: visible;
  overflow-x: scroll;
`;

export const StyledList = styled.ul`
  width: max-content;
  margin: 0;
  height: 100%;
  display: flex;
  flex-direction: row;
  list-style: none;
  overflow: visible;
`;

export const RightNode = styled.div`
  width: 10rem;
  height: 2rem;

  display: flex;
  flex-direction: row;
  justify-content: space-between;

  margin: 0 2rem;
`;
