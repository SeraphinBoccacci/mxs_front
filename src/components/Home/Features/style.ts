import { Paper } from "@material-ui/core";
import styled from "styled-components";

import { colors, fonts } from "../../../constants";
import { FlexColumn } from "../../../styles/global";

export const FeaturesContainer = styled.section`
  width: 100vw;
  overflow-x: hidden;
  min-height: 100vh;
  height: max-content;

  padding: 3rem 0;

  background-color: ${colors.secondary};

  @media (min-width: 450px) {
    padding: 5rem 0;
  }
`;

export const FeaturesHeader = styled(FlexColumn)`
  justify-content: center;
  align-items: center;

  margin-bottom: 4rem;
`;

export const FeaturesTitle = styled.h2`
  font-size: 2rem;
  font-family: ${fonts.Roboto};
`;

export const FeaturesSubTitle = styled.h4`
  font-size: 0.9rem;
  font-family: ${fonts.Ubuntu};
  margin-top: -1.1rem;
`;

export const FeaturesContent = styled.div<{ isRowReverse: boolean }>`
  display: flex;
  overflow: hidden;

  justify-content: center;
  align-items: center;

  flex-direction: column;

  margin: 0 auto;

  @media (min-width: 800px) {
    width: max-content;
    flex-direction: ${({ isRowReverse }) =>
      isRowReverse ? "row-reverse" : "row"};
  }
`;

export const ContentContainer = styled.div`
  position: relative;
  width: max-content;

  display: flex;

  margin: 3rem auto;
`;

export const FeaturesSubContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: max-content;

  justify-content: space-between;

  @media (min-width: 500px) {
    width: 20rem;
    margin: 0 2rem;
  }

  @media (min-width: 1100px) {
    width: 30rem;
  }
`;

export const FeaturePaper = styled(Paper)`
  position: relative;
  left: 0;
  height: max-content;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: 0.7rem;
  margin: 0.7rem;

  transition: 0.4s !important;

  cursor: help;

  &:hover {
    border-radius: 20px;
    left: 1rem;
  }

  @media (min-width: 1100px) {
    padding: 1rem;
    margin: 1rem;
  }
`;

export const Feature = styled.div`
  height: 100%;
  width: 100%;
  flex: 1;
  margin-left: 1rem;

  & h3 {
    font-family: ${fonts.Ubuntu};
    font-size: 1rem;
  }

  @media (min-width: 1100px) {
    margin-left: 1.5rem;

    & h3 {
      font-size: 1.2rem;
    }
  }
`;

export const FeatureParagraph = styled.p`
  font-family: ${fonts.Roboto};
  color: #c5c5c5;
  font-size: 0.65rem;
  line-height: 1.4rem;
  text-align: left;

  width: 100%;

  @media (min-width: 1100px) {
    font-size: 0.8rem;
    text-align: left;
  }
`;

export const FeatureScreen = styled.div<{ background: string }>`
  background-image: ${({ background }) => background};
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center center;

  width: 80vw;
  height: 80vw;

  margin: 2rem 0;

  @media (min-width: 500px) {
    width: 18rem;
    height: 18rem;
    margin: 2rem 2rem;
  }

  @media (min-width: 800px) {
    width: 20rem;
    height: 20rem;
    margin: 2rem 2rem;
  }

  @media (min-width: 1100px) {
    width: 30rem;
    height: 30rem;
  }
`;
