import styled, { css } from "styled-components";

import { colors } from "../../../../constants";
import { FlexRow } from "../../../../styles/global";
import { DonationBarDisplays } from "../../../../types/donationBar";

interface ContentProps {
  borderWidth?: number;
  borderColor?: string;
  borderRadius?: number;
  display?: DonationBarDisplays;
}

export const Content = styled(FlexRow)<ContentProps>`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: ${({ display }) =>
    display === DonationBarDisplays.Vertical ? "column-reverse" : "row"};
  overflow: hidden;
  width: 100%;
  height: 100%;
  border-width: ${({ borderWidth = 0 }) => `${borderWidth}px`};
  border-style: solid;
  border-color: ${({ borderColor = "none" }) => borderColor};
  border-radius: ${({ borderRadius = 5 }) => `${borderRadius}px`};
`;

interface SubPartProps {
  progression: number;
  duration?: number;
  textColor?: string;
}

const SubPart = styled.div<SubPartProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  color: ${({ textColor }) => textColor};
  font-size: 1.1rem;
  font-family: "Noto Sans JP", sans-serif;
  text-align: center;
  transition: ${({ duration = 1 }) => `${duration}s`};

  & div {
    width: max-content;
    margin: auto;
  }
`;

interface AmountSentPartProps {
  color?: string;
  display?: DonationBarDisplays;
  shouldOverrideColor?: boolean;
  overrideColor?: string;
}

export const AmountSentPart = styled(SubPart)<AmountSentPartProps>`
  width: ${({ display, progression }) =>
    display === DonationBarDisplays.Vertical ? "100%" : `${progression}%`};
  height: ${({ display, progression }) =>
    display === DonationBarDisplays.Vertical ? `${progression}%` : "100%"};
  background: ${({ color = colors.quad, shouldOverrideColor, overrideColor }) =>
    shouldOverrideColor && overrideColor ? overrideColor : color};
`;

interface AmountToSendPartProps {
  color?: string;
  display?: DonationBarDisplays;
}

export const AmountToSendPart = styled(SubPart)<AmountToSendPartProps>`
  width: ${({ display, progression }) =>
    display === DonationBarDisplays.Vertical
      ? "100%"
      : `${100 - progression}%`};
  height: ${({ display, progression }) =>
    display === DonationBarDisplays.Vertical
      ? `${100 - progression}%`
      : "100%"};
  background: ${({ color = colors.primary }) => color};
`;

interface CursorContainerProps {
  progression: number;
  display?: DonationBarDisplays;
  containerHeight?: number;
  containerWidth?: number;
  scale?: number;
  duration?: number;
}

const computeCursorMinorOffset = (size: number) => {
  return `-${size * 0.1}px`;
};

const computeCursorMajorOffset = (size: number) => {
  return `${size * 0.6}px`;
};

const computeCursorSize = (size: number) => {
  return `${size * 1.2}px`;
};

export const resolveCursorPosition = (display: DonationBarDisplays) => {
  if (display === DonationBarDisplays.Vertical)
    return css<CursorContainerProps>`
      bottom: ${({ progression, containerWidth = 50 }) =>
        `calc(${progression}% - ${computeCursorMajorOffset(containerWidth)})`};
      left: ${({ containerWidth = 50 }) =>
        computeCursorMinorOffset(containerWidth)};
      width: ${({ containerWidth = 50 }) => computeCursorSize(containerWidth)};
      height: ${({ containerWidth = 50 }) => computeCursorSize(containerWidth)};
    `;

  return css<CursorContainerProps>`
    bottom: ${({ containerHeight = 50 }) =>
      computeCursorMinorOffset(containerHeight)};
    left: ${({ progression, containerHeight = 50 }) =>
      `calc(${progression}% - ${computeCursorMajorOffset(containerHeight)})`};
    width: ${({ containerHeight = 50 }) => computeCursorSize(containerHeight)};
    height: ${({ containerHeight = 50 }) => computeCursorSize(containerHeight)};
  `;
};

export const CursorContainer = styled.div<CursorContainerProps>`
  position: absolute;
  z-index: 100;
  transform: ${({ scale = 1 }) => `scale(${scale})`};
  ${({ display = DonationBarDisplays.Horizontal }) =>
    resolveCursorPosition(display)}
  transition: ${({ duration = 1 }) => `${duration}s`};
`;
