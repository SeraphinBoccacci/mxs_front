import {
  Paper,
  Stepper as MaterialStepper,
  Step as MaterialStep,
  Button,
} from "@material-ui/core";
import styled from "styled-components";
import { colors } from "../../constants";
import { FlexColumn } from "../../styles/global";

export const TutorialContainer = styled(Paper)`
  position: relative;
  width: 80vw;
  height: max-content;

  margin: 2rem auto;

  @media (min-width: 550px) {
    width: 30rem;
  }

  @media (min-width: 700px) {
    width: 40rem;
  }

  @media (min-width: 1000px) {
    width: 50rem;
  }
`;

export const StepperContainer = styled.div`
  width: calc(100% - 4rem);
  overflow: scroll;

  margin: 0 2rem;
`;

export const Stepper = styled(MaterialStepper)`
  width: max-content !important;
  border-radius: 10px !important;
`;

export const Step = styled(MaterialStep)`
  width: 8rem;
`;

export const TutorialStep = styled.div`
  width: 100%;
  height: max-content;

  padding: 0.5rem 0;
`;

export const StepContent = styled(FlexColumn)`
  background-color: ${colors.black};
  padding: 0.3rem;
  border-radius: 12px;
  width: 95%;

  margin: 2rem auto;

  @media (min-width: 500px) {
    width: 80%;
    padding: 1.3rem;
  }
`;

export const Image = styled.img`
  width: 100%;
  border-radius: 7px;

  margin: 0 auto;
`;

export const HideButton = styled(Button)`
  position: relative !important;
  left: 50% !important;
  transform: translateX(-50%) !important;
  width: max-content !important;
  margin: 1.3rem auto !important;
`;
