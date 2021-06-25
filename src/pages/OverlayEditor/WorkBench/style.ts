import styled from "styled-components";

import { colors } from "../../../constants";

export const Container = styled.div`
  position: relative;
  flex: 1;
`;

export const PlayableOverlayContainer = styled.div`
  position: absolute;
  top: calc(50% - 540px);
  left: calc(50% - 960px);
  overflow: hidden;
  width: 1920px;
  height: 1080px;
  border: none;
  border-radius: 4px;
  background-image: linear-gradient(
      to bottom,
      transparent 20%,
      ${colors.gray} 20%
    ),
    linear-gradient(to right, ${colors.secondary} 20%, ${colors.gray} 20%);
  background-size: 10px 10px, 10px 10px;
  box-shadow: 0 0.5px 0.5px rgba(0, 0, 0, 0.12),
    0 0.5px 0.5px rgba(0, 0, 0, 0.12), 0 1px 1px rgba(0, 0, 0, 0.12),
    0 2px 2px rgba(0, 0, 0, 0.12), 0 4px 4px rgba(0, 0, 0, 0.12);
  transform: perspective(500px) translateZ(-2000px);

  @media (min-width: 900px) {
    transform: perspective(500px) translateZ(-1500px);
  }

  @media (min-width: 1000px) {
    transform: perspective(500px) translateZ(-1000px);
  }

  @media (min-width: 1200px) {
    transform: perspective(500px) translateZ(-800px);
  }

  @media (min-width: 1300px) {
    transform: perspective(500px) translateZ(-500px);
  }

  @media (min-width: 1500px) {
    transform: perspective(500px) translateZ(-400px);
  }
`;

export const Iframe = styled.iframe`
  position: absolute;
  top: calc(50% - 540px);
  left: calc(50% - 960px);
  z-index: 100;
  width: 1920px;
  height: 1080px;
  border: none;
  border-radius: 4px;
  background-image: linear-gradient(
      to bottom,
      transparent 20%,
      ${colors.gray} 20%
    ),
    linear-gradient(to right, ${colors.secondary} 20%, ${colors.gray} 20%);
  background-size: 10px 10px, 10px 10px;
  box-shadow: 0 0.5px 0.5px rgba(0, 0, 0, 0.12),
    0 0.5px 0.5px rgba(0, 0, 0, 0.12), 0 1px 1px rgba(0, 0, 0, 0.12),
    0 2px 2px rgba(0, 0, 0, 0.12), 0 4px 4px rgba(0, 0, 0, 0.12);
  transform: perspective(500px) translateZ(-2000px);

  @media (min-width: 900px) {
    transform: perspective(500px) translateZ(-1500px);
  }

  @media (min-width: 1000px) {
    transform: perspective(500px) translateZ(-1000px);
  }

  @media (min-width: 1200px) {
    transform: perspective(500px) translateZ(-800px);
  }

  @media (min-width: 1300px) {
    transform: perspective(500px) translateZ(-500px);
  }

  @media (min-width: 1500px) {
    transform: perspective(500px) translateZ(-400px);
  }
`;
