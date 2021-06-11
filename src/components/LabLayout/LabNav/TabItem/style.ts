import styled from "styled-components";

import { colors, fonts } from "../../../../constants";

export const StyledListItem = styled.li`
  position: relative;
  overflow: visible;
  width: max-content;
  height: 100%;
  margin: 0 2rem;
  color: ${colors.secondary};
  outline: none;
  font-family: ${fonts.Ubuntu};
  cursor: pointer;

  &:hover .content-container {
    max-height: 100vh;
    transition-delay: 0.1s;
    transition-duration: 0.4s;
  }

  & .hoverable-content,
  & .hoverable-content::before {
    transition-delay: 0.5s;
  }

  &:hover .hoverable-content,
  &:hover .hoverable-content::before {
    height: 10px;
    transition-delay: 0s;
  }

  &:hover .sub-section {
    opacity: 1;
  }
`;

export const StyledListItemTitle = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  padding: 0 1rem;
`;

export const LeftInnerCorner = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: -3rem;
    width: 3rem;
    height: 20px;
    border-radius: 5px;
    background-color: ${colors.primary};
  }

  &::before {
    content: "";
    position: absolute;
    top: calc(100% - 10px);
    left: -2rem;
    width: 2rem;
    height: 0;
    background-color: ${colors.quad};
    transition: 0.1s;
  }
`;

export const RightInnerCorner = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;

  &::after {
    content: "";
    position: absolute;
    right: -3rem;
    bottom: 0;
    width: 3rem;
    height: 20px;
    border-radius: 5px;
    background-color: ${colors.primary};
  }

  &::before {
    content: "";
    position: absolute;
    top: calc(100% - 10px);
    right: -2rem;
    width: 2rem;
    height: 0;
    background-color: ${colors.quad};
    transition: 0.1s;
  }
`;

export const BackgroundBetween = styled.div`
  position: absolute;
  top: calc(100% - 10px);
  left: 0;
  width: 100%;
  height: 0;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  background-color: ${colors.quad};
  transition: 0.1s;
`;

export const BottomBorder = styled.div`
  position: absolute;
  bottom: 6px;
  left: 0;
  width: 90%;
  height: 2px;
  margin: 0 5%;
  background-color: ${colors.quad};
`;

export const StyledListItemContentContainer = styled.div<{ toLeft?: boolean }>`
  position: absolute;
  top: 100%;
  left: ${({ toLeft }) => (toLeft ? "-22rem" : "-2rem")};
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  width: 30rem;
  height: max-content;
  max-height: 0;
  border-radius: 10px;
  background-color: ${colors.quad};
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.12);
  transition-delay: 0.1s;
  transition-duration: 0.4s;

  @media (min-width: 1300px) {
    left: ${({ toLeft }) => (toLeft ? "-30rem" : "-2rem")};
    width: 40rem;
  }
`;

export const StyledListItemContent = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  width: 30rem;
  height: max-content;
  margin: 2rem 0;

  @media (min-width: 1300px) {
    width: 40rem;
  }
`;
