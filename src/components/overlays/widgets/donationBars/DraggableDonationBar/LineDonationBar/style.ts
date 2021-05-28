import styled from "styled-components";

import { DonationBarDisplays } from "../../../../../../types/donationBar";
import { resolveCursorPosition } from "../../styles.lineDonationBar";

interface DonationBarContainerProps {
  width?: number;
  height?: number;
  offsetTop?: number;
  offsetLeft?: number;
}

export const DonationBarContainer = styled.div<DonationBarContainerProps>`
  position: unset;
  top: unset;
  left: unset;

  width: ${({ width = 500 }) => `${width}px`};
  height: ${({ height = 50 }) => `${height}px`};

  backdrop-filter: blur(10px);
  border-radius: 20px;
`;

interface CursorContainerProps {
  progression: number;
  display?: DonationBarDisplays;
  containerHeight?: number;
  containerWidth?: number;
  scale?: number;
}

export const StyledImageContainer = styled.div<CursorContainerProps>`
  position: absolute;

  ${({ display = DonationBarDisplays.Horizontal }) =>
    resolveCursorPosition(display)}

  transform: ${({ scale = 1 }) => `scale(${scale})`};

  z-index: 1000;
`;

export const StyledImageScreen = styled.div`
  position: absolute;
  z-index: 1000;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
`;

export const Cursor = styled.img`
  position: absolute;

  bottom: 0;
  left: 0;

  height: 100%;
  width: 100%;

  z-index: 100;

  border-radius: 10000px;
`;
