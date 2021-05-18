import styled, { css } from "styled-components";

import { colors } from "../../../../constants";
import {
  BarDisplayAnimations,
  LogoAnimations,
} from "../../../../types/donationBar";
import { logoAnimationsMapper } from "./styles.donationBar";

interface DonationBarContainerProps {
  offsetTop?: number;
  offsetLeft?: number;
  contentWidth?: number;
  shouldReact: boolean;
  duration?: number;
  animation?: BarDisplayAnimations;
}

export const DonationBarContainer = styled.div<DonationBarContainerProps>`
  position: fixed;
  top: ${({ offsetTop = 100 }) => `${offsetTop}px`};
  left: ${({ offsetLeft = 100 }) => `${offsetLeft}px`};

  padding: 0;
  margin: 0;

  width: ${({ contentWidth = 200 }) => `${contentWidth}px`};
  height: ${({ contentWidth = 200 }) => `${contentWidth}px`};

  transition: ${({ duration = 1 }) => `${duration / 5}s`};

  ${({ shouldReact, animation }) =>
    shouldReact && animation === BarDisplayAnimations.center
      ? css`
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%) perspective(500px) translateZ(50px);
        `
      : ""};
`;

export const SubPartContainer = styled.div`
  position: absolute;
  width: max-content;
  height: max-content;

  font-family: "Noto Sans JP", sans-serif;
  font-size: 1.3rem;

  transition: 0.3s;
`;

interface SvgProps {
  contentWidth?: number;
}

export const Svg = styled.svg<SvgProps>`
  width: ${({ contentWidth = 200 }) => `${contentWidth}px`};
  height: ${({ contentWidth = 200 }) => `${contentWidth}px`};

  margin: 0;
  padding: 0;
`;

interface CircleProps {
  progression: number;
  strokeWidth?: number;
}

const Circle = styled.circle<CircleProps>`
  stroke-width: ${({ strokeWidth = 10 }) => `${strokeWidth}px`};

  stroke-dasharray: 314px;
  transform: rotate(-90deg);
  transform-origin: center center;

  transition: 0.3s;
`;

interface SentAmountCircleProps {
  color?: string;
  shouldOverrideColor?: boolean;
  overrideColor?: string;
}

export const SentAmountCircle = styled(Circle)<SentAmountCircleProps>`
  stroke: ${({ color = colors.quad, shouldOverrideColor, overrideColor }) =>
    shouldOverrideColor && overrideColor ? overrideColor : color};
`;

interface AmountToSendCircleProps {
  color?: string;
}

export const AmountToSendCircle = styled(Circle)<AmountToSendCircleProps>`
  stroke: ${({ color = colors.primary }) => color};

  stroke-dashoffset: ${({ progression }) => `${(progression / 100) * 314}px`};
`;

interface CursorContainerProps {
  progression: number;
  shouldReact?: boolean;
  animation?: LogoAnimations;
}

export const Cursor = styled.img<CursorContainerProps>`
  position: absolute;

  height: 40%;
  width: 40%;

  top: 30%;
  left: 30%;

  z-index: 100;

  border-radius: 10000px;

  ${({ shouldReact, animation }) =>
    shouldReact && logoAnimationsMapper(animation)}
`;