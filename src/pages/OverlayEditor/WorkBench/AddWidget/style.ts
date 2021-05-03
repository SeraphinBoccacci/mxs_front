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
  width: 100vw;
  height: 100vh;

  z-index: 100;
`;

export const Container = styled.div`
  position: absolute;
  z-index: 200;
  bottom: 4rem;
  left: 0;

  height: max-content;
  width: 14rem;

  animation: ${appear} 1s 1;

  display: flex;
  flex-direction: column;
  align-items: center;

  backdrop-filter: blur(5px);

  border-top-right-radius: 20px;

  overflow: hidden;
`;

export const WidgetButton = styled.button`
  width: 12rem;
  height: 2.5rem;

  background: ${colors.secondary};

  margin: 0.5rem auto;

  border: none;
  border-radius: 3px;

  font-size: 1.1rem;
  font-family: ${fonts.Ubuntu};

  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.12);

  transition: 0.3s;

  cursor: pointer;

  outline: none;

  &:hover {
    background: ${colors.gray};
  }

  &:disabled {
    background: ${colors.gray}77;

    cursor: not-allowed;
  }
`;
