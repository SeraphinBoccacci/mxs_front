/* eslint-disable quotes */
import React, { useContext, useEffect, useState } from "react";

import { AuthContext } from "../../../AuthContext";
import CodeSnippets from "../../../CodeSnippets";
import { ContentContainer } from "../../style";
import { generateCss } from "../codeSnippets/custom/css";
import { mainLines } from "../codeSnippets/custom/javascript";
import { Variation } from "../interface";
import { Content, IframeContainer } from "./style";
import { VariationModal } from "./VariationModal";
import { VariationsList } from "./VariationsList";

const WidgetCreation = () => {
  const { user, herotag } = useContext(AuthContext);

  const [variations, setVariations] = useState<Variation[]>([]);

  const [html, setHtml] = useState<string>();

  useEffect(() => {
    setVariations(user?.integrations?.streamElements?.variations || []);
  }, [user]);

  const [focusedVariationIndex, setFocusedVariationIndex] = useState<number>();

  const updateVariation = (index: number) => (updatedVariation: Variation) => {
    const before = variations.slice(0, index);
    const after = variations.slice(index + 1, variations.length);

    setVariations([...before, updatedVariation, ...after]);
  };

  return (
    <>
      <ContentContainer>
        <Content>
          {/* <IframeContainer
            src="about:blank"
            sandbox="allow-scripts"
            srcDoc={html}
          ></IframeContainer> */}
          <VariationsList
            variations={variations}
            setVariations={setVariations}
            html={html}
            setHtml={setHtml}
            setFocusedVariationIndex={setFocusedVariationIndex}
          ></VariationsList>
        </Content>
      </ContentContainer>
      <VariationModal
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
      <CodeSnippets
        jsSnippet={herotag ? mainLines(herotag, variations) : ""}
        cssSnippet={generateCss(variations)}
      ></CodeSnippets>
    </>
  );
};

export default WidgetCreation;
