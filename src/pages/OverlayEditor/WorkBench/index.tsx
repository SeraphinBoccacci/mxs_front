import React, { useMemo } from "react";

import { useQueryString } from "../../../hooks/useQueryString";
import { useEditorContext } from "../Context";
import AddWidget from "./AddWidget";
import { Container, Iframe, WorkBenchIframe } from "./style";
import WidgetEditor from "./WidgetEditor";

const WorkBench = () => {
  const [herotag] = useQueryString("herotag");
  const {
    isAddWidgetOpenned,
    overlay,
    selectedWidget,
    hiddenWidgets,
  } = useEditorContext();

  const [browserSource, workBenchBrowserSource] = useMemo(() => {
    const now = Date.now();

    return [
      !!overlay &&
        `/browser-source/herotag/${herotag}/overlay/${
          overlay.generatedLink
        }?t=${now}&hiddenWidgets=${JSON.stringify(hiddenWidgets)}`,
      !!overlay &&
        `/work-bench-browser-source/herotag/${herotag}/overlay/${
          overlay.generatedLink
        }?t=${now}&hiddenWidgets=${JSON.stringify(hiddenWidgets)}`,
    ];
  }, [overlay, herotag, hiddenWidgets]);

  return (
    <Container>
      {!!selectedWidget && <WidgetEditor></WidgetEditor>}
      {isAddWidgetOpenned && <AddWidget></AddWidget>}
      <Iframe src={browserSource || ""}></Iframe>
      <WorkBenchIframe src={workBenchBrowserSource || ""}></WorkBenchIframe>
    </Container>
  );
};

export default WorkBench;
