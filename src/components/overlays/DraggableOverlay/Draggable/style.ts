import styled, { keyframes } from "styled-components";

import { colors } from "../../../../constants";

export const Container = styled.div`
  position: absolute;
  z-index: 250;
  width: 100%;
  height: 100%;
`;

export const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const appear = keyframes`
from {
  transform: scale(0, 0);
} 
to {
  transform: scale(1, 1);
}
`;

interface ContainerProps {
  offsetTop: number;
  offsetLeft: number;
}
export const Content = styled.div<ContainerProps>`
  position: absolute;
  top: ${({ offsetTop }) => offsetTop + "px"};
  left: ${({ offsetLeft }) => offsetLeft + "px"};
  width: max-content;
  height: max-content;
  cursor: pointer;

  & div {
    opacity: 0.6;
  }
`;

export const DraggableContent = styled(Content)<{
  isDragged: boolean;
}>`
  position: relative;
  border: 7px solid ${colors.quad};
  cursor: move;
  animation: ${appear} 0.2s;
`;
