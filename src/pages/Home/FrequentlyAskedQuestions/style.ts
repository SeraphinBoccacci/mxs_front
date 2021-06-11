import {
  Accordion as MaterialAccordion,
  AccordionDetails as MaterialAccordionDetails,
  AccordionSummary as MaterialAccordionSummary,
} from "@material-ui/core";
import styled from "styled-components";

import { colors, fonts } from "../../../constants";
import { FlexColumn } from "../../../styles/global";

export const FaqContainer = styled.section`
  overflow-x: hidden;
  width: 100vw;
  height: max-content;
  min-height: 100vh;
  padding: 5rem 0;
  background-color: ${colors.primary};
`;

export const FaqHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 4rem;
`;

export const FaqTitle = styled.h2`
  margin: 0;
  color: ${colors.secondary};
  font-size: 1.3rem;
  font-family: ${fonts.Roboto};

  @media (min-width: 450px) {
    font-size: 2rem;
  }
`;

export const Accordions = styled(FlexColumn)`
  width: 20rem;
  margin: 0 auto;

  @media (min-width: 500px) {
    width: 27rem;
  }

  @media (min-width: 700px) {
    width: 35rem;
  }

  @media (min-width: 920px) {
    width: 50rem;
  }
`;

export const Accordion = styled(MaterialAccordion)`
  margin: 0.8rem 0;
  border: solid 1px ${colors.quad}66;
  border-radius: 20px !important;
  background-color: ${colors.primary} !important;

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
