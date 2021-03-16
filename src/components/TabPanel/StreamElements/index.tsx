import React from "react";
//@ts-ignore
import { withBreakpoints } from "react-breakpoints";

import { useQueryString } from "../../../hooks/useQueryString";
import { ContentContainer } from "../../../styles/global";
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
          Stream Elements is an all-in-one platform that helps creator along all
          their content management. For instance, it lets them create customized
          overlays to react to viewers&rsquo; support. That&rsquo;s what
          we&rsquo;ll be working on in this particle.
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
