import { ReactNode } from "react";

import { iftttTutorial } from "./ifttt";

export interface TutorialStepElement {
  label: string;
  content: {
    image?: string;
    text: ReactNode;
  }[];
}

export { iftttTutorial };
