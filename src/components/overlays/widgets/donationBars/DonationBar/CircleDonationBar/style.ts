import styled, { css } from "styled-components";

import { BarDisplayAnimations } from "../../../../../../types/donationBar";

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
  width: ${({ contentWidth = 200 }) => `${contentWidth}px`};
  height: ${({ contentWidth = 200 }) => `${contentWidth}px`};
  margin: 0;
  padding: 0;
  border-radius: 20px;
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
