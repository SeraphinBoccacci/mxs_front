import { Paper } from "@material-ui/core";
import styled from "styled-components";

import { colors, fonts } from "../../constants";

export const TabPanelContainer = styled.div`
  min-height: 100vh;
  width: 100vw;
  padding-top: 2rem;

  background-color: ${colors.black};
`;

export const ContentContainer = styled(Paper)`
  margin: 1.4rem auto !important;
  width: max-content !important;
  height: max-content !important;
  padding: 1rem 2rem !important;

  @media (min-width: 800px) {
    margin: 2rem auto !important;
    padding: 0.8rem 3rem !important;
  }

  @media (min-width: 1100px) {
    margin: 3rem auto !important;
    padding: 1rem 4rem !important;
  }
`;

export const Paragraph = styled.p`
  color: ${colors.secondary};
  font-family: ${fonts.Ubuntu};
  font-size: 0.9rem;
  line-height: 1.6rem;
  text-align: center;
  max-width: 20rem;

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
