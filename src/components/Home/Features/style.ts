import { Paper, Switch } from "@material-ui/core";
import styled from "styled-components";
import { colors, colorsV2, fonts } from "../../../constants";

export const FeaturesContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  height: max-content;

  padding: 5rem 0;

  background-color: ${colors.cultured};
`;

export const FeaturesHeader = styled.div`
  display: flex;
  flex-direction: column;
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

export const FeaturesSwitch = styled(Switch)``;

export const FeaturesContent = styled.div<{ isRowReverse: boolean }>`
  display: flex;
  flex-direction: ${({ isRowReverse }) =>
    isRowReverse ? "row-reverse" : "row"};
  justify-content: space-between;
  align-items: center;

  width: 70rem;
  margin: 0 auto;
`;

export const FeaturesSubContent = styled.div`
  width: 24rem;
  height: 30rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const FeaturePaper = styled(Paper)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: 1rem;
`;

export const Feature = styled.div`
  height: 100%;
  flex: 1;
  margin-left: 1.5rem;

  & h3 {
    font-family: ${fonts.Ubuntu};
    font-size: 1.2rem;
  }

  & p {
    font-family: ${fonts.Roboto};
    color: ${colorsV2.secondary};
    font-size: 0.8rem;
    text-align: left;

    width: 16rem;
  }
`;

export const FeatureScreen = styled.div<{ background: string }>`
  background-image: ${({ background }) => background};
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center center;
  width: 40rem;
  height: 30rem;
`;
