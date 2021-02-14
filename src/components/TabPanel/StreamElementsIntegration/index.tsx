import { useState } from "react";
import Switch from "../../Switch";
import { ContentContainer, Paragraph } from "../style";
import {
  CodeSnippets,
  CodeSnippetsButtons,
  StreamElementsIntegrationContainer,
  CodeSnippet,
} from "./style";

import { dark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { Button } from "@material-ui/core";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import { NotDevelopped } from "../NotDevelopped";
import {
  jsSnippet,
  htmlSnippet,
  cssSnippet,
} from "../../../assets/codeSnippets/streamElements";
import { Tutorial } from "../../Tutorial";
import { streamElementsTutorial } from "../../../constants/tutorials/streamElements";

const StreamElementsIntegration = () => {
  const [isOnCustomTemplate, setIsOnCustomTemplate] = useState(false);
  const [lang, setLang] = useState<"javascript" | "html" | "css">("javascript");

  const codeString = {
    javascript: jsSnippet,
    html: htmlSnippet,
    css: cssSnippet,
  };

  return (
    <StreamElementsIntegrationContainer>
      <ContentContainer elevation={3} variant="elevation">
        <Paragraph>
          Stream Elements is an all-in-one platform that helps creator along all
          their content management. For instance, it lets them create customized
          overlays to react to viewers' support. That's what we'll be working on
          in this particle.
        </Paragraph>
      </ContentContainer>
      <Switch
        isActive={isOnCustomTemplate}
        setIsActive={setIsOnCustomTemplate}
        offLabel="Base template"
        onLabel="Custom template"
      ></Switch>
      {isOnCustomTemplate ? (
        <NotDevelopped></NotDevelopped>
      ) : (
        <>
          <Tutorial tutorial={streamElementsTutorial}></Tutorial>
          <CodeSnippets>
            <CodeSnippetsButtons>
              <Button
                onClick={() => setLang("javascript")}
                variant="outlined"
                color="secondary"
              >
                Javascript
              </Button>
              <Button onClick={() => setLang("html")} color="secondary">
                Html
              </Button>
              <Button
                onClick={() => setLang("css")}
                variant="contained"
                color="secondary"
              >
                Css
              </Button>
              <Button
                onClick={() => navigator.clipboard.writeText(codeString[lang])}
              >
                <FileCopyIcon></FileCopyIcon>
              </Button>
            </CodeSnippetsButtons>
            <CodeSnippet language="javascript" style={dark}>
              {codeString[lang]}
            </CodeSnippet>
          </CodeSnippets>
        </>
      )}
    </StreamElementsIntegrationContainer>
  );
};

export default StreamElementsIntegration;
