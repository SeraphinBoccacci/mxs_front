import React from "react";
import { Draggable } from "react-beautiful-dnd";

import { AlertVariation } from "../../../../../../interfaces/alerts";
import { VariationGroupKinds } from "../../../../../../interfaces/overlays";
import CollapsableGroup from "./CollapsableGroup";

interface TableRowProps {
  variationGroupTitle: string;
  variationGroupId: string;
  variationGroupKind: VariationGroupKinds;
  variations: AlertVariation[];
  index: number;
}

const VariationsGroup = ({
  variationGroupTitle,
  variationGroupId,
  variations,
  variationGroupKind,
  index,
}: TableRowProps) => {
  return (
    <Draggable
      draggableId={`draggable_variation_group_${variationGroupId}`}
      index={index}
    >
      {(draggableProvided) => {
        return (
          <CollapsableGroup
            draggableProvided={draggableProvided}
            variationGroupTitle={variationGroupTitle}
            variationGroupId={variationGroupId}
            variationGroupKind={variationGroupKind}
            variations={variations}
          ></CollapsableGroup>
        );
      }}
    </Draggable>
  );
};

export default VariationsGroup;
