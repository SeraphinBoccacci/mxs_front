import styled from "styled-components";

import { colors } from "../../../../constants";

export const Container = styled.div`
  margin: 3rem 1rem;
  width: 15rem;
  height: max-content;
  background: ${colors.soft_black};
`;

export const ImageContainer = styled.div`
  width: 15rem;
  min-height: 8rem;
  height: max-content;
`;

export const Image = styled.img`
  width: 100%;

  background-color: blue;
`;

export const Buttons = styled.div`
  width: 100%;
  margin: 0.5rem 0;

  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;
