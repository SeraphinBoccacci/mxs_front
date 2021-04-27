import { ReactNode } from "react";

import { iftttTutorial } from "./ifttt";
import { overlaysBase } from "./overlaysBase";
import { overlaysCustom } from "./overlaysCustom";

export interface TutorialStepElement {
  label: string;
  content: {
    image?: string;
    text: ReactNode;
  }[];
}

export { iftttTutorial, overlaysBase, overlaysCustom };
