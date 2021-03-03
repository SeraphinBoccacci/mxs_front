import { Button } from "@material-ui/core";
import { useCallback, useContext } from "react";
import React from "react";

import { streamElementsTutorial } from "../../../constants/tutorials/streamElements";
import { useQueryString } from "../../../hooks/useQueryString";
import { triggerStreamElementsEvent } from "../../../services/user";
import { AuthContext } from "../../AuthContext";
import CodeSnippets from "../../CodeSnippets";
import { ErrorHandlingContext } from "../../ErrorHandlingContext";
import Switch from "../../Switch";
import { Tutorial } from "../../Tutorial";
import { ContentContainer, Paragraph } from "../style";
import { cssSnippet, htmlSnippet, jsSnippet } from "./codeSnippets/template";
import { StreamElementsIntegrationContainer } from "./style";
import VariationCreation from "./VariationCreation";

const StreamElementsIntegration = () => {
  const [isOnCustomTemplate, setIsOnCustomTemplate] = useQueryString(
    "isOnCustom"
  );
  const { user } = useContext(AuthContext);
  const { handleError } = useContext(ErrorHandlingContext);

  const triggerEvent = useCallback(() => {
    try {
      if (user?.herotag) triggerStreamElementsEvent(user?.herotag);
    } catch (error) {
      handleError(error?.response?.data?.data);
    }
  }, [user?.herotag, handleError]);

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
        <VariationCreation></VariationCreation>
      ) : (
        <>
          <Tutorial tutorial={streamElementsTutorial}></Tutorial>
          <CodeSnippets
            jsSnippet={jsSnippet(user?.herotag || "{{your-herotag}}")}
            htmlSnippet={htmlSnippet}
            cssSnippet={cssSnippet}
          ></CodeSnippets>
        </>
      )}
      <ContentContainer>
        <Button variant="contained" onClick={triggerEvent}>
          Trigger StreamElements event
        </Button>
      </ContentContainer>
    </StreamElementsIntegrationContainer>
  );
};

export default StreamElementsIntegration;
