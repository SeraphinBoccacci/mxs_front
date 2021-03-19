import Alert from "@material-ui/lab/Alert";
import React from "react";

import { Emphasize, Text } from "../../styles/global";
import { TutorialStepElement } from ".";

export const streamElementsCustom: TutorialStepElement[] = [
  {
    label: "Begin custom widget creation",
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
    label: "Create your fully customized variations set",
    content: [
      {
        image: "/streamElements/integration/custom_step_3.png",
        text: (
          <Text>
            Scroll to the Variations Editor. Click{" "}
            <Emphasize>Add Variation</Emphasize> then click the{" "}
            <Emphasize>Edit</Emphasize> button on the created variation.
          </Text>
        ),
      },
      {
        image: "/streamElements/integration/custom_step_3_bis.png",
        text: (
          <Text>
            On the opened edition modal, you can upload a{" "}
            <Emphasize>sound</Emphasize>, an <Emphasize>image</Emphasize> and
            type the text you want to display. Many parameters let you{" "}
            <Emphasize>customize</Emphasize>
            your variations.
            <br></br>
            Once you are done, click the <Emphasize>Save</Emphasize> button, at
            the top right corner.
          </Text>
        ),
      },
      {
        image: "/streamElements/integration/custom_step_3_ter.png",
        text: (
          <Text>
            You can <Emphasize>preview</Emphasize> your variations right after
            the edition, directly on
            <Emphasize>StreamParticles</Emphasize>.
          </Text>
        ),
      },
    ],
  },
  {
    label: "Copy and paste your custom template code",
    content: [
      {
        image: "/streamElements/integration/custom_step_4.png",
        text: (
          <Text>
            The <Emphasize>code snippets</Emphasize> below this tutorial are
            updated <Emphasize>each time</Emphasize> you edit, add or remove a
            variation. Copy and paste them in the JS / HTML / CSS tabs (other
            screens just below) on
            <Emphasize>StreamElements</Emphasize>
            <br></br>
            <br></br>
            <Alert>
              To remember : you can preview your variations directly on
              StreamParticles!
            </Alert>
          </Text>
        ),
      },
      {
        image: "/streamElements/integration/custom_step_4_bis.png",
        text: <Text></Text>,
      },
      {
        image: "/streamElements/integration/custom_step_4_ter.png",
        text: <Text></Text>,
      },
    ],
  },
  {
    label: "Save project and test your overlay",
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
