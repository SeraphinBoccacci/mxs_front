import { Paper } from "@material-ui/core";
import styled from "styled-components";

import { colors, fonts } from "../../../constants";
import { FlexColumn } from "../../../styles/global";

export const FeaturesContainer = styled.section`
  overflow-x: hidden;
  width: 100vw;
  height: max-content;
  min-height: 100vh;
  padding: 3rem 0;
  background-color: ${colors.secondary};

  @media (min-width: 450px) {
    padding: 5rem 0;
  }
`;

export const FeaturesHeader = styled(FlexColumn)`
  align-items: center;
  justify-content: center;
  margin-bottom: 4rem;
`;

export const FeaturesTitle = styled.h2`
  font-size: 2rem;
  font-family: ${fonts.Roboto};
`;

export const FeaturesSubTitle = styled.h4`
  margin-top: -1.1rem;
  font-size: 0.9rem;
  font-family: ${fonts.Ubuntu};
`;

export const FeaturesContent = styled.div<{ isRowReverse: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  margin: 0 auto;

  @media (min-width: 800px) {
    flex-direction: ${({ isRowReverse }) =>
      isRowReverse ? "row-reverse" : "row"};
    width: max-content;
  }
`;

export const ContentContainer = styled.div`
  position: relative;
  display: flex;
  width: max-content;
  margin: 3rem auto;
`;

export const FeaturesSubContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100vw;
  height: max-content;

  @media (min-width: 700px) {
    width: 25rem;
    margin: 0 2rem;
  }

  @media (min-width: 1100px) {
    width: 30rem;
  }
`;

export const FeaturePaper = styled(Paper)`
  position: relative;
  left: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 40vw !important;
  margin: 0.7rem;
  padding: 0.7rem;
  transition: 0.4s !important;

  @media (min-width: 700px) {
    height: 9rem !important;
    margin: 0.85rem;
    padding: 0.85rem;
  }

  @media (min-width: 1100px) {
    height: 12rem !important;
    margin: 1rem;
    padding: 1rem;
  }

  &:hover {
    border-radius: 20px;
  }
`;

export const Feature = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  margin-left: 1rem;

  @media (min-width: 1100px) {
    margin-left: 1.5rem;
  }
`;

export const FeatureTitle = styled.h3`
  margin: 0.3rem 0;
  font-size: 1rem;
  font-family: ${fonts.Ubuntu};

  @media (min-width: 700px) {
    font-size: 1.1rem;
  }

  @media (min-width: 1100px) {
    font-size: 1.2rem;
  }
`;

export const FeatureParagraph = styled.p`
  width: 100%;
  color: #c5c5c5;
  font-size: 0.8rem;
  font-family: ${fonts.Roboto};
  line-height: 1.2rem;
  text-align: left;

  @media (min-width: 700px) {
    font-size: 0.85rem;
    line-height: 1.3rem;
  }

  @media (min-width: 1100px) {
    font-size: 0.9rem;
    line-height: 1.4rem;
    text-align: left;
  }
`;

export const FeatureScreen = styled.div<{ background: string }>`
  width: 80vw;
  height: 80vw;
  margin: 2rem 0;
  background-image: ${({ background }) => background};
  background-position: center center;
  background-size: contain;
  background-repeat: no-repeat;

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
