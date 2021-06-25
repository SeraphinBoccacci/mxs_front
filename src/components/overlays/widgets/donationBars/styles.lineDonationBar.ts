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

const computeCursorMinorOffset = (size: number, scale: number) => {
  return `${(size - size * scale * 1.2) / 2}px`;
};

const computeCursorMajorOffset = (size: number, scale: number) => {
  return `${(size * scale * 1.2) / 2}px`;
};

const computeCursorSize = (size: number, scale: number) => {
  return `${size * scale * 1.2}px`;
};

export const resolveCursorPosition = (display: DonationBarDisplays) => {
  if (display === DonationBarDisplays.Vertical)
    return css<CursorContainerProps>`
      bottom: ${({ progression = 0, containerWidth = 50, scale = 1 }) =>
        `calc(${progression}% - ${computeCursorMajorOffset(
          containerWidth,
          scale
        )})`};
      left: ${({ containerWidth = 50, scale = 1 }) =>
        computeCursorMinorOffset(containerWidth, scale)};
      width: ${({ containerWidth = 50, scale = 1 }) =>
        computeCursorSize(containerWidth, scale)};
      height: ${({ containerWidth = 50, scale = 1 }) =>
        computeCursorSize(containerWidth, scale)};
    `;

  return css<CursorContainerProps>`
    bottom: ${({ containerHeight = 50, scale = 1 }) =>
      computeCursorMinorOffset(containerHeight, scale)};
    left: ${({ progression = 0, containerHeight = 50, scale = 1 }) =>
      `calc(${progression}% - ${computeCursorMajorOffset(
        containerHeight,
        scale
      )})`};
    width: ${({ containerHeight = 50, scale = 1 }) =>
      computeCursorSize(containerHeight, scale)};
    height: ${({ containerHeight = 50, scale = 1 }) =>
      computeCursorSize(containerHeight, scale)};
  `;
};

export const CursorContainer = styled.div<CursorContainerProps>`
  position: absolute;
  z-index: 100;
  ${({ display = DonationBarDisplays.Horizontal }) =>
    resolveCursorPosition(display)}
  transition: ${({ duration = 1 }) => `${duration}s`};
`;
