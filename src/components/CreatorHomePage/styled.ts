import styled from "styled-components";

import { colors, fonts } from "../../constants";
import { FlexRow } from "../../styles/global";

export const Container = styled.div`
  position: relative;
  min-height: 100vh;
  height: max-content;
  width: 100vw;
  background-color: ${colors.primary};
  padding: 6rem 0 2rem;

  overflow-x: hidden;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Content = styled.div`
  position: relative;
  height: max-content;
  width: 90%;

  margin: auto 0;
  top: -2rem;

  @media (min-width: 25rem) {
    width: 22rem;
  }

  @media (min-width: 30rem) {
    width: 27rem;
  }

  @media (min-width: 35rem) {
    width: 30rem;
  }
`;

export const Box = styled(FlexRow)`
  position: relative;
  height: 8rem;

  align-items: center;
  justify-content: center;

  @media (min-width: 30rem) {
    height: 10rem;
  }
`;

export const HerotagBox = styled(Box)`
  & > div {
    width: 100%;
    height: 100%;

    align-items: center;
    justify-content: center;

    transition: 0.4s;
  }

  &:hover > div {
    filter: blur(5px);
  }

  & > img {
    opacity: 0;

    transition: 0.3s;

    cursor: none;

    transform: translateY(20px);
  }

  &:hover > img {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const MaiarImage = styled.img`
  width: 6rem;
  border-radius: 8px;

  cursor: pointer;

  @media (min-width: 30rem) {
    width: 8rem;
    border-radius: 10px;
  }
`;

export const StepTitle = styled.h4`
  font-family: ${fonts.Roboto};
  color: ${colors.secondary};
  font-size: 1rem;
  line-height: 2rem;
  margin: 0;

  text-align: center;

  @media (min-width: 30rem) {
    font-size: 1.2rem;
    line-height: 2.5rem;
  }
`;

export const StepNumber = styled.div`
  position: absolute;
  left: 0;
  font-family: ${fonts.Ubuntu};
  color: ${colors.secondary};
  font-size: 1.7rem;

  @media (min-width: 30rem) {
    font-size: 2.3rem;
  }
`;

export const Herotag = styled.div`
  font-family: ${fonts.Code};
  font-weight: 500;
  color: ${colors.primary};
  font-size: 1.5rem;
  line-height: 2rem;
  padding: 0.4rem 0.8rem;

  border-radius: 0.5rem;

  background-color: ${colors.secondary};

  @media (min-width: 30rem) {
    padding: 0.5rem 1rem;
    font-size: 2rem;
    line-height: 2.5rem;
  }
`;

export const Arobase = styled.span`
  color: #e3179d;
  font-family: ${fonts.Ubuntu};
`;

export const QrCode = styled.img`
  position: absolute;
  z-index: 50;
  width: 10rem;
  margin: 0 auto;
`;
