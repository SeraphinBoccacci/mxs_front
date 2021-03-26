import { Button } from "@material-ui/core";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import React, { useCallback, useMemo, useState } from "react";
import { atomOneDarkReasonable } from "react-syntax-highlighter/dist/esm/styles/hljs";

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
  const [hasJustCopied, setHasJustCopied] = useState(false);
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

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(codeString[lang]);
    setHasJustCopied(true);
    setTimeout(() => {
      setHasJustCopied(false);
    }, 1300);
  }, [setHasJustCopied, codeString, lang]);

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
        <Button onClick={handleCopy}>
          {hasJustCopied ? "Copied" : <FileCopyIcon></FileCopyIcon>}
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
