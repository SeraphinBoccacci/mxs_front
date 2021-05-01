import { Button } from "@material-ui/core";
import DeleteRoundedIcon from "@material-ui/icons/DeleteRounded";
import EditRoundedIcon from "@material-ui/icons/EditRounded";
import PlayArrowRoundedIcon from "@material-ui/icons/PlayArrowRounded";
import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import React, { useMemo } from "react";
import { Draggable } from "react-beautiful-dnd";

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
  const {
    handleFocusOnVariation,
    hiddenWidgets,
    toggleWidgetVisibility,
    displayWidget,
    getOverlayData,
  } = useEditorContext();

  const { deleteVariation } = useWidgetVariationsContext();
  const { widgetKind } = useWidgetVariationsContext();

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
                    if (widgetKind) displayWidget(widgetKind, variation);
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
                <Button
                  size="small"
                  onClick={() => deleteVariation(variation._id)}
                >
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
