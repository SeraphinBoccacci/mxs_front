import { Button } from "@material-ui/core";
import DeleteRoundedIcon from "@material-ui/icons/DeleteRounded";
import EditRoundedIcon from "@material-ui/icons/EditRounded";
import PlayArrowRoundedIcon from "@material-ui/icons/PlayArrowRounded";
import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import React, { useCallback, useMemo } from "react";
import { Draggable } from "react-beautiful-dnd";

import { useErrorHandlingContext } from "../../../../../../components/ErrorHandlingContext";
import { useQueryString } from "../../../../../../hooks/useQueryString";
import { deleteAlertVariation } from "../../../../../../services/overlays";
import { AlertVariation } from "../../../../../../types/alerts";
import { invertColor } from "../../../../../../utils/color";
import { useEditorContext } from "../../../../Context";
import {
  Actions,
  Cell,
  Chances,
  ContainerRow,
  RequiredAmount,
  VariationName,
  Visibility,
} from "./style";

interface TableRowProps {
  variation: AlertVariation;
  index: number;
}

const Variation = ({ variation, index }: TableRowProps) => {
  const {
    overlay,
    getOverlayData,
    handleFocusOnVariation,
    hiddenWidgets,
    toggleWidgetVisibility,
  } = useEditorContext();
  const { handleError } = useErrorHandlingContext();
  const [herotag] = useQueryString("herotag");

  const removeVariation = useCallback(async () => {
    try {
      if (overlay)
        await deleteAlertVariation(herotag, overlay?._id, variation._id);

      getOverlayData();
    } catch (error) {
      handleError(error.message);
    }
  }, [variation, getOverlayData, herotag, overlay, handleError]);

  const isWidgetVisible = useMemo(
    () => !hiddenWidgets.some((id) => id === variation._id),
    [variation, hiddenWidgets]
  );

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
                <Button
                  size="small"
                  onClick={() => {
                    // removeVariation(variationIndex);
                  }}
                >
                  <PlayArrowRoundedIcon
                    fontSize="small"
                    style={{
                      color: invertColor(variation.backgroundColor),
                    }}
                  ></PlayArrowRoundedIcon>
                </Button>
              </Cell>
              <Cell>
                <Button
                  size="small"
                  onClick={() => {
                    handleFocusOnVariation(variation);
                  }}
                >
                  <EditRoundedIcon
                    fontSize="small"
                    style={{
                      color: invertColor(variation.backgroundColor),
                    }}
                  ></EditRoundedIcon>
                </Button>
              </Cell>
              <Cell>
                <Button size="small" onClick={removeVariation}>
                  <DeleteRoundedIcon
                    fontSize="small"
                    style={{
                      color: invertColor(variation.backgroundColor),
                    }}
                  ></DeleteRoundedIcon>
                </Button>
              </Cell>
            </Actions>
            <Visibility
              onClick={() => {
                toggleWidgetVisibility(variation._id);
              }}
            >
              {isWidgetVisible ? (
                <VisibilityIcon
                  fontSize="small"
                  style={{
                    color: invertColor(variation.backgroundColor),
                  }}
                ></VisibilityIcon>
              ) : (
                <VisibilityOffIcon
                  fontSize="small"
                  style={{
                    color: invertColor(variation.backgroundColor),
                  }}
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
