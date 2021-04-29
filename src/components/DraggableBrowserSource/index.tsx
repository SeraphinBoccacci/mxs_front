import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router";

import { useQueryString } from "../../hooks/useQueryString";
import {
  getUserOverlay,
  updateAlertVariation,
  WidgetsKinds,
} from "../../services/overlays";
import { EventData } from "../../types/ifttt";
import { OverlayData } from "../../types/overlays";
import Alert from "./Alert";
import Draggable from "./Draggable";
import { Container } from "./style";

const transactionData: EventData = {
  amount: "1",
  herotag: "TEST HEROTAG",
  data: "TEST MESSAGE",
};

const DraggableBrowserSource = () => {
  const { overlayId } = useParams<{
    overlayId: string;
  }>();
  const [herotag] = useQueryString("herotag");
  const [hiddenWidgetsString] = useQueryString("hiddenWidgets");
  const hiddenWidgets = JSON.parse(hiddenWidgetsString);
  const [overlay, setOverlay] = useState<OverlayData>();
  const [draggedWidget, setDraggedWidget] = useState<string>();

  const getOverlay = useCallback(async () => {
    const overlay = await getUserOverlay(herotag, overlayId);

    if (overlay) setOverlay(overlay);
  }, [overlayId, herotag]);

  useEffect(() => {
    getOverlay();
  }, [overlayId, herotag, getOverlay]);

  const handleOnDragEnd = useCallback(
    async (widgetId, widgetKind, { offsetTop, offsetLeft }) => {
      setDraggedWidget(widgetId);

      if (!overlay) return;

      if (widgetKind === WidgetsKinds.ALERTS) {
        const variationToUpdate = overlay.alerts.variations.find(
          (variation) => variation._id === widgetId
        );

        if (variationToUpdate) {
          await updateAlertVariation(herotag, overlay._id, {
            ...variationToUpdate,
            offsetTop,
            offsetLeft,
          });

          await getOverlay();
        }

        setDraggedWidget(undefined);
      }
    },
    [setDraggedWidget, herotag, overlay, getOverlay]
  );

  return (
    <Container>
      {overlay?.alerts.variations.map((alertVariation) => {
        const positionData = {
          offsetTop: alertVariation.offsetTop || 0,
          offsetLeft: alertVariation.offsetLeft || 0,
        };

        if (hiddenWidgets.some((id: string) => id === alertVariation._id))
          return null;

        return (
          <Draggable
            isSelected={draggedWidget === alertVariation._id}
            selectWidget={(_id: string) => setDraggedWidget(_id)}
            key={alertVariation._id}
            widgetId={alertVariation._id}
            positionData={positionData}
            onDragEnd={handleOnDragEnd}
          >
            <Alert
              key={alertVariation._id}
              alert={alertVariation}
              data={transactionData}
            ></Alert>
          </Draggable>
        );
      })}
    </Container>
  );
};

export default DraggableBrowserSource;
