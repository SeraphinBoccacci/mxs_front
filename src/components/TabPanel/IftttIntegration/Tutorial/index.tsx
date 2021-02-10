import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import { ReactNode, useState } from "react";
import {
  TutorialStep,
  TutorialContainer,
  Image,
  StepContent,
  Text,
  Stepper,
} from "./style";

interface TutorialStepElement {
  label: string;
  content: {
    image?: string;
    text: ReactNode;
  }[];
}

const tutorialSteps: TutorialStepElement[] = [
  {
    label: "Create applet",
    content: [
      {
        image: "/ifttt/integration/step_1.png",
        text: (
          <div>
            Create an account or login to IFTTT. <br></br>
            On your home page, you'll find a /Create/ button in the top right
            corner, click on it to create an /Applet/.
          </div>
        ),
      },
    ],
  },
  {
    label: "Setup your Applet's listenner",
    content: [
      {
        image: "/ifttt/integration/step_2.png",
        text: <div>Click on /If This/ button.</div>,
      },
      {
        image: "/ifttt/integration/step_2_bis.png",
        text: <div>Search or select the /WebHooks/ service.</div>,
      },
      {
        image: "/ifttt/integration/step_2_ter.png",
        text: (
          <div>
            Then click on the only available option, /Receive a web request/.
            <br></br>You'll be prompted to fill an EventName, choose yours and
            fill it in Stream Particles console, just below this tutorial.
          </div>
        ),
      },
    ],
  },
  {
    label: "Create your custom triggered event",
    content: [
      {
        image: "/ifttt/integration/step_3.png",
        text: (
          <div>
            Then go back to the /Applet/ homepage and click on the button /Then
            That/.
          </div>
        ),
      },
      {
        image: "/ifttt/integration/step_3_bis.png",
        text: (
          <div>
            You can choose every services of IFTTT. There more than 600 services
            available ! Pick one and click on /Validate/.
          </div>
        ),
      },
      {
        image: "/ifttt/integration/step_3_ter.png",
        text: <div>Finally, on this screen, click on the /Finish/ button.</div>,
      },
    ],
  },
  {
    label: "Set configuration in StreamParticles",
    content: [
      {
        image: "/ifttt/integration/step_4.png",
        text: (
          <div>
            Now you need to find out your triggerKey to complete your IFTTT
            integration.<br></br>
            Go to your /Applet/ Homepage and click on the /WebHooks/ logo (at
            the top of your Applet description).
          </div>
        ),
      },
      {
        image: "/ifttt/integration/step_4_bis.png",
        text: (
          <div>
            On the /WebHooks/ page, click on /Documentation/ in the top right
            corner.
          </div>
        ),
      },
      {
        image: "/ifttt/integration/step_4_ter.png",
        text: (
          <div>
            Finally, copy the key shown at the top of the page and paste it in
            the triggerKey field, just below this tutorial.
          </div>
        ),
      },
    ],
  },
  {
    label: "Activate your integration",
    content: [
      {
        text: (
          <div>
            Just below this tutorial, you can choose wether or not to activate
            your IFTTT Integration, to make it with your others integration once
            you are streaming
          </div>
        ),
      },
    ],
  },
];

export const Tutorial = () => {
  const [activeStep, setActiveStep] = useState(0);

  const goToStep = (stepIndex: number) => {
    setActiveStep(stepIndex);
  };

  const activeStepData = tutorialSteps[activeStep];

  return (
    <TutorialContainer>
      <Stepper activeStep={activeStep} alternativeLabel>
        {tutorialSteps.map(
          ({ label }: TutorialStepElement, stepIndex: number) => (
            <Step key={`${label}-${stepIndex}`}>
              <StepLabel onClick={() => goToStep(stepIndex)}>{label}</StepLabel>
            </Step>
          )
        )}
      </Stepper>
      <TutorialStep>
        {activeStepData.content.map(({ image, text }, index) => (
          <StepContent key={`activeStepData-${index}`}>
            <Image src={image}></Image>
            <Text>{text}</Text>
          </StepContent>
        ))}
      </TutorialStep>
    </TutorialContainer>
  );
};
