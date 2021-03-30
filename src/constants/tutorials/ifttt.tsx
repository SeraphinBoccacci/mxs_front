/* eslint-disable react/no-unescaped-entities */
import React from "react";

import { Emphasize, Text } from "../../styles/global";
import { TutorialStepElement } from ".";

export const iftttTutorial: TutorialStepElement[] = [
  {
    label: "Create applet",
    content: [
      {
        image: "/ifttt/integration/step_1.png",
        text: (
          <Text>
            Create an account or login to IFTTT. <br></br>
            On your home page, you&rsquo;ll find a <Emphasize>
              Create
            </Emphasize>{" "}
            button in the top right corner, click it to create an{" "}
            <Emphasize>Applet</Emphasize>.
          </Text>
        ),
      },
    ],
  },
  {
    label: "Setup your Applet's listener",
    content: [
      {
        image: "/ifttt/integration/step_2.png",
        text: (
          <Text>
            Click <Emphasize>If This</Emphasize> button.
          </Text>
        ),
      },
      {
        image: "/ifttt/integration/step_2_bis.png",
        text: (
          <Text>
            Search or select the <Emphasize>WebHooks</Emphasize> service.
          </Text>
        ),
      },
      {
        image: "/ifttt/integration/step_2_ter.png",
        text: (
          <Text>
            Then click the only available option,{" "}
            <Emphasize>Receive a web request</Emphasize>.<br></br>You&rsquo;ll
            be prompted to fill an <Emphasize>EventName</Emphasize>, choose
            yours and fill it in StreamParticles Lab, just below this tutorial.
          </Text>
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
          <Text>
            Then go back to the <Emphasize>Applet</Emphasize> homepage and click
            on the button <Emphasize>Then That</Emphasize>.
          </Text>
        ),
      },
      {
        image: "/ifttt/integration/step_3_bis.png",
        text: (
          <Text>
            You can choose every service proposed by IFTTT. There more than 600
            services available! Pick one and click{" "}
            <Emphasize>Validate</Emphasize>.
          </Text>
        ),
      },
      {
        image: "/ifttt/integration/step_3_ter.png",
        text: (
          <Text>
            Finally, on this screen, click the <Emphasize>Finish</Emphasize>{" "}
            button.
          </Text>
        ),
      },
    ],
  },
  {
    label: "Set configuration in StreamParticles",
    content: [
      {
        image: "/ifttt/integration/step_4.png",
        text: (
          <Text>
            Now you need to find out your <Emphasize>TriggerKey</Emphasize> to
            complete your IFTTT particle.<br></br>
            Go to your <Emphasize>Applet</Emphasize> Homepage and click the{" "}
            <Emphasize>WebHooks</Emphasize> logo (at the top of your Applet
            description).
          </Text>
        ),
      },
      {
        image: "/ifttt/integration/step_4_bis.png",
        text: (
          <Text>
            On the <Emphasize>WebHooks</Emphasize> page, click{" "}
            <Emphasize>Documentation</Emphasize> in the top right corner.
          </Text>
        ),
      },
      {
        image: "/ifttt/integration/step_4_ter.png",
        text: (
          <Text>
            Finally, copy the key shown at the top of the page and paste it in
            the <Emphasize>TriggerKey</Emphasize> field, just below this
            tutorial.
          </Text>
        ),
      },
    ],
  },
  {
    label: "Activate your particle",
    content: [
      {
        text: (
          <div>
            Just below this tutorial, you can choose wether or not to activate
            your IFTTT Particle, to make it with your others particles once you
            are streaming
          </div>
        ),
      },
    ],
  },
];
