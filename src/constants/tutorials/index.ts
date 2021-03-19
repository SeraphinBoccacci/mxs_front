import { ReactNode } from "react";

import { iftttTutorial } from "./ifttt";
import { streamElementsBase } from "./streamElementsBase";
import { streamElementsCustom } from "./streamElementsCustom";

export interface TutorialStepElement {
  label: string;
  content: {
    image?: string;
    text: ReactNode;
  }[];
}

export { iftttTutorial, streamElementsBase, streamElementsCustom };
