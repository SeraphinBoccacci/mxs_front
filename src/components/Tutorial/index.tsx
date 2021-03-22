import { Button } from "@material-ui/core";
import StepLabel from "@material-ui/core/StepLabel";
import { useCallback, useMemo, useState } from "react";
import React from "react";

import { TutorialStepElement } from "../../constants/tutorials";
import {
  Buttons,
  Image,
  Step,
  StepContent,
  Stepper,
  StepperContainer,
  TutorialContainer,
  TutorialStep,
} from "./style";

export const Tutorial = ({
  tutorial,
  videoTutorialLink,
}: {
  tutorial: TutorialStepElement[];
  videoTutorialLink?: string;
}) => {
  const [activeStep, setActiveStep] = useState(0);
  const [isTutorialVisible, setIsTutorialVisible] = useState(false);

  const goToStep = useCallback(
    (stepIndex: number) => {
      setActiveStep(stepIndex);
    },
    [setActiveStep]
  );

  const handleOnHide = useCallback(() => {
    setIsTutorialVisible((prevState) => !prevState);
  }, [setIsTutorialVisible]);

  const activeStepData = tutorial[activeStep];

  const step = useMemo(
    () =>
      activeStepData.content.map(({ image, text }, index) => (
        <StepContent key={`activeStepData-${index}`}>
          {image && <Image src={image}></Image>}
          {text}
        </StepContent>
      )),
    [activeStepData]
  );

  return (
    <TutorialContainer>
      <Buttons>
        <Button onClick={handleOnHide} variant="contained" color="secondary">
          {isTutorialVisible ? "Hide" : "Show"} tutorial
        </Button>
        {!!videoTutorialLink && (
          <Button variant="outlined" color="secondary">
            <a href="videoTutorialLink" target="about:blank">
              Video Tutorial
            </a>
          </Button>
        )}
      </Buttons>

      {isTutorialVisible && (
        <>
          <StepperContainer>
            <Stepper activeStep={activeStep} alternativeLabel>
              {tutorial.map(
                ({ label }: TutorialStepElement, stepIndex: number) => (
                  <Step key={`${label}-${stepIndex}`}>
                    <StepLabel onClick={() => goToStep(stepIndex)}>
                      {label}
                    </StepLabel>
                  </Step>
                )
              )}
            </Stepper>
          </StepperContainer>
          <TutorialStep>{step}</TutorialStep>
        </>
      )}
    </TutorialContainer>
  );
};
