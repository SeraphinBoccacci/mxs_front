import styled from "styled-components";

interface DonationBarContainerProps {
  contentWidth?: number;
}

export const DonationBarContainer = styled.div<DonationBarContainerProps>`
  position: unset;
  top: unset;
  left: unset;

  padding: 0;
  margin: 0;

  width: ${({ contentWidth = 200 }) => `${contentWidth}px`};
  height: ${({ contentWidth = 200 }) => `${contentWidth}px`};

  border-radius: 20px;
`;

export const StyledImageContainer = styled.div`
  position: absolute;
  margin: 0;
  padding: 0;

  height: 100%;
  width: 100%;

  top: 0;
  left: 0;
`;

export const StyledImageScreen = styled.div`
  position: absolute;
  z-index: 1000;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
`;
