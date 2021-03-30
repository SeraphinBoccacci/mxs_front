import React, { useCallback, useContext, useEffect, useState } from "react";
//@ts-ignore
import { withBreakpoints } from "react-breakpoints";

import { useQueryString } from "../../../hooks/useQueryString";
import { toggleStreamElementsParticle } from "../../../services/streamElements";
import { ContentContainer, Emphasize } from "../../../styles/global";
import { AuthContext } from "../../AuthContext";
import Switch from "../../Switch";
import ActivationSwitch from "../ActivationSwitch";
import { Paragraph } from "../style";
import BaseTemplateParticle from "./BaseTemplateParticle";
import CustomTemplateParticle from "./CustomTemplateParticle";
import { StreamElementsParticleContainer } from "./style";

const StreamElementsParticle = () => {
  const { user } = useContext(AuthContext);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [isOnCustomTemplate, setIsOnCustomTemplate] = useQueryString(
    "isOnCustom"
  );

  const [isParticleActive, setIsParticleActive] = useState(
    user?.integrations?.ifttt?.isActive || false
  );

  useEffect(() => {
    setIsParticleActive(user?.integrations?.streamElements?.isActive || false);
  }, [setIsParticleActive, user]);

  const handleSwitchChange = useCallback(async () => {
    setIsSubmitting(true);

    if (user && user.herotag) {
      await toggleStreamElementsParticle(user.herotag, !isParticleActive);
      setIsParticleActive((prev) => !prev);

      setIsSubmitting(false);
    }
  }, [setIsSubmitting, setIsParticleActive, isParticleActive, user]);

  return (
    <StreamElementsParticleContainer>
      <ContentContainer elevation={3} variant="elevation">
        <Paragraph>
          <Emphasize>
            <a target="about:blank" href="https://streamelements.com/">
              Stream Elements
            </a>
          </Emphasize>
          is an all-in-one platform that helps creators along all their content
          management.
        </Paragraph>
        <Paragraph>
          For instance, it lets you create customized overlays to react to
          viewers&rsquo; support. That&rsquo;s what we&rsquo;ll be working on in
          this particle.
        </Paragraph>
        <Paragraph>
          You can either choose a base template which is the basic
          StreamParticles animation and sound or go with your own GIFs and
          sounds that will be triggered depending on the variations you set.
        </Paragraph>
      </ContentContainer>

      <ActivationSwitch
        label="Activate Particle"
        isSubmitting={isSubmitting}
        isActive={isParticleActive}
        onChange={handleSwitchChange}
      ></ActivationSwitch>

      <Switch
        variant="inverted"
        isActive={isOnCustomTemplate}
        setIsActive={setIsOnCustomTemplate}
        offLabel="Base template"
        onLabel="Custom template"
      ></Switch>
      {isOnCustomTemplate ? (
        <CustomTemplateParticle></CustomTemplateParticle>
      ) : (
        <BaseTemplateParticle></BaseTemplateParticle>
      )}
    </StreamElementsParticleContainer>
  );
};

export default withBreakpoints(StreamElementsParticle);
