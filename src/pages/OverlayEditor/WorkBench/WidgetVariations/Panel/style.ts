import styled, { keyframes } from "styled-components";

import { colors } from "../../../../../constants";

const appear = keyframes`
from {
  max-width: 0;
}
to {
  max-width: 50rem;
}
`;

export const Background = styled.div`
  position: absolute;
  z-index: 350;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  background-color: ${colors.gray}66;
`;

export const Container = styled.div`
  position: absolute;
  z-index: 400;
  top: 0;
  left: 0;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding: 2rem 0;

  background: #ffffff;

  border-right: solid 3px ${colors.primary};
  border-bottom: solid 3px ${colors.primary};
  border-bottom-right-radius: 10px;

  overflow: hidden;
  overflow-y: scroll;

  animation: ${appear} 0.6s 1;

  width: 45rem;
  height: 37rem;

  @media (min-height: 55rem) {
    width: 50rem;
    height: 40rem;
  }
`;

export const Buttons = styled.div`
  position: sticky;
  bottom: 0rem;
  left: 50%;
  display: flex;
  flex-direction: row;

  width: max-content;
  margin: 0 auto;

  transform: translateX(-50%);

  & > button {
    margin: 0 1rem;
  }
`;
