import React, { useMemo } from "react";

import PlayableOverlay from "../../../components/overlays/PlayableOverlay";
import config from "../../../config/config";
import { useQueryString } from "../../../hooks/useQueryString";
import {
  createAlertVariation,
  createAlertVariationsGroup,
  deleteAlertVariation,
  updateAlertVariation,
  WidgetsKinds,
} from "../../../services/overlays";
import {
  deleteAlertsVariationsGroup,
  updateAlertVariationsGroups,
} from "../../../services/overlays/alerts";
import { useEditorContext } from "../Context";
import AddWidget from "./AddWidget";
import { Container, Iframe, PlayableOverlayContainer } from "./style";
import WidgetVariations from "./WidgetVariations";

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
      `${
        config.frontUrl
      }/work-bench-browser-source/herotag/${herotag}/overlay/${
        overlay.generatedLink
      }?t=${now}&hiddenWidgets=${JSON.stringify(hiddenWidgets)}`
    );
  }, [overlay, herotag, hiddenWidgets]);

  // PlayableOverlay
  return (
    <Container>
      {!!overlay && selectedWidget === WidgetsKinds.ALERTS && (
        <WidgetVariations
          overlayId={overlay._id}
          variations={overlay.alerts.variations}
          widgetKind={selectedWidget}
          createVariation={createAlertVariation}
          updateVariation={updateAlertVariation}
          deleteVariation={deleteAlertVariation}
          createVariationsGroup={createAlertVariationsGroup}
          updateVariationsGroup={updateAlertVariationsGroups}
          deleteVariationsGroup={deleteAlertsVariationsGroup}
        ></WidgetVariations>
      )}

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
