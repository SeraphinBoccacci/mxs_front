import {
  Accordion as MaterialAccordion,
  AccordionDetails as MaterialAccordionDetails,
  AccordionSummary as MaterialAccordionSummary,
} from "@material-ui/core";
import styled from "styled-components";

import { colors, fonts } from "../../../constants";
import { FlexColumn, Paragraph } from "../../../styles/global";

export const Container = styled.section`
  overflow-x: hidden;
  height: max-content;
`;

export const Accordions = styled(FlexColumn)`
  width: 100%;
  margin: 0 auto;

  @media (min-width: 500px) {
    width: 25rem;
  }

  @media (min-width: 570px) {
    width: 30rem;
  }

  @media (min-width: 750px) {
    width: 40rem;
  }
`;

export const Accordion = styled(MaterialAccordion)`
  margin: 0.8rem 0;
  border: solid 2px ${colors.quad}66;
  border-radius: 20px !important;

  &::before {
    background-color: transparent !important;
  }
`;

export const AccordionSummary = styled(MaterialAccordionSummary)`
  font-size: 1rem;
  font-family: ${fonts.Ubuntu};
  line-height: 1.3rem;

  @media (min-width: 500px) {
    font-size: 1.25rem;
    line-height: 2rem;
  }
`;

export const AccordionDetails = styled(MaterialAccordionDetails)`
  font-size: 0.9rem;
  font-family: ${fonts.Roboto};
  line-height: 1.4rem;
  text-align: justify;

  @media (min-width: 450px) {
    font-size: 0.8rem;
    line-height: 1.1rem;
  }
`;

export const StyledParagraph = styled(Paragraph)`
  font-size: 0.8rem;
  line-height: 1rem;

  &:last-child {
    margin-bottom: 4rem;
  }
`;
