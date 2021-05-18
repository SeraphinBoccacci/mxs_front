import styled from "styled-components";

import { DonationBarDisplays } from "../../../../../../types/donationBar";

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

  border-radius: 5px;
`;

interface CursorContainerProps {
  progression: number;
  display?: DonationBarDisplays;
}

export const StyledImageContainer = styled.div<CursorContainerProps>`
  position: absolute;
  bottom: ${({ progression, display }) =>
    display === DonationBarDisplays.Vertical
      ? `calc(${progression}% - 2rem)`
      : "-0.5rem"};
  left: ${({ progression, display }) =>
    display === DonationBarDisplays.Vertical
      ? "-0.5rem"
      : `calc(${progression}% - 2rem)`};

  height: 4rem;
  width: 4rem;

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

  height: 4rem;
  width: 4rem;

  z-index: 100;

  border-radius: 10000px;
`;
