import StepLabel from "@material-ui/core/StepLabel";
import { useCallback, useMemo, useState } from "react";
import React from "react";
import { useParams } from "react-router";

import LabLayout from "../../components/LabLayout";
import VideoPlayer from "../../components/VideoPlayer";
import {
  iftttTutorial,
  overlaysBase,
  overlaysCustom,
  TutorialStepElement,
} from "../../constants/tutorials";
import {
  Image,
  Step,
  StepContent,
  Stepper,
  StepperContainer,
  TutorialStep,
  VideoPlayerContainer,
  VideoTitle,
} from "./style";

export enum TutorialIds {
  ifttt = "ifttt",
  overlaysBaseTemplate = "streamElementsBaseTemplate",
  overlaysCustomCustomTemplate = "streamElementsCustomTemplate",
}

interface TutorialContent {
  textContent?: TutorialStepElement[];
  videoContent?: string;
  videoTitle?: string;
}

type tutorials = { [key: string]: TutorialContent };

const tutorials = {
  [TutorialIds.ifttt]: {
    textContent: iftttTutorial,
    videoTitle: "Ifttt Setup",
    videoContent: "https://www.youtube.com/watch?v=yMB6Nn3w8Ls&t=96s",
  },
  [TutorialIds.overlaysBaseTemplate]: {
    textContent: overlaysBase,
    videoTitle: "Base Animation Setup",
    videoContent: "https://www.youtube.com/watch?v=yMB6Nn3w8Ls&t=179s",
  },
  [TutorialIds.overlaysCustomCustomTemplate]: {
    textContent: overlaysCustom,
    videoTitle: "Custom Animation Setup",
    videoContent: "https://www.youtube.com/watch?v=yMB6Nn3w8Ls&t=290s",
  },
};

const Tutorial = () => {
  const { tutorialId }: { tutorialId: TutorialIds } = useParams();
  const [activeStep, setActiveStep] = useState(0);

  const { videoContent, textContent, videoTitle } = tutorials[tutorialId];
  const activeStepData = textContent[activeStep];

  const goToStep = useCallback(
    (stepIndex: number) => {
      setActiveStep(stepIndex);
    },
    [setActiveStep]
  );

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
    <LabLayout>
      {videoContent && (
        <VideoPlayerContainer>
          {videoTitle && <VideoTitle>{videoTitle}</VideoTitle>}
          <VideoPlayer url={videoContent}></VideoPlayer>
        </VideoPlayerContainer>
      )}
      {textContent && (
        <>
          <StepperContainer>
            <Stepper activeStep={activeStep} alternativeLabel>
              {textContent.map(
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
    </LabLayout>
  );
};

export default Tutorial;
