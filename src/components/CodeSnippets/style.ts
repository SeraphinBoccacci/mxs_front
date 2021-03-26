import { Paper } from "@material-ui/core";
import SyntaxHighlighter from "react-syntax-highlighter";
import styled from "styled-components";

export const CodeSnippetsContainer = styled(Paper)`
  display: flex;
  flex-direction: column;

  width: 50rem;
  height: 80vh;

  overflow-y: scroll;

  margin: 3rem auto;
  padding: 1rem;
`;

export const CodeSnippetsButtons = styled.div`
  display: flex;
  flex-direction: row;

  justify-content: space-evenly;
`;

export const CodeSnippet = styled(SyntaxHighlighter)`
  width: 45rem;
  margin: 1rem auto;
  padding: 1rem !important;
`;
