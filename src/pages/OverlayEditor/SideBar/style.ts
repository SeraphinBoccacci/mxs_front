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
  font-family: ${fonts.Roboto};
  text-align: center;
  text-transform: uppercase;

  & > span:first-child {
    font-size: 1.4rem;
  }

  & > span:last-child {
    font-weight: 200;
    font-size: 1rem;
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
  margin: 0 2rem 1rem;
  border: 3px solid ${colors.primary};
  color: ${({ isFocused }) => (isFocused ? colors.secondary : colors.primary)};
  font-family: ${fonts.Ubuntu};
  line-height: 2rem;
  text-align: center;
  cursor: pointer;
  transition: 0.3s;
  background: ${({ isFocused }) =>
    isFocused ? colors.primary : "transparent"};

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
  padding: 0;
  border: none;
  border-radius: 50%;
  color: ${colors.primary};
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.12);
  outline: none;
  font-size: 3rem;
  cursor: pointer;
  background: ${colors.quad};
  transition: 0.2s;

  &:hover {
    transform: perspective(500px) translateZ(-30px);
  }

  &:active {
    transform: perspective(500px) translateZ(-100px);
  }
`;
