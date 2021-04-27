import React, { useCallback, useContext, useEffect, useState } from "react";
//@ts-ignore
import { withBreakpoints } from "react-breakpoints";

import ActivationSwitch from "../../components/ActivationSwitch";
import { AuthContext } from "../../components/AuthContext";
import LabLayout from "../../components/LabLayout";
import { toggleOverlaysParticle } from "../../services/overlays";
import ContextProvider from "./Context";
import MyOverlays from "./MyOverlays";
import OverlaysIntroduction from "./OverlaysIntroduction";
import { StreamElementsParticleContainer } from "./style";

const StreamElementsParticle = () => {
  const { user } = useContext(AuthContext);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [isParticleActive, setIsParticleActive] = useState(
    user?.integrations?.ifttt?.isActive || false
  );

  useEffect(() => {
    setIsParticleActive(user?.integrations?.streamElements?.isActive || false);
  }, [setIsParticleActive, user]);

  const handleSwitchChange = useCallback(async () => {
    setIsSubmitting(true);

    if (user && user.herotag) {
      await toggleOverlaysParticle(user.herotag, !isParticleActive);
      setIsParticleActive((prev) => !prev);

      setIsSubmitting(false);
    }
  }, [setIsSubmitting, setIsParticleActive, isParticleActive, user]);

  return (
    <ContextProvider>
      <LabLayout>
        <StreamElementsParticleContainer>
          <OverlaysIntroduction></OverlaysIntroduction>

          <ActivationSwitch
            label="Activate Particle"
            isSubmitting={isSubmitting}
            isActive={isParticleActive}
            onChange={handleSwitchChange}
          ></ActivationSwitch>

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
