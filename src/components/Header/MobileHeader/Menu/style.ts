import styled from "styled-components";

import { colors } from "../../../../constants";

export const MenuBackground = styled.div<{ isMenuOpenned: boolean }>`
  position: fixed;
  z-index: 40;
  top: 0;
  right: 0;
  background: ${colors.black}bb;
  width: ${({ isMenuOpenned }) => (isMenuOpenned ? "100vw" : "0")};
  height: 100vh;

  transition: 0.1s;
`;

export const MenuContainer = styled.div<{ isMenuOpenned: boolean }>`
  position: fixed;
  top: 0;
  right: 0;

  background: ${colors.primary};

  width: ${({ isMenuOpenned }) => (isMenuOpenned ? "18rem" : "0")};
  height: 25rem;

  padding: ${({ isMenuOpenned }) => (isMenuOpenned ? "4rem 3rem 0" : "0")};

  border-bottom-left-radius: 13px;
  border-bottom-right-radius: 13px;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  z-index: 40;
  transition: 0.5s;
  overflow: hidden;
`;
