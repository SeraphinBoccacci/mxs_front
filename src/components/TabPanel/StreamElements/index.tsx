import React from "react";
//@ts-ignore
import { withBreakpoints } from "react-breakpoints";

import { useQueryString } from "../../../hooks/useQueryString";
import { ContentContainer, Emphasize } from "../../../styles/global";
import Switch from "../../Switch";
import { Paragraph } from "../style";
import BaseTemplateIntegration from "./BaseTemplateIntegration";
import CustomTemplateIntegration from "./CustomTemplateIntegration";
import { StreamElementsIntegrationContainer } from "./style";

const StreamElementsIntegration = () => {
  const [isOnCustomTemplate, setIsOnCustomTemplate] = useQueryString(
    "isOnCustom"
  );

  return (
    <StreamElementsIntegrationContainer>
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

      <Switch
        variant="inverted"
        isActive={isOnCustomTemplate}
        setIsActive={setIsOnCustomTemplate}
        offLabel="Base template"
        onLabel="Custom template"
      ></Switch>
      {isOnCustomTemplate ? (
        <CustomTemplateIntegration></CustomTemplateIntegration>
      ) : (
        <BaseTemplateIntegration></BaseTemplateIntegration>
      )}
    </StreamElementsIntegrationContainer>
  );
};

export default withBreakpoints(StreamElementsIntegration);
