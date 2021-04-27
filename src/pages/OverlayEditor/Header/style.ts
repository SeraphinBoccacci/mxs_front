import styled from "styled-components";

import { colors } from "../../../constants";

export const Container = styled.header`
  width: 100vw;
  height: 4rem;

  padding: 0 2rem;

  background: ${colors.primary};

  display: flex;
  flex-direction: row;
  justify-content: space-between;

  & button {
    height: 2.4rem;
    margin: auto 1rem;
  }
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: row;

  & > button {
    line-height: 1rem;
  }

  & > button:first-child > span > div > span:first-child {
    display: inline-block;
  }

  & > button:first-child > span > div > span:first-child {
    font-size: 0.7rem !important;
    line-height: 0.7rem;
  }

  & > button:first-child > span > div > span:last-child {
    display: inline-block;
    font-size: 0.9rem !important;
    line-height: 0.9rem;
  }
`;
