/* eslint-disable quotes */
import Alert from "@material-ui/lab/Alert";
import React, { useCallback, useContext, useEffect, useState } from "react";
//@ts-ignore
import { withBreakpoints } from "react-breakpoints";

import { getUserVariations } from "../../../../services/streamElements";
import { ContentContainer } from "../../../../styles/global";
import { AuthContext } from "../../../AuthContext";
import CodeSnippets from "../../../CodeSnippets";
import { ErrorHandlingContext } from "../../../ErrorHandlingContext";
import { Variation } from "../interface";
import { Content, IframeContainer } from "./style";
import { VariationModal } from "./VariationModal";
import { VariationsList } from "./VariationsList";

export interface VariationsFiles {
  html: string;
  css: string;
  javascript: string;
}

type breakpoints = { [key: string]: number };

interface VariationCreationProps {
  breakpoints: breakpoints;
  currentBreakpoint: string;
}

const VariationCreation = ({
  breakpoints,
  currentBreakpoint,
}: VariationCreationProps) => {
  const [variations, setVariations] = useState<Variation[]>([]);
  const [files, setFiles] = useState<VariationsFiles>();
  const [focusedVariationIndex, setFocusedVariationIndex] = useState<number>();
  const [htmlSrc, setHtmlSrc] = useState<string>();

  const { user, herotag } = useContext(AuthContext);
  const { handleError } = useContext(ErrorHandlingContext);

  useEffect(() => {
    if (herotag) {
      getUserVariations(herotag)
        .then(({ variations, files }) => {
          setVariations(variations || []);
          setFiles(files);
        })
        .catch((error) => {
          handleError(error?.message);
        });
    }
  }, [herotag, user, handleError]);

  const updateVariation = useCallback(
    (index: number) => (updatedVariation: Variation) => {
      const before = variations.slice(0, index);
      const after = variations.slice(index + 1, variations.length);

      setVariations([...before, updatedVariation, ...after]);
    },
    [setVariations, variations]
  );

  const handleFocusOnVariation = useCallback(
    (index: number) => {
      setFocusedVariationIndex(index);
    },
    [setFocusedVariationIndex]
  );

  const handleClose = useCallback(() => {
    setFocusedVariationIndex(undefined);
  }, [setFocusedVariationIndex]);

  if (breakpoints[currentBreakpoint] < breakpoints.tabletLandscape) return null;

  return (
    <div>
      <ContentContainer>
        <Content>
          <IframeContainer
            sandbox="allow-downloads allow-forms allow-modals allow-pointer-lock allow-popups allow-presentation allow-same-origin allow-scripts allow-top-navigation-by-user-activation"
            src={htmlSrc}
          ></IframeContainer>
          <VariationsList
            variations={variations}
            setVariations={setVariations}
            setFiles={setFiles}
            htmlSrc={htmlSrc}
            setHtmlSrc={setHtmlSrc}
            setFocusedVariationIndex={handleFocusOnVariation}
          ></VariationsList>
        </Content>
      </ContentContainer>
      <VariationModal
        setFiles={setFiles}
        onClose={handleClose}
        updateVariation={
          !!focusedVariationIndex || focusedVariationIndex === 0
            ? updateVariation(focusedVariationIndex)
            : undefined
        }
        variationData={
          !!focusedVariationIndex || focusedVariationIndex === 0
            ? variations[focusedVariationIndex]
            : undefined
        }
      ></VariationModal>
      <ContentContainer>
        <Alert severity="warning">
          You should copy and paste the code snippets below in your
          StreamElements editor every time you add, remove or update a
          variation.
          <br></br>
          <br></br>
          This action is not needed when you reorganize your variations sets.
        </Alert>
      </ContentContainer>
      {files && (
        <CodeSnippets
          htmlSnippet={files.html}
          cssSnippet={files.css}
          jsSnippet={files.javascript}
        ></CodeSnippets>
      )}
    </div>
  );
};

export default withBreakpoints(VariationCreation);
