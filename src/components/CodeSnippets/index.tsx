import { Button } from "@material-ui/core";
import React, { useMemo, useState } from "react";
import { atomOneDarkReasonable } from "react-syntax-highlighter/dist/esm/styles/hljs";

import CopyPasteButton from "../CopyPasteButton";
import {
  CodeSnippet,
  CodeSnippetsButtons,
  CodeSnippetsContainer,
} from "./style";

interface CodeSnippetsProps {
  htmlSnippet?: string;
  cssSnippet?: string;
  jsSnippet?: string;
}

const CodeSnippets = ({
  htmlSnippet,
  cssSnippet,
  jsSnippet,
}: CodeSnippetsProps) => {
  const [lang, setLang] = useState<"htmlbars" | "css" | "javascript">(
    "htmlbars"
  );

  const codeString = useMemo(
    () => ({
      htmlbars: htmlSnippet || "",
      css: cssSnippet || "",
      javascript: jsSnippet || "",
    }),
    [htmlSnippet, cssSnippet, jsSnippet]
  );

  return (
    <CodeSnippetsContainer>
      <CodeSnippetsButtons>
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
        {!!jsSnippet && (
          <Button
            onClick={() => setLang("javascript")}
            variant={lang === "javascript" ? "contained" : "outlined"}
            color="secondary"
          >
            Javascript
          </Button>
        )}
        <CopyPasteButton dataToCopy={codeString[lang]}></CopyPasteButton>
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
