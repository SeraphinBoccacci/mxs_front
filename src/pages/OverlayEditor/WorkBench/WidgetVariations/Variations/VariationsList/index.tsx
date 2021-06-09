import React from "react";
import { Droppable } from "react-beautiful-dnd";

import { WidgetVariation } from "../../../../../../types/overlays";
import { useEditorContext } from "../../../../Context";
import { useWidgetVariationsContext } from "../../WidgetVariationsContext";
import VariationsGroup from "../VariationsGroup";
import { TableBody as StyledTableBody } from "./style";

const VariationsList = () => {
  const { groups } = useEditorContext();
  const { variations } = useWidgetVariationsContext();

  if (!groups) return null;

  return (
    <Droppable
      droppableId="all_variation_groups"
      direction="vertical"
      type="group"
    >
      {(provided) => (
        <StyledTableBody ref={provided.innerRef} {...provided.droppableProps}>
          {groups.map((group, index) => {
            return (
              <VariationsGroup
                key={group._id}
                variationGroupTitle={group.title}
                variationGroupId={group._id}
                variationGroupKind={group.kind}
                index={index}
                variations={
                  group.variationsIds
                    .map((variationId) =>
                      variations.find(({ _id }) => variationId === _id)
                    )
                    .filter(Boolean) as WidgetVariation[]
                }
              ></VariationsGroup>
            );
          })}
          {provided.placeholder}
        </StyledTableBody>
      )}
    </Droppable>
  );
};

export default VariationsList;
