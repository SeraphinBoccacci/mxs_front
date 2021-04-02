import styled from "styled-components";

import { colors, fonts } from "../../../constants";

export const TabPanelContainer = styled.div`
  min-height: 100vh;
  width: 100vw;
  padding-top: 2rem;

  background-color: ${colors.black};
`;

export const Paragraph = styled.p`
  color: ${colors.secondary};
  font-family: ${fonts.Ubuntu};
  font-size: 0.9rem;
  line-height: 1.6rem;
  text-align: justify;
  max-width: 20rem;

  margin: 0.6rem 0;

  @media (min-width: 700px) {
    font-size: 1rem;
    max-width: 30rem;
  }

  @media (min-width: 1000px) {
    max-width: 40rem;
    font-size: 1.1rem;
    line-height: 2rem;
  }
`;
