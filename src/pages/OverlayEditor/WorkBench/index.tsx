import React, { useMemo } from "react";

import PlayableOverlay from "../../../components/overlays/PlayableOverlay";
import { useQueryString } from "../../../hooks/useQueryString";
import { useEditorContext } from "../Context";
import AddWidget from "./AddWidget";
import { Container, Iframe, PlayableOverlayContainer } from "./style";
import WidgetEditor from "./WidgetEditor";

const WorkBench = () => {
  const [herotag] = useQueryString("herotag");
  const {
    isAddWidgetOpenned,
    overlay,
    selectedWidget,
    hiddenWidgets,
    widgetToDisplayData,
  } = useEditorContext();

  const workBenchBrowserSource = useMemo(() => {
    const now = Date.now();

    return (
      !!overlay &&
      `/work-bench-browser-source/herotag/${herotag}/overlay/${
        overlay.generatedLink
      }?t=${now}&hiddenWidgets=${JSON.stringify(hiddenWidgets)}`
    );
  }, [overlay, herotag, hiddenWidgets]);

  // PlayableOverlay
  return (
    <Container>
      {!!selectedWidget && <WidgetEditor></WidgetEditor>}
      {isAddWidgetOpenned && <AddWidget></AddWidget>}

      {!!widgetToDisplayData ? (
        <PlayableOverlayContainer>
          <PlayableOverlay
            widgetKind={widgetToDisplayData?.widgetKind}
            widget={widgetToDisplayData?.widget}
          ></PlayableOverlay>
        </PlayableOverlayContainer>
      ) : (
        <Iframe src={workBenchBrowserSource || ""}></Iframe>
      )}
    </Container>
  );
};

export default WorkBench;
