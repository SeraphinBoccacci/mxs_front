/* eslint-disable quotes */
import React, { useContext, useEffect, useState } from "react";
//@ts-ignore
import { withBreakpoints } from "react-breakpoints";

import { getUserVariations } from "../../../../services/streamElements";
import { ContentContainer } from "../../../../styles/global";
import { AuthContext } from "../../../AuthContext";
import CodeSnippets from "../../../CodeSnippets";
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

  useEffect(() => {
    if (herotag) {
      getUserVariations(herotag).then(({ variations, files }) => {
        setVariations(variations || []);
        setFiles(files);
      });
    }
  }, [user]);

  const updateVariation = (index: number) => (updatedVariation: Variation) => {
    const before = variations.slice(0, index);
    const after = variations.slice(index + 1, variations.length);

    setVariations([...before, updatedVariation, ...after]);
  };

  if (breakpoints[currentBreakpoint] < breakpoints.tabletLandscape) return null;

  return (
    <>
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
            setFocusedVariationIndex={setFocusedVariationIndex}
          ></VariationsList>
        </Content>
      </ContentContainer>
      <VariationModal
        setFiles={setFiles}
        setVariationModalData={() => setFocusedVariationIndex(undefined)}
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
      {files ? (
        <CodeSnippets
          htmlSnippet={files.html}
          cssSnippet={files.css}
          jsSnippet={files.javascript}
        ></CodeSnippets>
      ) : null}
    </>
  );
};

export default withBreakpoints(VariationCreation);
