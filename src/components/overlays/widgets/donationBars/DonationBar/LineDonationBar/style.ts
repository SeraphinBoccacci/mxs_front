import styled, { css } from "styled-components";

import {
  BarDisplayAnimations,
  LogoAnimations,
} from "../../../../../../types/donationBar";
import { logoAnimationsMapper } from "../../styles.donationBar";

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
`;

interface CursorProps {
  duration?: number;
  animation?: LogoAnimations;
  shouldReact: boolean;
}

export const Cursor = styled.img<CursorProps>`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 10000px;
  transition: ${({ duration = 1 }) => `${duration}s`};
  ${({ shouldReact, animation }) =>
    shouldReact && logoAnimationsMapper(animation)}
`;
