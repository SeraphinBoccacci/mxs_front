import React from "react";
//@ts-ignore
import { withBreakpoints } from "react-breakpoints";

import { streamElementsBase } from "../../../../constants/tutorials";
import { useAuth } from "../../../AuthContext";
import CodeSnippets from "../../../CodeSnippets";
import EventTriggerer from "../../../EventTriggerer";
import { Tutorial } from "../../../Tutorial";
import { cssSnippet, htmlSnippet, jsSnippet } from "../codeSnippets/template";
import { StreamElementsParticleContainer } from "../style";

type Breakpoints = { [key: string]: number };

interface BaseTemplateParticleProps {
  breakpoints: Breakpoints;
  currentBreakpoint: string;
}

const BaseTemplateParticle = ({
  breakpoints,
  currentBreakpoint,
}: BaseTemplateParticleProps) => {
  const { user } = useAuth();

  return (
    <StreamElementsParticleContainer>
      <Tutorial
        videoTutorialLink="https://www.youtube.com/watch?v=yMB6Nn3w8Ls&t=179s"
        tutorial={streamElementsBase}
      ></Tutorial>
      <EventTriggerer></EventTriggerer>
      {breakpoints[currentBreakpoint] > breakpoints.tabletLandscape && (
        <CodeSnippets
          jsSnippet={jsSnippet(user?.herotag || "{{your-herotag}}")}
          htmlSnippet={htmlSnippet}
          cssSnippet={cssSnippet}
        ></CodeSnippets>
      )}
    </StreamElementsParticleContainer>
  );
};

export default withBreakpoints(BaseTemplateParticle);
