import styled from "styled-components";

import { colors, fonts } from "../../../constants";

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 40rem;
  background: ${colors.soft_black};
`;

export const Title = styled.h2`
  margin: 0 auto 3rem;
  color: ${colors.secondary};
  font-size: 1.3rem;
  font-family: ${fonts.Roboto};

  @media (min-width: 450px) {
    font-size: 2rem;
  }
`;
