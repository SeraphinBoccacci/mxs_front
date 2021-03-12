import { useContext } from "react";
import React from "react";
//@ts-ignore
import { withBreakpoints } from "react-breakpoints";

import { streamElementsTutorial } from "../../../constants/tutorials/streamElements";
import { useQueryString } from "../../../hooks/useQueryString";
import { ContentContainer } from "../../../styles/global";
import { AuthContext } from "../../AuthContext";
import CodeSnippets from "../../CodeSnippets";
import EventTriggerer from "../../EventTriggerer";
import Switch from "../../Switch";
import { Tutorial } from "../../Tutorial";
import { Paragraph } from "../style";
import { cssSnippet, htmlSnippet, jsSnippet } from "./codeSnippets/template";
import { StreamElementsIntegrationContainer } from "./style";
import VariationCreation from "./VariationCreation";

type breakpoints = { [key: string]: number };

interface StreamElementsIntegrationProps {
  breakpoints: breakpoints;
  currentBreakpoint: string;
}

const StreamElementsIntegration = ({
  breakpoints,
  currentBreakpoint,
}: StreamElementsIntegrationProps) => {
  const [isOnCustomTemplate, setIsOnCustomTemplate] = useQueryString(
    "isOnCustom"
  );
  const { user } = useContext(AuthContext);

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
        <div>
          <EventTriggerer triggeredEvent="streamElements"></EventTriggerer>
          <VariationCreation></VariationCreation>
        </div>
      ) : (
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
      )}
    </StreamElementsIntegrationContainer>
  );
};

export default withBreakpoints(StreamElementsIntegration);
