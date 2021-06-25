import styled from "styled-components";

import { colors, fonts } from "../../../../constants";

export const Container = styled.div`
  position: relative;
  width: max-content;
  height: max-content;
  margin: 1rem 1.5rem;
  opacity: 0;
  transition: 0.2s;
`;

export const StyledSubSection = styled.div`
  position: relative;
  z-index: 20;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 7rem;
  height: 7rem;
  margin: 0;
  border-radius: 1rem;
  background-color: ${colors.quad};

  @media (min-width: 1300px) {
    width: 10rem;
    height: 10rem;
  }

  &:hover {
    box-shadow: 0 0.5px 0.5px rgba(0, 0, 0, 0.12), 0 1px 1px rgba(0, 0, 0, 0.12),
      0 2px 2px rgba(0, 0, 0, 0.12), 0 4px 4px rgba(0, 0, 0, 0.12),
      0 8px 8px rgba(0, 0, 0, 0.12);
  }

  &:active {
    box-shadow: 0 0.5px 0.5px rgba(0, 0, 0, 0.12),
      0 0.5px 0.5px rgba(0, 0, 0, 0.12), 0 1px 1px rgba(0, 0, 0, 0.12),
      0 2px 2px rgba(0, 0, 0, 0.12), 0 4px 4px rgba(0, 0, 0, 0.12);
    transition: 0.1s;
  }

  &:hover > h5 {
    transform: translateY(0);
    opacity: 1;
  }

  &:hover > div {
    transform: translateY(0);
    opacity: 0;
  }
`;

export const SubSectionTitle = styled.h5`
  position: relative;
  z-index: 20;
  width: 100%;
  height: 1rem;
  margin: auto;
  color: ${colors.primary};
  font-size: 0.9rem;
  font-family: ${fonts.Roboto};
  line-height: 1rem;
  text-align: center;
  transform: translateY(-7px);
  opacity: 0;
  transition: 0.3s;

  @media (min-width: 1300px) {
    font-size: 1.1rem;
  }
`;

export const SubSectionImageContainer = styled.div`
  position: absolute;
  top: 0;
  z-index: 10;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  transform: translateY(10px);
  transition: 0.3s;
`;

export const SubSectionImageContent = styled.div`
  width: max-content;
  height: max-content;
`;
