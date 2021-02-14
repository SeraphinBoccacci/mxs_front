import StepLabel from "@material-ui/core/StepLabel";
import { useState } from "react";
import { TutorialStepElement } from "../../constants/tutorials";
import {
  TutorialStep,
  TutorialContainer,
  Image,
  StepContent,
  Stepper,
  StepperContainer,
  Step,
} from "./style";

export const Tutorial = ({ tutorial }: { tutorial: TutorialStepElement[] }) => {
  const [activeStep, setActiveStep] = useState(0);

  const goToStep = (stepIndex: number) => {
    setActiveStep(stepIndex);
  };

  const activeStepData = tutorial[activeStep];

  return (
    <TutorialContainer>
      <StepperContainer>
        <Stepper activeStep={activeStep} alternativeLabel>
          {tutorial.map(({ label }: TutorialStepElement, stepIndex: number) => (
            <Step key={`${label}-${stepIndex}`}>
              <StepLabel onClick={() => goToStep(stepIndex)}>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </StepperContainer>
      <TutorialStep>
        {activeStepData.content.map(({ image, text }, index) => (
          <StepContent key={`activeStepData-${index}`}>
            <Image src={image}></Image>
            <>{text}</>
          </StepContent>
        ))}
      </TutorialStep>
    </TutorialContainer>
  );
};
