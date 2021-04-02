import React from "react";
//@ts-ignore
import { withBreakpoints } from "react-breakpoints";

import { streamElementsCustom } from "../../../../constants/tutorials";
import EventTriggerer from "../../../EventTriggerer";
import { Tutorial } from "../../../Tutorial";
import { StreamElementsParticleContainer } from "../style";
import VariationCreation from "../VariationCreation";

type Breakpoints = { [key: string]: number };

interface BaseTemplateParticleProps {
  breakpoints: Breakpoints;
  currentBreakpoint: string;
}

const CustomTemplateParticle = ({
  breakpoints,
  currentBreakpoint,
}: BaseTemplateParticleProps) => {
  return (
    <StreamElementsParticleContainer>
      <Tutorial
        videoTutorialLink="https://www.youtube.com/watch?v=yMB6Nn3w8Ls&t=290s"
        tutorial={streamElementsCustom}
      ></Tutorial>
      <EventTriggerer></EventTriggerer>
      {breakpoints[currentBreakpoint] > breakpoints.tabletLandscape && (
        <VariationCreation></VariationCreation>
      )}
    </StreamElementsParticleContainer>
  );
};

export default withBreakpoints(CustomTemplateParticle);