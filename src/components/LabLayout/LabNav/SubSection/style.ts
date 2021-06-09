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
  width: 7rem;
  height: 7rem;

  background-color: ${colors.quad};

  display: flex;
  flex-direction: column;
  justify-content: center;

  margin: 0;

  border-radius: 1rem;

  &:hover {
    box-shadow: 0 0.5px 0.5px rgba(0, 0, 0, 0.12), 0 1px 1px rgba(0, 0, 0, 0.12),
      0 2px 2px rgba(0, 0, 0, 0.12), 0 4px 4px rgba(0, 0, 0, 0.12),
      0 8px 8px rgba(0, 0, 0, 0.12);
  }

  &:active {
    transition: 0.1s;
    box-shadow: 0 0.5px 0.5px rgba(0, 0, 0, 0.12),
      0 0.5px 0.5px rgba(0, 0, 0, 0.12), 0 1px 1px rgba(0, 0, 0, 0.12),
      0 2px 2px rgba(0, 0, 0, 0.12), 0 4px 4px rgba(0, 0, 0, 0.12);
  }

  &:hover > h5 {
    opacity: 1;
    transform: translateY(0px);
  }

  &:hover > div {
    opacity: 0;
    transform: translateY(0px);
  }

  @media (min-width: 1300px) {
    width: 10rem;
    height: 10rem;
  }
`;

export const SubSectionTitle = styled.h5`
  position: relative;
  z-index: 20;
  height: 1rem;
  line-height: 1rem;

  margin: auto;
  width: 100%;
  text-align: center;

  opacity: 0;

  font-family: ${fonts.Roboto};
  font-size: 0.9rem;
  color: ${colors.primary};

  transition: 0.3s;
  transform: translateY(-7px);

  @media (min-width: 1300px) {
    font-size: 1.1rem;
  }
`;

export const SubSectionImageContainer = styled.div`
  position: absolute;
  z-index: 10;
  top: 0;
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  transform: translateY(10px);

  transition: 0.3s;
`;

export const SubSectionImageContent = styled.div`
  width: max-content;
  height: max-content;
`;
