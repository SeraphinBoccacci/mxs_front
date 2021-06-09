import React from "react";
//@ts-ignore
import { withBreakpoints } from "react-breakpoints";

import LabLayout from "../../components/LabLayout";
import ContextProvider from "./Context";
import MyOverlays from "./MyOverlays";
import OverlaysIntroduction from "./OverlaysIntroduction";
import { StreamElementsParticleContainer } from "./style";

const StreamElementsParticle = () => {
  return (
    <ContextProvider>
      <LabLayout>
        <StreamElementsParticleContainer>
          <OverlaysIntroduction></OverlaysIntroduction>

          <MyOverlays></MyOverlays>

          {/* <Tutorial
        videoTutorialLink="https://www.youtube.com/watch?v=yMB6Nn3w8Ls&t=290s"
        tutorial={overlaysCustom}
      ></Tutorial> */}

          {/* <Tutorial
        videoTutorialLink="https://www.youtube.com/watch?v=yMB6Nn3w8Ls&t=179s"
        tutorial={overlaysBase}
      ></Tutorial> */}
        </StreamElementsParticleContainer>
      </LabLayout>
    </ContextProvider>
  );
};

export default withBreakpoints(StreamElementsParticle);
