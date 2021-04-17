import {
  Paper,
  Step as MaterialStep,
  Stepper as MaterialStepper,
} from "@material-ui/core";
import styled from "styled-components";

import { colors, fonts } from "../../constants";
import { FlexColumn } from "../../styles/global";

export const VideoPlayerContainer = styled.div`
  position: relative;

  width: 100%;
  height: 40rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin: 2rem auto 6rem;
`;

export const VideoTitle = styled.h2`
  font-family: ${fonts.Roboto};
  font-size: 1.3rem;

  margin: 0 auto 3rem;

  color: ${colors.secondary};

  @media (min-width: 450px) {
    font-size: 2rem;
  }
`;

export const StepperContainer = styled.div`
  width: calc(100% - 4rem);
  overflow: scroll;

  display: flex;
  flex-direction: row;
  justify-content: center;

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
