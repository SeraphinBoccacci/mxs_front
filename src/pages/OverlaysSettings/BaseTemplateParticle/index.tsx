import React from "react";
//@ts-ignore
import { withBreakpoints } from "react-breakpoints";

import { useAuth } from "../../../components/AuthContext";
import CodeSnippets from "../../../components/CodeSnippets";
import EventTriggerer from "../../../components/EventTriggerer";
import { Tutorial } from "../../../components/Tutorial";
import { streamElementsBase } from "../../../constants/tutorials";
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
