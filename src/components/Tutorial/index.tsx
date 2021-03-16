import StepLabel from "@material-ui/core/StepLabel";
import { useCallback, useMemo, useState } from "react";
import React from "react";

import { TutorialStepElement } from "../../constants/tutorials";
import {
  HideButton,
  Image,
  Step,
  StepContent,
  Stepper,
  StepperContainer,
  TutorialContainer,
  TutorialStep,
} from "./style";

export const Tutorial = ({ tutorial }: { tutorial: TutorialStepElement[] }) => {
  const [activeStep, setActiveStep] = useState(0);
  const [isTutorialVisible, setIsTutorialVisible] = useState(true);

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

  const steps = useMemo(
    () =>
      activeStepData.content.map(({ image, text }, index) => (
        <StepContent key={`activeStepData-${index}`}>
          <Image src={image}></Image>
          <>{text}</>
        </StepContent>
      )),
    [activeStepData]
  );

  return (
    <TutorialContainer>
      <HideButton onClick={handleOnHide} variant="contained" color="secondary">
        {isTutorialVisible ? "Hide" : "Show"} tutorial
      </HideButton>
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
          <TutorialStep>{steps}</TutorialStep>
        </>
      )}
    </TutorialContainer>
  );
};
