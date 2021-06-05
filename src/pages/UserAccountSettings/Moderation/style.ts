import {
  Accordion as MaterialAccordion,
  AccordionDetails as MaterialAccordionDetails,
  AccordionSummary as MaterialAccordionSummary,
} from "@material-ui/core";
import styled from "styled-components";

import { colors, fonts } from "../../../constants";
import { FlexColumn, Paragraph } from "../../../styles/global";

export const Container = styled.section`
  width: max-content;
  height: max-content;
  overflow-x: hidden;
`;

export const Accordions = styled(FlexColumn)`
  width: 40rem;
  margin: 0 auto;
`;

export const Accordion = styled(MaterialAccordion)`
  border: solid 2px ${colors.quad}66;
  border-radius: 20px !important;

  margin: 0.8rem 0;

  &::before {
    background-color: transparent !important;
  }
`;

export const AccordionSummary = styled(MaterialAccordionSummary)`
  font-family: ${fonts.Ubuntu};
  font-size: 1rem;
  line-height: 1.3rem;

  @media (min-width: 500px) {
    font-size: 1.25rem;
    line-height: 2rem;
  }
`;

export const AccordionDetails = styled(MaterialAccordionDetails)`
  font-family: ${fonts.Roboto};
  font-size: 0.9rem;
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
