import { Button } from "@material-ui/core";
import ArrowRightRoundedIcon from "@material-ui/icons/ArrowRightRounded";
import DeleteRoundedIcon from "@material-ui/icons/DeleteRounded";
import EditRoundedIcon from "@material-ui/icons/EditRounded";
import React, { ChangeEvent, useCallback, useState } from "react";
import { DraggableProvided, Droppable } from "react-beautiful-dnd";

import { useErrorHandlingContext } from "../../../../../../../components/ErrorHandlingContext";
import Input from "../../../../../../../components/Input";
import { useQueryString } from "../../../../../../../hooks/useQueryString";
import {
  deleteAlertsVariationsGroup,
  updateAlertVariationsGroups,
} from "../../../../../../../services/overlays/alerts";
import { AlertVariation } from "../../../../../../../types/alerts";
import {
  VariationGroup,
  VariationGroupKinds,
} from "../../../../../../../types/overlays";
import { useEditorContext } from "../../../../../Context";
import Variation from "../../Variation";
import {
  ArrowContainer,
  Buttons,
  DraggableContainer,
  DroppableContainer,
  LeftNode,
  RightNode,
  StyledConfirmModal,
  StyledEditModal,
  StyledForm,
  StyledPaper,
  StyledParagraph,
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
  const { groups, setGroups, overlay, getOverlayData } = useEditorContext();
  const [herotag] = useQueryString("herotag");
  const { handleError } = useErrorHandlingContext();
  const [isExpanded, setIsExpanded] = useState(false);
  const [isModalEditOpenned, setIsModalEditOpenned] = useState(false);
  const [isModalConfirmOpenned, setIsModalConfirmOpenned] = useState(false);
  const [groupName, setGroupName] = useState<string>();

  const toggleGroup = useCallback(() => {
    setIsExpanded((prev) => !prev);
  }, [setIsExpanded]);

  const openModalEdit = useCallback(() => {
    setIsModalEditOpenned(true);
  }, [setIsModalEditOpenned]);

  const closeEditModal = useCallback(() => {
    setIsModalEditOpenned(false);
  }, [setIsModalEditOpenned]);

  const openModalConfirm = useCallback(() => {
    setIsModalConfirmOpenned(true);
  }, [setIsModalConfirmOpenned]);

  const closeConfirmModal = useCallback(() => {
    setIsModalConfirmOpenned(false);
  }, [setIsModalConfirmOpenned]);

  const handleOnChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setGroupName(event.target.value);
    },
    [setGroupName]
  );

  const handleOnSubmit = useCallback(() => {
    try {
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
        title: groupName || "Unnamed group",
      };

      setGroups([...before, updated, ...after]);
      updateAlertVariationsGroups(herotag, overlay?._id, [
        ...before,
        updated,
        ...after,
      ]);
    } catch (error) {
      handleError(error.message);
    } finally {
      closeEditModal();
    }
  }, [
    setGroups,
    groups,
    variationGroupId,
    groupName,
    overlay,
    herotag,
    handleError,
    closeEditModal,
  ]);

  const deleteVariationsGroup = useCallback(async () => {
    try {
      if (!overlay) return;

      await deleteAlertsVariationsGroup(herotag, overlay._id, variationGroupId);

      await getOverlayData();
    } catch (error) {
      handleError(error.message);
    } finally {
      closeConfirmModal();
    }
  }, [
    getOverlayData,
    overlay,
    herotag,
    variationGroupId,
    handleError,
    closeConfirmModal,
  ]);

  return (
    <>
      <StyledConfirmModal onClose={closeEditModal} open={isModalEditOpenned}>
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

            <Buttons>
              <Button
                color="secondary"
                variant="outlined"
                onClick={closeEditModal}
              >
                Cancel
              </Button>
              <Button
                color="secondary"
                variant="contained"
                onClick={handleOnSubmit}
              >
                Update
              </Button>
            </Buttons>
          </StyledForm>
        </StyledPaper>
      </StyledConfirmModal>

      {/*  */}

      <StyledEditModal onClose={closeConfirmModal} open={isModalConfirmOpenned}>
        <StyledPaper>
          <StyledForm>
            <div>
              <StyledParagraph>
                Are you sure you want to delete this group ?
              </StyledParagraph>
              <StyledParagraph>
                (The variations inside will be placed in default group)
              </StyledParagraph>
            </div>
            <Buttons>
              <Button
                color="secondary"
                variant="outlined"
                onClick={closeConfirmModal}
              >
                Cancel
              </Button>
              <Button
                color="secondary"
                variant="contained"
                onClick={deleteVariationsGroup}
              >
                Delete
              </Button>
            </Buttons>
          </StyledForm>
        </StyledPaper>
      </StyledEditModal>

      {/*  */}

      <DraggableContainer
        ref={draggableProvided.innerRef}
        {...draggableProvided.draggableProps}
        isExpanded={isExpanded}
      >
        <VariationGroupHeader>
          <LeftNode>
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
              <Button onClick={openModalEdit}>
                <EditRoundedIcon
                  color="primary"
                  fontSize="small"
                ></EditRoundedIcon>
              </Button>
            )}
          </LeftNode>

          <RightNode>
            {variationGroupKind !== VariationGroupKinds.DEFAULT && (
              <Button onClick={openModalConfirm}>
                <DeleteRoundedIcon
                  color="primary"
                  fontSize="small"
                ></DeleteRoundedIcon>
              </Button>
            )}
          </RightNode>
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
