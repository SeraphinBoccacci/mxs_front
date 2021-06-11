import styled, { keyframes } from "styled-components";

import { colors, fonts } from "../../../../constants";

const appear = keyframes`
from {
    max-height: 0;
}
to {
    max-height: 100vh;
}
`;

export const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100vw;
  height: 100vh;
`;

export const Container = styled.div`
  position: absolute;
  bottom: 4rem;
  left: 0;
  z-index: 200;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  width: 14rem;
  height: max-content;
  border-top-right-radius: 20px;
  animation: ${appear} 1s 1;
`;

export const WidgetButton = styled.button`
  width: 12rem;
  height: 2.5rem;
  margin: 0.5rem auto;
  border: none;
  border-radius: 3px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.12);
  outline: none;
  font-size: 1.1rem;
  font-family: ${fonts.Ubuntu};
  cursor: pointer;
  background: ${colors.secondary};
  transition: 0.3s;

  &:hover {
    background: ${colors.gray};
  }

  &:disabled {
    cursor: not-allowed;
    background: ${colors.gray}77;
  }
`;
