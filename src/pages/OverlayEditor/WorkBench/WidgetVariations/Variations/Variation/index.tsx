import { Button } from "@material-ui/core";
import DeleteRoundedIcon from "@material-ui/icons/DeleteRounded";
import EditRoundedIcon from "@material-ui/icons/EditRounded";
import PlayArrowRoundedIcon from "@material-ui/icons/PlayArrowRounded";
import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import React, { useCallback, useMemo } from "react";
import { Draggable } from "react-beautiful-dnd";

import { useAuth } from "../../../../../../components/AuthContext";
import { getAlertVariation } from "../../../../../../services/overlays";
import { WidgetVariation } from "../../../../../../types/overlays";
import { invertColor } from "../../../../../../utils/color";
import { useEditorContext } from "../../../../Context";
import { useWidgetVariationsContext } from "../../WidgetVariationsContext";
import {
  Actions,
  Cell,
  Chances,
  ContainerRow,
  RequiredAmount,
  VariationName,
  Visibility,
} from "./style";

interface VariationProps {
  variation: WidgetVariation;
  index: number;
}

const Variation = ({ variation, index }: VariationProps) => {
  const { herotag } = useAuth();
  const {
    focusOnVariation,
    hiddenWidgets,
    toggleWidgetVisibility,
    displayWidget,
    overlay,
  } = useEditorContext();
  const { deleteVariation, widgetKind } = useWidgetVariationsContext();

  const variationId = variation._id;

  const isWidgetVisible = useMemo(
    () => !hiddenWidgets.some((id) => id === variationId),
    [variationId, hiddenWidgets]
  );

  const handleDisplayWidget = useCallback(() => {
    if (widgetKind) displayWidget(widgetKind, variationId);
  }, [widgetKind, displayWidget, variationId]);

  const handleFocusOnVariation = useCallback(async () => {
    if (herotag && overlay) {
      const focusedVariation = await getAlertVariation(
        herotag,
        overlay._id,
        variationId
      );

      focusOnVariation(focusedVariation);
    }
  }, [focusOnVariation, variationId, herotag, overlay]);

  const handleDeleteVariation = useCallback(() => {
    deleteVariation(variationId);
  }, [deleteVariation, variationId]);

  const handleToggleWidgetVisibility = useCallback(() => {
    toggleWidgetVisibility(variationId);
  }, [toggleWidgetVisibility, variationId]);

  const style = {
    color: invertColor(variation.backgroundColor),
  };

  return (
    <Draggable draggableId={variation._id} index={index}>
      {(draggableProvided) => {
        return (
          <ContainerRow
            ref={draggableProvided.innerRef}
            {...draggableProvided.draggableProps}
            {...draggableProvided.dragHandleProps}
            background={variation.backgroundColor}
          >
            <VariationName>{variation.name}</VariationName>
            <RequiredAmount>{variation.requiredAmount}</RequiredAmount>
            <Chances>{variation.chances}</Chances>
            <Actions>
              <Cell>
                <Button size="small" onClick={handleDisplayWidget}>
                  <PlayArrowRoundedIcon
                    fontSize="small"
                    style={style}
                  ></PlayArrowRoundedIcon>
                </Button>
              </Cell>
              <Cell>
                <Button size="small" onClick={handleFocusOnVariation}>
                  <EditRoundedIcon
                    fontSize="small"
                    style={style}
                  ></EditRoundedIcon>
                </Button>
              </Cell>
              <Cell>
                <Button size="small" onClick={handleDeleteVariation}>
                  <DeleteRoundedIcon
                    fontSize="small"
                    style={style}
                  ></DeleteRoundedIcon>
                </Button>
              </Cell>
            </Actions>
            <Visibility onClick={handleToggleWidgetVisibility}>
              {isWidgetVisible ? (
                <VisibilityIcon fontSize="small" style={style}></VisibilityIcon>
              ) : (
                <VisibilityOffIcon
                  fontSize="small"
                  style={style}
                ></VisibilityOffIcon>
              )}
            </Visibility>
          </ContainerRow>
        );
      }}
    </Draggable>
  );
};

export default Variation;
