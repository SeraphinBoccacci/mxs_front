import { Button } from "@material-ui/core";
import React, { useCallback } from "react";

import { useErrorHandlingContext } from "../../../../components/ErrorHandlingContext";
import { colors } from "../../../../constants/colors";
import { useQueryString } from "../../../../hooks/useQueryString";
import {
  createAlertVariation,
  createAlertVariationsGroup,
} from "../../../../services/overlays";
import { AlertVariation } from "../../../../types/alerts";
import { useEditorContext } from "../../Context";
import { Background, Buttons, Container } from "./style";
import Variations from "./Variations";

const generateRandomVariationName = (
  variations: AlertVariation[]
): AlertVariation => {
  const leftColors = colors.filter(
    ({ label }) => !variations.some((variation) => variation.name === label)
  );

  const colorsCount = leftColors.length;

  const randomIndex = Math.floor(Math.random() * colorsCount);

  const color = leftColors[randomIndex];

  return {
    name: `variation ${color.label.split(" ").join("_").toLowerCase()}`,
    backgroundColor: color.value,
  } as AlertVariation;
};

const WidgetEditor = () => {
  const {
    setSelectedWidget,
    setWidgetData,
    getOverlayData,
    overlay,
  } = useEditorContext();
  const { handleError } = useErrorHandlingContext();
  const [herotag] = useQueryString("herotag");

  const handleCancel = useCallback(() => {
    setSelectedWidget(null);
    setWidgetData(null);
  }, [setSelectedWidget, setWidgetData]);

  const handleCreateAlertVariation = useCallback(async () => {
    try {
      const newVariation = generateRandomVariationName(
        overlay?.alerts.variations || []
      );

      if (!overlay) return;

      await createAlertVariation(herotag, overlay._id, newVariation);

      await getOverlayData();
    } catch (error) {
      handleError(error.message);
    }
  }, [herotag, getOverlayData, handleError, overlay]);

  const handleCreateAlertVariationsGroup = useCallback(async () => {
    try {
      if (!overlay) return;

      await createAlertVariationsGroup(herotag, overlay._id);

      await getOverlayData();
    } catch (error) {
      handleError(error.message);
    }
  }, [herotag, getOverlayData, handleError, overlay]);

  return (
    <>
      <Background onClick={handleCancel}></Background>
      <Container>
        <Variations></Variations>

        <Buttons>
          <Button
            variant="contained"
            color="primary"
            onClick={handleCreateAlertVariation}
          >
            Add Variation
          </Button>
          <Button
            variant="contained"
            color="secondary"
            onClick={handleCreateAlertVariationsGroup}
          >
            New Variation Group
          </Button>
        </Buttons>
      </Container>
    </>
  );
};

export default WidgetEditor;
