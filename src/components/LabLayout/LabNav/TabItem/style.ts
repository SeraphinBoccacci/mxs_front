import styled from "styled-components";

import { colors, fonts } from "../../../../constants";

export const StyledListItem = styled.li`
  position: relative;
  width: max-content;
  margin: 0 2rem;
  height: 100%;

  font-family: ${fonts.Ubuntu};
  color: ${colors.secondary};
  overflow: visible;

  cursor: pointer;
  outline: none;

  &:hover .content-container {
    max-height: 100vh;
    transition-duration: 0.4s;
    transition-delay: 0.1s;
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
    position: absolute;
    content: "";
    bottom: 0;
    left: -3rem;
    width: 3rem;
    height: 20px;
    background-color: ${colors.primary};
    border-radius: 5px;
  }

  &::before {
    position: absolute;
    content: "";
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
    position: absolute;
    content: "";
    bottom: 0;
    right: -3rem;
    width: 3rem;
    height: 20px;
    background-color: ${colors.primary};
    border-radius: 5px;
  }

  &::before {
    position: absolute;
    content: "";
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
  left: 0;
  top: calc(100% - 10px);
  height: 0;
  width: 100%;
  background-color: ${colors.quad};

  border-top-left-radius: 5px;
  border-top-right-radius: 5px;

  transition: 0.1s;
`;

export const BottomBorder = styled.div`
  position: absolute;
  width: 90%;
  margin: 0 5%;
  height: 2px;
  bottom: 6px;
  left: 0;

  background-color: ${colors.quad};
`;

export const StyledListItemContentContainer = styled.div<{ toLeft?: boolean }>`
  position: absolute;
  top: 100%;
  left: ${({ toLeft }) => (toLeft ? "-22rem" : "-2rem")};
  display: flex;
  flex-direction: column;
  justify-content: center;

  height: max-content;
  max-height: 0rem;
  width: 30rem;
  background-color: ${colors.quad};

  transition-duration: 0.4s;
  transition-delay: 0.1s;

  border-radius: 10px;
  overflow: hidden;

  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.12);

  @media (min-width: 1300px) {
    width: 40rem;
    left: ${({ toLeft }) => (toLeft ? "-30rem" : "-2rem")};
  }
`;

export const StyledListItemContent = styled.div`
  width: 30rem;
  height: max-content;
  margin: 2rem 0;

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;

  @media (min-width: 1300px) {
    width: 40rem;
  }
`;
