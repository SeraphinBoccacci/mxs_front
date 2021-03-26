import styled from "styled-components";

import { colors, fonts } from "../../../constants";

export const Container = styled.div`
  width: 100%;
  height: 40rem;
  background: ${colors.soft_black};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h2`
  font-family: ${fonts.Roboto};
  font-size: 1.3rem;

  margin: 0 auto 3rem;

  color: ${colors.secondary};

  @media (min-width: 450px) {
    font-size: 2rem;
  }
`;
