import React, { useCallback } from "react";

import { useErrorHandlingContext } from "../../../../components/ErrorHandlingContext";
import { useQueryString } from "../../../../hooks/useQueryString";
import { addWidget, WidgetsKinds } from "../../../../services/overlays";
import { useEditorContext } from "../../Context";
import { Background, Container, WidgetButton } from "./style";

const AddWidget = () => {
  const { setIsAddWidgetOpenned, overlay, getOverlayData } = useEditorContext();
  const { handleError } = useErrorHandlingContext();
  const [herotag] = useQueryString("herotag");

  const handleOnBackgroundClick = useCallback(() => {
    setIsAddWidgetOpenned(false);
  }, [setIsAddWidgetOpenned]);

  const handleAddWidget = useCallback(
    async (widget: WidgetsKinds) => {
      try {
        if (overlay) {
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
        <WidgetButton>Donation Bar</WidgetButton>
        <WidgetButton>Particles Fall</WidgetButton>
        <WidgetButton>Top Donators</WidgetButton>
      </Container>
    </>
  );
};

export default AddWidget;
