import {
  Step as MaterialStep,
  Stepper as MaterialStepper,
} from "@material-ui/core";
import styled from "styled-components";

import { colors, fonts } from "../../constants";
import { FlexColumn } from "../../styles/global";

export const VideoPlayerContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 40rem;
  margin: 2rem auto 6rem;
`;

export const VideoTitle = styled.h2`
  margin: 0 auto 3rem;
  color: ${colors.secondary};
  font-size: 1.3rem;
  font-family: ${fonts.Roboto};

  @media (min-width: 450px) {
    font-size: 2rem;
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
