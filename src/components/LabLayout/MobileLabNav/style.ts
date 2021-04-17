import styled from "styled-components";

import { colors, fonts } from "../../../constants";

export const StyledNav = styled.nav<{ isOpen: boolean }>`
  position: fixed;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  z-index: 10000;
  top: 0;
  left: 0;

  height: ${({ isOpen }) => (isOpen ? "100vh" : "0")};
  width: 100vw;

  padding: 2rem;

  transition: 0.3s;

  background-color: ${colors.primary};
  overflow: hidden;
`;

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  background-color: ${colors.gray};

  border-radius: 7px;
`;

export const Content = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  overflow-x: hidden;
  overflow-y: scroll;
`;

export const MenuButton = styled.div<{ isMenuOpen: boolean }>`
  position: absolute;
  top: ${({ isMenuOpen }) => (isMenuOpen ? "3rem" : "1rem")};
  left: ${({ isMenuOpen }) => (isMenuOpen ? "3rem" : "1rem")};
  z-index: 1000;
  width: 40px;
  height: 40px;

  transition: 0.3s;

  padding: 0;
  background-color: transparent;
  border: none;
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
  width: 100%;

  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  list-style: none;
  overflow: visible;

  margin-top: 6rem;

  padding-left: 2.5rem;

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

  font-family: ${fonts.Ubuntu};
  color: ${colors.secondary};
  font-size: 1.3rem;

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
    position: absolute;
    content: "";
    bottom: 0;

    width: 100%;
    height: 0.1rem;
    border-radius: 2rem;

    background: ${colors.quad};
  }
`;

export const BottomNode = styled.div`
  width: 10rem;
  height: 2rem;

  margin: 6rem auto 3rem;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
