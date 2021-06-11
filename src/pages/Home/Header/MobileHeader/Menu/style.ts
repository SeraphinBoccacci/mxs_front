import styled from "styled-components";

import { colors } from "../../../../../constants";

export const MenuBackground = styled.div<{ isMenuOpenned: boolean }>`
  position: fixed;
  top: 0;
  right: 0;
  z-index: 40;
  width: ${({ isMenuOpenned }) => (isMenuOpenned ? "100vw" : "0")};
  height: 100vh;
  background: ${colors.black}bb;
  transition: 0.1s;
`;

export const MenuContainer = styled.div<{ isMenuOpenned: boolean }>`
  position: fixed;
  top: 0;
  right: 0;
  z-index: 40;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  overflow: hidden;
  width: ${({ isMenuOpenned }) => (isMenuOpenned ? "18rem" : "0")};
  height: 25rem;
  padding: ${({ isMenuOpenned }) =>
    isMenuOpenned ? "4rem 3rem 0" : "4rem 0 0"};
  border-bottom-right-radius: 13px;
  border-bottom-left-radius: 13px;
  background: ${colors.primary};
  transition: 0.2s;

  & button {
    padding: 0.3rem 3rem;
  }
`;
