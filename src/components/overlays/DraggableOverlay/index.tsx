import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useParams } from "react-router";

import { useQueryString } from "../../../hooks/useQueryString";
import {
  getUserOverlay,
  updateAlertVariation,
} from "../../../services/overlays";
import { updateDonationBar } from "../../../services/overlays/donationBar";
import { EventData } from "../../../types/ifttt";
import { OverlayData, WidgetsKinds } from "../../../types/overlays";
import { useErrorHandlingContext } from "../../ErrorHandlingContext";
import Draggable from "../Draggable";
import Alert from "../widgets/alerts/DraggableAlert";
import DonationBar from "../widgets/donationBars/DraggableDonationBar";
import { Container } from "./style";

const transactionData: EventData = {
  amount: "1",
  herotag: "TEST HEROTAG",
  data: "TEST MESSAGE",
};

const DraggableOverlay = () => {
  const [hiddenWidgetsString] = useQueryString("hiddenWidgets");
  const [overlay, setOverlay] = useState<OverlayData>();
  const [draggedWidget, setDraggedWidget] = useState<string>();
  const { overlayId, herotag } =
    useParams<{
      overlayId: string;
      herotag: string;
    }>();
  const { handleError } = useErrorHandlingContext();

  const hiddenWidgets = useMemo(() => {
    try {
      const hidden = JSON.parse(hiddenWidgetsString);

      return hidden || [];
    } catch (error) {
      return [];
    }
  }, [hiddenWidgetsString]);

  const getOverlay = useCallback(async () => {
    if (herotag) {
      const overlay = await getUserOverlay(herotag, overlayId);

      if (overlay) setOverlay(overlay);
    }
  }, [overlayId, herotag]);

  useEffect(() => {
    getOverlay();
  }, [overlayId, herotag, getOverlay]);

  const handleOnDragEnd = useCallback(
    async (widgetId, widgetKind, { offsetTop, offsetLeft }) => {
      setDraggedWidget(widgetId);

      if (!overlay) return;

      if (widgetKind === WidgetsKinds.ALERTS) {
        const variationToUpdate = overlay?.alerts?.variations?.find(
          (variation) => variation._id === widgetId
        );

        if (variationToUpdate && herotag) {
          try {
            await updateAlertVariation(herotag, overlay._id, {
              ...variationToUpdate,
              offsetTop,
              offsetLeft,
            });
          } catch (error) {
            handleError(error.message);
          }
        }
      }

      if (
        widgetKind === WidgetsKinds.DONATION_BAR &&
        overlay.donationBar &&
        herotag
      ) {
        try {
          await updateDonationBar(herotag, overlay._id, {
            ...overlay.donationBar,
            offsetTop,
            offsetLeft,
          });
        } catch (error) {
          handleError(error.message);
        }
      }

      try {
        await getOverlay();
      } catch (error) {
        handleError(error.message);
      }

      setDraggedWidget(undefined);
    },
    [setDraggedWidget, herotag, overlay, getOverlay, handleError]
  );

  return (
    <Container>
      {overlay?.alerts?.variations?.map((alertVariation) => {
        const positionData = {
          offsetTop: alertVariation.offsetTop || 0,
          offsetLeft: alertVariation.offsetLeft || 0,
        };

        if (hiddenWidgets.some((id: string) => id === alertVariation._id))
          return null;

        return (
          <Draggable
            isSelected={draggedWidget === alertVariation._id}
            selectWidget={(_id?: string) => setDraggedWidget(_id)}
            key={alertVariation._id}
            widgetId={alertVariation._id}
            positionData={positionData}
            onDragEnd={handleOnDragEnd}
            widgetKind={WidgetsKinds.ALERTS}
          >
            <Alert
              key={alertVariation._id}
              alert={alertVariation}
              data={transactionData}
            ></Alert>
          </Draggable>
        );
      })}
      {overlay?.donationBar && (
        <Draggable
          isSelected={draggedWidget === overlay?.donationBar._id}
          selectWidget={(_id?: string) => setDraggedWidget(_id)}
          widgetId={overlay?.donationBar._id}
          positionData={{
            offsetTop: overlay.donationBar.offsetTop || 0,
            offsetLeft: overlay.donationBar.offsetLeft || 0,
          }}
          widgetKind={WidgetsKinds.DONATION_BAR}
          onDragEnd={handleOnDragEnd}
        >
          <DonationBar
            donationBar={overlay.donationBar}
            progression={56}
          ></DonationBar>
        </Draggable>
      )}
    </Container>
  );
};

export default DraggableOverlay;
