import {
  Paper,
  Step as MaterialStep,
  Stepper as MaterialStepper,
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
  display: flex;
  flex-direction: row;
  justify-content: center;
  overflow: scroll;
  width: calc(100% - 4rem);
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
  width: 95%;
  margin: 2rem auto;
  padding: 0.3rem;
  border-radius: 12px;
  background-color: ${colors.black};

  @media (min-width: 500px) {
    width: 80%;
    padding: 1.3rem;
  }
`;

export const Image = styled.img`
  width: 100%;
  margin: 0 auto;
  border-radius: 7px;
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  height: max-content;
  margin: 1.3rem auto !important;

  > * {
    margin: 0 2rem !important;
  }
`;
