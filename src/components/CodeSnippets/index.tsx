import { Button } from "@material-ui/core";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import React, { useState } from "react";
import { dark } from "react-syntax-highlighter/dist/esm/styles/hljs";

import {
  CodeSnippet,
  CodeSnippetsButtons,
  CodeSnippetsContainer,
} from "./style";

interface CodeSnippetsProps {
  jsSnippet?: string;
  htmlSnippet?: string;
  cssSnippet?: string;
}

const CodeSnippets = ({
  jsSnippet,
  htmlSnippet,
  cssSnippet,
}: CodeSnippetsProps) => {
  const [lang, setLang] = useState<"javascript" | "html" | "css">("javascript");

  const codeString = {
    javascript: jsSnippet || "",
    html: htmlSnippet || "",
    css: cssSnippet || "",
  };

  return (
    <CodeSnippetsContainer>
      <CodeSnippetsButtons>
        {!!jsSnippet ? (
          <Button
            onClick={() => setLang("javascript")}
            variant="outlined"
            color="secondary"
          >
            Javascript
          </Button>
        ) : null}
        {!!htmlSnippet ? (
          <Button onClick={() => setLang("html")} color="secondary">
            Html
          </Button>
        ) : null}{" "}
        {!!cssSnippet ? (
          <Button
            onClick={() => setLang("css")}
            variant="contained"
            color="secondary"
          >
            Css
          </Button>
        ) : null}
        <Button onClick={() => navigator.clipboard.writeText(codeString[lang])}>
          <FileCopyIcon></FileCopyIcon>
        </Button>
      </CodeSnippetsButtons>
      <CodeSnippet language={lang} style={dark}>
        {codeString[lang]}
      </CodeSnippet>
    </CodeSnippetsContainer>
  );
};

export default CodeSnippets;
