import styled from "styled-components";

import { fonts } from "../../../../constants";

export const Container = styled.div`
  z-index: 50;
  display: block;
  top: 0rem;
  left: 0;

  width: 10rem;
  height: 2.5rem;
  padding: 0;
  outline: none;

  border: none;
  background: none;

  font-family: ${fonts.Roboto};
  font-size: 0.95rem;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
