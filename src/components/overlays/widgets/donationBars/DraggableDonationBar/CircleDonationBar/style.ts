import styled from "styled-components";

interface DonationBarContainerProps {
  contentWidth?: number;
}

export const DonationBarContainer = styled.div<DonationBarContainerProps>`
  position: unset;
  top: unset;
  left: unset;
  width: ${({ contentWidth = 200 }) => `${contentWidth}px`};
  height: ${({ contentWidth = 200 }) => `${contentWidth}px`};
  margin: 0;
  padding: 0;
  border-radius: 20px;
`;

export const StyledImageContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
`;

export const StyledImageScreen = styled.div`
  position: absolute;
  z-index: 1000;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
`;
