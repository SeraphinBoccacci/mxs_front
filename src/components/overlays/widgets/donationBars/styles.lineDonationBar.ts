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
  width: 100%;
  height: 100%;

  overflow: hidden;

  border-style: solid;
  border-width: ${({ borderWidth = 0 }) => `${borderWidth}px`};
  border-color: ${({ borderColor = "none" }) => borderColor};
  border-radius: ${({ borderRadius = 5 }) => `${borderRadius}px`};

  display: flex;
  flex-direction: ${({ display }) =>
    display === DonationBarDisplays.Vertical ? "column-reverse" : "row"};
`;

interface SubPartProps {
  progression: number;
  duration?: number;
}

const SubPart = styled.div<SubPartProps>`
  font-family: "Noto Sans JP", sans-serif;
  font-size: 1.1rem;

  text-align: center;

  display: flex;
  flex-direction: column;
  justify-content: center;

  transition: ${({ duration = 1 }) => `${duration}s`};

  overflow: hidden;

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

      height: ${({ containerWidth = 50 }) => computeCursorSize(containerWidth)};
      width: ${({ containerWidth = 50 }) => computeCursorSize(containerWidth)};
    `;

  return css<CursorContainerProps>`
    left: ${({ progression, containerHeight = 50 }) =>
      `calc(${progression}% - ${computeCursorMajorOffset(containerHeight)})`};
    bottom: ${({ containerHeight = 50 }) =>
      computeCursorMinorOffset(containerHeight)};

    height: ${({ containerHeight = 50 }) => computeCursorSize(containerHeight)};
    width: ${({ containerHeight = 50 }) => computeCursorSize(containerHeight)};
  `;
};
