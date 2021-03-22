import React from "react";
//@ts-ignore
import { withBreakpoints } from "react-breakpoints";

import { streamElementsBase } from "../../../../constants/tutorials";
import { useAuth } from "../../../AuthContext";
import CodeSnippets from "../../../CodeSnippets";
import EventTriggerer from "../../../EventTriggerer";
import { Tutorial } from "../../../Tutorial";
import { cssSnippet, htmlSnippet, jsSnippet } from "../codeSnippets/template";
import { StreamElementsIntegrationContainer } from "../style";

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
    <StreamElementsIntegrationContainer>
      <Tutorial tutorial={streamElementsBase}></Tutorial>
      <EventTriggerer></EventTriggerer>
      {breakpoints[currentBreakpoint] > breakpoints.tabletLandscape && (
        <CodeSnippets
          jsSnippet={jsSnippet(user?.herotag || "{{your-herotag}}")}
          htmlSnippet={htmlSnippet}
          cssSnippet={cssSnippet}
        ></CodeSnippets>
      )}
    </StreamElementsIntegrationContainer>
  );
};

export default withBreakpoints(BaseTemplateIntegration);
