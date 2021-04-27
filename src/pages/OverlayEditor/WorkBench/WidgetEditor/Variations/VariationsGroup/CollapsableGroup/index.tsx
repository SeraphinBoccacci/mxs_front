import { Button } from "@material-ui/core";
import ArrowRightRoundedIcon from "@material-ui/icons/ArrowRightRounded";
import EditRoundedIcon from "@material-ui/icons/EditRounded";
import React, { ChangeEvent, useCallback, useState } from "react";
import { DraggableProvided, Droppable } from "react-beautiful-dnd";

import Input from "../../../../../../../components/Input";
import { useQueryString } from "../../../../../../../hooks/useQueryString";
import { AlertVariation } from "../../../../../../../interfaces/alerts";
import {
  VariationGroup,
  VariationGroupKinds,
} from "../../../../../../../interfaces/overlays";
import { updateAlertVariationsGroups } from "../../../../../../../services/overlays/alerts";
import { useEditorContext } from "../../../../../Context";
import Variation from "../../Variation";
import {
  ArrowContainer,
  DraggableContainer,
  DroppableContainer,
  StyledForm,
  StyledModal,
  StyledPaper,
  VariationGroupHeader,
  VariationGroupTitle,
} from "./style";

interface CollapsableGroupProps {
  draggableProvided: DraggableProvided;
  variationGroupTitle: string;
  variationGroupId: string;
  variationGroupKind: VariationGroupKinds;
  variations: AlertVariation[];
}

const CollapsableGroup = ({
  draggableProvided,
  variationGroupTitle,
  variationGroupId,
  variationGroupKind,
  variations,
}: CollapsableGroupProps) => {
  const { groups, setGroups, overlay } = useEditorContext();
  const [herotag] = useQueryString("herotag");
  const [isExpanded, setIsExpanded] = useState(false);
  const [isModalOpenned, setIsModalOpenned] = useState(false);
  const [groupName, setGroupName] = useState<string>();

  const toggleGroup = useCallback(() => {
    setIsExpanded((prev) => !prev);
  }, [setIsExpanded]);

  const openModal = useCallback(() => {
    setIsModalOpenned(true);
  }, [setIsModalOpenned]);

  const handleClose = useCallback(() => {
    setIsModalOpenned(false);
  }, [setIsModalOpenned]);

  const handleOnChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setGroupName(event.target.value);
    },
    [setGroupName]
  );

  const handleOnSubmit = useCallback(() => {
    if (!overlay) return;

    const updatedGroupIndex = groups.findIndex(
      ({ _id }) => _id === variationGroupId
    );

    const before: VariationGroup[] = groups.slice(0, updatedGroupIndex);
    const after: VariationGroup[] = groups.slice(
      updatedGroupIndex + 1,
      groups.length
    );

    const updated: VariationGroup = {
      ...groups[updatedGroupIndex],
      title: groupName || "Unnamed variation group",
    };

    setGroups([...before, updated, ...after]);
    updateAlertVariationsGroups(herotag, overlay?._id, [
      ...before,
      updated,
      ...after,
    ]);
    setIsModalOpenned(false);
  }, [setGroups, groups, variationGroupId, groupName, overlay, herotag]);

  return (
    <>
      <StyledModal onClose={handleClose} open={isModalOpenned}>
        <StyledPaper>
          <StyledForm>
            <Input
              inputLabel="Group Name"
              inputName="groupName"
              onChange={handleOnChange}
              value={groupName}
              centered
              width="10rem"
            ></Input>
            <Button
              color="secondary"
              variant="contained"
              onClick={handleOnSubmit}
            >
              Update
            </Button>
          </StyledForm>
        </StyledPaper>
      </StyledModal>

      {/*  */}

      <DraggableContainer
        ref={draggableProvided.innerRef}
        {...draggableProvided.draggableProps}
        isExpanded={isExpanded}
      >
        <VariationGroupHeader>
          <ArrowContainer isExpanded={isExpanded} onClick={toggleGroup}>
            <ArrowRightRoundedIcon
              color="primary"
              fontSize="default"
            ></ArrowRightRoundedIcon>
          </ArrowContainer>
          <VariationGroupTitle {...draggableProvided.dragHandleProps}>
            {variationGroupTitle}
          </VariationGroupTitle>
          {variationGroupKind !== VariationGroupKinds.DEFAULT && (
            <Button onClick={openModal}>
              <EditRoundedIcon
                color="primary"
                fontSize="small"
              ></EditRoundedIcon>
            </Button>
          )}
        </VariationGroupHeader>
        <Droppable
          droppableId={`droppable_variation_group_${variationGroupId}`}
          type="variation"
        >
          {(droppableProvided, snapshot) => (
            <DroppableContainer
              ref={droppableProvided.innerRef}
              {...droppableProvided.droppableProps}
              isDraggingOver={snapshot.isDraggingOver}
            >
              {variations.map((variation, variationIndex) => {
                return (
                  <Variation
                    key={variation._id}
                    variation={variation}
                    index={variationIndex}
                  ></Variation>
                );
              })}
              {droppableProvided.placeholder}
            </DroppableContainer>
          )}
        </Droppable>
      </DraggableContainer>
    </>
  );
};

export default CollapsableGroup;
