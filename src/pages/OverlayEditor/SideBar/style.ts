import styled from "styled-components";

import { colors, fonts } from "../../../constants";

export const Container = styled.div`
  position: relative;
  z-index: 200;
  width: 20rem;

  background: ${colors.secondary};
`;

export const BeginContainer = styled.div`
  display: flex;
  flex-direction: column;

  & > button {
    width: 10rem;

    margin: 10rem auto 0;
  }
`;

export const WelcomeTitle = styled.h1`
  text-transform: uppercase;
  text-align: center;

  font-family: ${fonts.Roboto};

  & > span:first-child {
    font-size: 1.4rem;
  }

  & > span:last-child {
    font-size: 1rem;
    font-weight: 200;
  }
`;

export const WidgetsList = styled.ul`
  margin: 3rem 0;
  padding: 0;

  list-style: none;
`;

interface WidgetsItemProps {
  isFocused: boolean;
}

export const WidgetsItem = styled.li<WidgetsItemProps>`
  height: 2.4rem;
  line-height: 2rem;

  text-align: center;
  font-family: ${fonts.Ubuntu};

  margin: 0 2rem 1rem;

  border: 3px solid ${colors.primary};

  transition: 0.3s;

  background: ${({ isFocused }) =>
    isFocused ? colors.primary : "transparent"};
  color: ${({ isFocused }) => (isFocused ? colors.secondary : colors.primary)};

  cursor: pointer;

  &:hover {
    background-color: ${({ isFocused }) => !isFocused && `${colors.primary}22`};
  }
`;

export const AddWidgetButton = styled.button`
  position: absolute;
  bottom: 1rem;
  left: 1rem;
  width: 4rem;
  height: 4rem;

  border-radius: 50%;

  background: ${colors.quad};
  border: none;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.12);

  font-size: 3rem;
  line-height: 4rem;

  transition: 0.2s;
  cursor: pointer;
  outline: none;

  &:hover {
    transform: perspective(500px) translateZ(-30px);
  }

  &:active {
    transform: perspective(500px) translateZ(-100px);
  }
`;
