import { Button } from "@material-ui/core";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import React, { useMemo, useState } from "react";
import { atomOneDarkReasonable } from "react-syntax-highlighter/dist/esm/styles/hljs";

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
  const [lang, setLang] = useState<"javascript" | "htmlbars" | "css">(
    "javascript"
  );

  const codeString = useMemo(
    () => ({
      javascript: jsSnippet || "",
      htmlbars: htmlSnippet || "",
      css: cssSnippet || "",
    }),
    [jsSnippet, htmlSnippet, cssSnippet]
  );

  return (
    <CodeSnippetsContainer>
      <CodeSnippetsButtons>
        {!!jsSnippet && (
          <Button
            onClick={() => setLang("javascript")}
            variant={lang === "javascript" ? "contained" : "outlined"}
            color="secondary"
          >
            Javascript
          </Button>
        )}
        {!!htmlSnippet && (
          <Button
            onClick={() => setLang("htmlbars")}
            variant={lang === "htmlbars" ? "contained" : "outlined"}
            color="secondary"
          >
            Html
          </Button>
        )}
        {!!cssSnippet && (
          <Button
            onClick={() => setLang("css")}
            variant={lang === "css" ? "contained" : "outlined"}
            color="secondary"
          >
            Css
          </Button>
        )}
        <Button onClick={() => navigator.clipboard.writeText(codeString[lang])}>
          <FileCopyIcon></FileCopyIcon>
        </Button>
      </CodeSnippetsButtons>
      <CodeSnippet
        language={lang}
        style={atomOneDarkReasonable}
        showLineNumbers
      >
        {codeString[lang]}
      </CodeSnippet>
    </CodeSnippetsContainer>
  );
};

export default CodeSnippets;
