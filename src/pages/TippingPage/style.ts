import styled from "styled-components";

import { colors, fonts } from "../../constants";
import { FlexRow } from "../../styles/global";

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;
  width: 100vw;
  height: max-content;
  min-height: 100vh;
  padding: 6rem 0 2rem;
  background-color: ${colors.primary};
`;

export const Content = styled.div`
  position: relative;
  top: -2rem;
  width: 90%;
  height: max-content;
  margin: auto 0;

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
  align-items: center;
  justify-content: center;
  height: 8rem;

  @media (min-width: 30rem) {
    height: 10rem;
  }
`;

export const HerotagBox = styled(Box)`
  & > div {
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    transition: 0.4s;
  }

  &:hover .blurrable {
    filter: blur(5px);
  }

  & > img {
    cursor: none;
    transform: translateY(20px);
    opacity: 0;
    transition: 0.3s;
  }

  &:hover > img {
    transform: translateY(0);
    opacity: 1;
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
  margin: 0;
  color: ${colors.secondary};
  font-size: 1rem;
  font-family: ${fonts.Roboto};
  line-height: 2rem;
  text-align: center;
  transition: 0.4s;

  @media (min-width: 30rem) {
    font-size: 1.2rem;
    line-height: 2.5rem;
  }
`;

export const StepNumber = styled.div`
  position: absolute;
  left: 0;
  color: ${colors.secondary};
  font-size: 1.7rem;
  font-family: ${fonts.Ubuntu};

  @media (min-width: 30rem) {
    font-size: 2.3rem;
  }
`;

export const Herotag = styled.div`
  padding: 0.4rem 0.8rem;
  border-radius: 0.5rem;
  background-color: ${colors.secondary};
  color: ${colors.primary};
  font-weight: 500;
  font-size: 1.5rem;
  font-family: ${fonts.Code};
  line-height: 2rem;

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
