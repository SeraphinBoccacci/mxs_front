import { Paper } from "@material-ui/core";
import styled from "styled-components";
import { colors, colorsV2, fonts } from "../../constants";

export const TabPanelContainer = styled.div`
  min-height: 100vh;
  width: 100vw;
  padding-top: 2rem;

  background-color: ${colors.eerieBlack};
`;

export const ContentContainer = styled(Paper)`
  margin: 3rem auto !important;
  width: max-content !important;
  padding: 1rem 4rem !important;
`;

export const Paragraph = styled.p`
  color: ${colorsV2.secondary};
  font-family: ${fonts.Ubuntu};
  font-size: 1.1rem;
`;
