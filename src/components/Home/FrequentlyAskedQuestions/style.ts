import styled from "styled-components";
import { colors, fonts } from "../../../constants";
import {
  Accordion as MaterialAccordion,
  AccordionDetails as MaterialAccordionDetails,
  AccordionSummary as MaterialAccordionSummary,
} from "@material-ui/core";
import { FlexColumn } from "../../../styles/global";

export const FaqContainer = styled.section`
  width: 100vw;
  min-height: 100vh;
  height: max-content;
  overflow-x: hidden;

  padding: 5rem 0;

  background-color: ${colors.primary};
`;

export const FaqHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-bottom: 4rem;
`;

export const FaqTitle = styled.h2`
  font-size: 1.3rem;
  font-family: ${fonts.Roboto};
  color: ${colors.secondary};
  margin: 0;

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
  background-color: ${colors.primary} !important;
  border: solid 1px ${colors.quad}66;
  border-radius: 20px !important;

  margin: 0.8rem 0;
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
