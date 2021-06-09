import React, { useCallback } from "react";

import { useAuth } from "../../../../components/AuthContext";
import { useErrorHandlingContext } from "../../../../components/ErrorHandlingContext";
import { addWidget } from "../../../../services/overlays";
import { WidgetsKinds } from "../../../../types/overlays";
import { useEditorContext } from "../../Context";
import { Background, Container, WidgetButton } from "./style";

const AddWidget = () => {
  const { setIsAddWidgetOpenned, overlay, getOverlayData } = useEditorContext();
  const { handleError } = useErrorHandlingContext();
  const { herotag } = useAuth();

  const handleOnBackgroundClick = useCallback(() => {
    setIsAddWidgetOpenned(false);
  }, [setIsAddWidgetOpenned]);

  const handleAddWidget = useCallback(
    async (widget: WidgetsKinds) => {
      try {
        if (overlay && herotag) {
          await addWidget(herotag, overlay?._id, widget);

          await getOverlayData();

          setIsAddWidgetOpenned(false);
        }
      } catch (error) {
        handleError(error.message);
      }
    },
    [overlay, herotag, handleError, getOverlayData, setIsAddWidgetOpenned]
  );

  return (
    <>
      <Background onClick={handleOnBackgroundClick}></Background>
      <Container>
        <WidgetButton
          disabled={!!overlay?.alerts}
          onClick={() => handleAddWidget(WidgetsKinds.ALERTS)}
        >
          Alerts
        </WidgetButton>
        <WidgetButton
          disabled={!!overlay?.donationBar}
          onClick={() => handleAddWidget(WidgetsKinds.DONATION_BAR)}
        >
          Donation Bar
        </WidgetButton>
        <WidgetButton disabled>Particles Fall</WidgetButton>
        <WidgetButton disabled>Top Donators</WidgetButton>
      </Container>
    </>
  );
};

export default AddWidget;
