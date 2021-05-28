import styled, { css } from "styled-components";

import {
  BarDisplayAnimations,
  DonationBarDisplays,
  LogoAnimations,
} from "../../../../../../types/donationBar";
import { logoAnimationsMapper } from "../../styles.donationBar";
import { resolveCursorPosition } from "../../styles.lineDonationBar";

interface DonationBarContainerProps {
  width?: number;
  height?: number;
  offsetTop?: number;
  offsetLeft?: number;
  shouldReact: boolean;
  duration?: number;
  animation?: BarDisplayAnimations;
}

export const DonationBarContainer = styled.div<DonationBarContainerProps>`
  position: fixed;
  top: ${({ offsetTop = 100 }) => `${offsetTop}px`};
  left: ${({ offsetLeft = 100 }) => `${offsetLeft}px`};

  width: ${({ width = 500 }) => `${width}px`};
  height: ${({ height = 50 }) => `${height}px`};

  border-radius: 5px;

  transition: ${({ duration = 1 }) => `${duration / 5}s`};

  ${({ shouldReact, animation }) =>
    shouldReact && animation === BarDisplayAnimations.center
      ? css`
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%) perspective(500px) translateZ(50px);
        `
      : ""};

  backdrop-filter: blur(10px);
  border-radius: 20px;
`;

interface CursorContainerProps {
  progression: number;
  display?: DonationBarDisplays;
  duration?: number;
  animation?: LogoAnimations;
  shouldReact: boolean;
  containerHeight?: number;
  containerWidth?: number;
  scale?: number;
}

export const Cursor = styled.img<CursorContainerProps>`
  position: absolute;

  ${({ display = DonationBarDisplays.Horizontal }) =>
    resolveCursorPosition(display)}
  z-index: 100;

  border-radius: 10000px;

  transition: ${({ duration = 1 }) => `${duration}s`};
  ${({ shouldReact, animation }) =>
    shouldReact && logoAnimationsMapper(animation)}

  transform: ${({ scale = 1 }) => `scale(${scale})`};
`;
