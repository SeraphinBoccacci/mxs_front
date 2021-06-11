import styled from "styled-components";

import { colors, fonts } from "../../../constants";

export const StyledNav = styled.nav<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
  width: 100vw;
  height: ${({ isOpen }) => (isOpen ? "100vh" : "0")};
  padding: 2rem;
  background-color: ${colors.primary};
  transition: 0.3s;
`;

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 7px;
  background-color: ${colors.gray};
`;

export const Content = styled.div`
  position: relative;
  overflow-x: hidden;
  overflow-y: scroll;
  width: 100%;
  height: 100%;
`;

export const MenuButton = styled.div<{ isMenuOpen: boolean }>`
  position: absolute;
  top: ${({ isMenuOpen }) => (isMenuOpen ? "3rem" : "1rem")};
  left: ${({ isMenuOpen }) => (isMenuOpen ? "3rem" : "1rem")};
  z-index: 1000;
  width: 40px;
  height: 40px;
  padding: 0;
  border: none;
  background-color: transparent;
  transition: 0.3s;
`;

export const StreamParticlesLogo = styled.div`
  width: 12rem;
  height: 4rem;
  margin: 0 auto 2rem;
  background-image: url("/logo.png");
  background-position: center center;
  background-size: contain;
  background-repeat: no-repeat;

  @media (min-width: 410px) {
    width: 15rem;
    height: 5rem;
  }

  @media (min-width: 530px) {
    width: 21rem;
    height: 7rem;
  }
`;

export const StyledList = styled.ul`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-evenly;
  overflow: visible;
  width: 100%;
  margin-top: 6rem;
  padding-left: 2.5rem;
  list-style: none;

  @media (min-width: 500px) {
    padding-left: 5rem;
  }

  @media (min-width: 600px) {
    padding-left: 10rem;
  }
`;

export const StyledListItem = styled.li`
  position: relative;
  width: max-content;
  height: 2rem;
  margin: 1rem;
  color: ${colors.secondary};
  font-size: 1.3rem;
  font-family: ${fonts.Ubuntu};
  transition: 0.3s;

  &.hoverable:hover {
    height: 20rem;
    color: ${colors.soft_black};
  }

  &.hoverable:hover .content {
    height: 20rem;
  }
`;

export const StyledListItemTitle = styled.div`
  position: relative;
  z-index: 1000;
  cursor: pointer;

  &.highlighted::before {
    content: "";
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 0.1rem;
    border-radius: 2rem;
    background: ${colors.quad};
  }
`;

export const BottomNode = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 10rem;
  height: 2rem;
  margin: 6rem auto 3rem;
`;
