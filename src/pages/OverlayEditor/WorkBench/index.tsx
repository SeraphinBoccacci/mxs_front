import React from "react";

import { useQueryString } from "../../../hooks/useQueryString";
import { useEditorContext } from "../Context";
import AddWidget from "./AddWidget";
import { Container, Iframe } from "./style";
import WidgetEditor from "./WidgetEditor";

const WorkBench = () => {
  const [herotag] = useQueryString("herotag");
  const { isAddWidgetOpenned, overlay, selectedWidget } = useEditorContext();

  const browserSource =
    !!overlay &&
    `/browser-source/herotag/${herotag}/overlay/${overlay.generatedLink}`;

  return (
    <Container>
      {!!selectedWidget && <WidgetEditor></WidgetEditor>}
      {isAddWidgetOpenned && <AddWidget></AddWidget>}
      <Iframe src={browserSource || ""}></Iframe>
    </Container>
  );
};

export default WorkBench;
