import styled, { keyframes } from "styled-components";

import { colors } from "../../../../constants";

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
  top: 0;
  left: 0;
  z-index: 350;
  width: 100%;
  height: 100%;
  background-color: ${colors.gray}66;
`;

export const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 400;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
  overflow-y: scroll;
  width: 45rem;
  height: 37rem;
  padding: 2rem 0;
  border-right: solid 3px ${colors.primary};
  border-bottom: solid 3px ${colors.primary};
  border-bottom-right-radius: 10px;
  animation: ${appear} 0.6s 1;
  background: #fff;

  @media (min-height: 55rem) {
    width: 50rem;
    height: 40rem;
  }
`;

export const Buttons = styled.div`
  position: sticky;
  bottom: 0;
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
