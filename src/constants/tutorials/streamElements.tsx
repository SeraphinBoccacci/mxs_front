import React from "react";

import { Emphasize, Text } from "../../styles/global";
import { TutorialStepElement } from ".";

export const streamElementsTutorial: TutorialStepElement[] = [
  {
    label: "Start custom widget creation",
    content: [
      {
        image: "/streamElements/integration/step_1.png",
        text: (
          <Text>
            On your StreamElements dashboard page, click{" "}
            <Emphasize>My Overlays</Emphasize>.
          </Text>
        ),
      },
      {
        image: "/streamElements/integration/step_1_bis.png",
        text: (
          <Text>
            Then, click <Emphasize>Create New Overlays.</Emphasize>
          </Text>
        ),
      },
      {
        image: "/streamElements/integration/step_1_ter.png",
        text: (
          <Text>
            Begin your <Emphasize>Custom Widget</Emphasize> creation by setting
            up your desired overlay resolution.
          </Text>
        ),
      },
      {
        image: "/streamElements/integration/step_1_quad.png",
        text: (
          <Text>
            Once on your workbench, click <Emphasize>Add Widget</Emphasize>,
            then go to <Emphasize>Static / Custom</Emphasize> {">"}{" "}
            <Emphasize>Custom Widget</Emphasize>
          </Text>
        ),
      },
    ],
  },
  {
    label: "Remove placeholders",
    content: [
      {
        image: "/streamElements/integration/step_2.png",
        text: (
          <Text>
            Click <Emphasize>Open Editor.</Emphasize>
          </Text>
        ),
      },
      {
        image: "/streamElements/integration/step_2_bis.png",
        text: (
          <Text>
            Then, remove placeholder data on <Emphasize>Field</Emphasize> Tab.
          </Text>
        ),
      },
      {
        image: "/streamElements/integration/step_2_ter.png",
        text: (
          <Text>
            Do the same on <Emphasize>Data</Emphasize> Tab.
          </Text>
        ),
      },
    ],
  },
  {
    label: "Copy and paste base template code",
    content: [
      {
        image: "/streamElements/integration/step_3.png",
        text: (
          <Text>
            Copy and paste the <Emphasize>code</Emphasize> below this tutorial
            on the three others Tabs (other screens just below). Make sure to
            fill the sockets configuration with your own{" "}
            <Emphasize>herotag</Emphasize>.
          </Text>
        ),
      },
      {
        image: "/streamElements/integration/step_3_bis.png",
        text: <Text></Text>,
      },
      {
        image: "/streamElements/integration/step_3_ter.png",
        text: <Text></Text>,
      },
    ],
  },
  {
    label: "Save project and test preview",
    content: [
      {
        image: "/streamElements/integration/step_4.png",
        text: (
          <Text>
            Finally, <Emphasize>save</Emphasize> the project (button in the top
            right corner).
          </Text>
        ),
      },
      {
        image: "/streamElements/integration/step_4_bis.png",
        text: <Text>Choose a name for it</Text>,
      },
      {
        image: "/streamElements/integration/step_4_ter.png",
        text: (
          <Text>
            Then, click the <Emphasize>Preview</Emphasize> button (in the top
            right corner), and click <Emphasize>Open in new tab</Emphasize> in
            the modal that just openned. <Emphasize>Test</Emphasize> your custom
            widget with the <Emphasize>trigger</Emphasize> button on
            StreamParticles, or ask a friend to send you some EGLD via Maiar .
          </Text>
        ),
      },
    ],
  },
];
