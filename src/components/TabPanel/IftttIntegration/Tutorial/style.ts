import { Paper, Stepper as MaterialStepper } from "@material-ui/core";
import styled from "styled-components";
import { colorsV2, fonts } from "../../../../constants";
import { FlexColumn } from "../../../../styles/global";

export const TutorialContainer = styled(Paper)`
  position: relative;
  width: 50rem;
  height: max-content;

  margin: 2rem auto;
`;

export const TutorialStep = styled.div`
  width: 100%;
  height: max-content;

  padding: 0.5rem;
`;

export const Stepper = styled(MaterialStepper)`
  border-radius: 10px !important;
`;

export const StepContent = styled(FlexColumn)`
  background-color: ${colorsV2.black};
  padding: 1.3rem;
  border-radius: 12px;
  width: 80%;

  margin: 2rem auto;
`;

export const Image = styled.img`
  width: 100%;

  margin: 0 auto;
`;

export const Text = styled.p`
  width: 100%;
  color: ${colorsV2.secondary};
  font-family: ${fonts.Ubuntu};
  font-size: 1.1rem;
  line-height: 1.5rem;

  margin: 1rem auto 0.5;
  padding: 0 1.2rem;
`;
