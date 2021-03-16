import React from "react";
//@ts-ignore
import { withBreakpoints } from "react-breakpoints";

import { streamElementsTutorial } from "../../../../constants/tutorials/streamElements";
import { useAuth } from "../../../AuthContext";
import CodeSnippets from "../../../CodeSnippets";
import EventTriggerer from "../../../EventTriggerer";
import { Tutorial } from "../../../Tutorial";
import { cssSnippet, htmlSnippet, jsSnippet } from "../codeSnippets/template";

type Breakpoints = { [key: string]: number };

interface BaseTemplateIntegrationProps {
  breakpoints: Breakpoints;
  currentBreakpoint: string;
}

const BaseTemplateIntegration = ({
  breakpoints,
  currentBreakpoint,
}: BaseTemplateIntegrationProps) => {
  const { user } = useAuth();

  return (
    <div>
      <Tutorial tutorial={streamElementsTutorial}></Tutorial>
      {breakpoints[currentBreakpoint] > breakpoints.tabletLandscape ? (
        <div>
          <EventTriggerer triggeredEvent="streamElements"></EventTriggerer>
          <CodeSnippets
            jsSnippet={jsSnippet(user?.herotag || "{{your-herotag}}")}
            htmlSnippet={htmlSnippet}
            cssSnippet={cssSnippet}
          ></CodeSnippets>
        </div>
      ) : (
        <EventTriggerer triggeredEvent="streamElements"></EventTriggerer>
      )}
    </div>
  );
};

export default withBreakpoints(BaseTemplateIntegration);
