import React, { useCallback } from "react";
import { DragDropContext } from "react-beautiful-dnd";

import { VariationGroup } from "../../../../../types/overlays";
import { useEditorContext } from "../../../Context";
import { useWidgetVariationsContext } from "../WidgetVariationsContext";
import {
  Actions,
  Chances,
  Container,
  Header,
  RequiredAmount,
  VariationName,
} from "./style";
import VariationsList from "./VariationsList";

const addBetween = (
  index: number,
  value: string | VariationGroup,
  array: string[] | VariationGroup[]
) => {
  const before = array.slice(0, index);
  const after = array.slice(index, array.length);

  return [...before, value, ...after];
};

const updateBetween = (
  index: number,
  value: VariationGroup,
  array: VariationGroup[]
) => {
  const before = array.slice(0, index);
  const after = array.slice(index + 1, array.length);

  return [...before, value, ...after];
};

const Variations = () => {
  const { updateVariationsGroup } = useWidgetVariationsContext();
  const { setGroups, groups } = useEditorContext();

  const handleOnDragEnd = useCallback(
    async (result) => {
      if (!result.destination) return;

      if (result.type === "variation") {
        const sourceGroupIndex = groups.findIndex(
          ({ _id }) =>
            `droppable_variation_group_${_id}` === result?.source?.droppableId
        );

        const updatedSourceGroupVariationIds =
          groups[sourceGroupIndex]?.variationsIds.filter(
            (variationId) => variationId !== result.draggableId
          ) || [];

        const updatedSourceGroup = {
          ...groups[sourceGroupIndex],
          variationsIds: updatedSourceGroupVariationIds,
        };

        //ADD TO DESTINATION AT INDEX
        const destinationGroupIndex = groups.findIndex(
          ({ _id }) =>
            `droppable_variation_group_${_id}` ===
            result?.destination?.droppableId
        );

        const destinationGroup = groups[destinationGroupIndex];

        const updatedDestinationGroup = {
          ...destinationGroup,
          variationsIds: addBetween(
            result?.destination?.index,
            result.draggableId,
            sourceGroupIndex === destinationGroupIndex
              ? updatedSourceGroupVariationIds
              : destinationGroup?.variationsIds || []
          ) as string[],
        };

        const updatedGroups = updateBetween(
          destinationGroupIndex,
          updatedDestinationGroup,
          updateBetween(sourceGroupIndex, updatedSourceGroup, groups)
        );

        updateVariationsGroup(updatedGroups);

        setGroups(updatedGroups);

        return;
      }

      if (
        result.type === "group" &&
        result?.destination?.droppableId === "all_variation_groups"
      ) {
        const updatedSource = groups.filter(
          ({ _id }) => `draggable_variation_group_${_id}` !== result.draggableId
        );

        const updatedDestination = addBetween(
          result?.destination?.index,
          groups[result?.source?.index],
          updatedSource
        ) as VariationGroup[];

        updateVariationsGroup(updatedDestination);

        setGroups(updatedDestination);

        return;
      }
    },
    [groups, setGroups, updateVariationsGroup]
  );

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <Container>
        <Header>
          <VariationName>Variation Name</VariationName>
          <RequiredAmount>Required Amount</RequiredAmount>
          <Chances>Apparition Probabilities</Chances>
          <Actions>Actions</Actions>
        </Header>
        <VariationsList></VariationsList>
      </Container>
    </DragDropContext>
  );
};

export default Variations;
