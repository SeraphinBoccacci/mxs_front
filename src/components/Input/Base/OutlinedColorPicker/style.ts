import styled from "styled-components";

import { fonts } from "../../../../constants";

export const Container = styled.div`
  top: 0;
  left: 0;
  z-index: 50;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 10rem;
  height: 2.5rem;
  padding: 0;
  border: none;
  outline: none;
  font-size: 0.95rem;
  font-family: ${fonts.Roboto};
  background: none;
`;
