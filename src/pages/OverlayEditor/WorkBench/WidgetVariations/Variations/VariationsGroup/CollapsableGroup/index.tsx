import { Button } from "@material-ui/core";
import ArrowRightRoundedIcon from "@material-ui/icons/ArrowRightRounded";
import DeleteRoundedIcon from "@material-ui/icons/DeleteRounded";
import EditRoundedIcon from "@material-ui/icons/EditRounded";
import React, { ChangeEvent, useCallback, useState } from "react";
import { DraggableProvided, Droppable } from "react-beautiful-dnd";

import { useErrorHandlingContext } from "../../../../../../../components/ErrorHandlingContext";
import Input from "../../../../../../../components/Input";
import {
  VariationGroup,
  VariationGroupKinds,
  WidgetVariation,
} from "../../../../../../../types/overlays";
import { useEditorContext } from "../../../../../Context";
import { useWidgetVariationsContext } from "../../../WidgetVariationsContext";
import Variation from "../../Variation";
import {
  ArrowContainer,
  Buttons,
  DraggableContainer,
  DroppableContainer,
  LeftNode,
  ModalContent,
  RightNode,
  StyledForm,
  StyledModal,
  StyledParagraph,
  VariationGroupHeader,
  VariationGroupTitle,
} from "./style";

interface CollapsableGroupProps {
  draggableProvided: DraggableProvided;
  variationGroupTitle: string;
  variationGroupId: string;
  variationGroupKind: VariationGroupKinds;
  variations: WidgetVariation[];
}

const CollapsableGroup = ({
  draggableProvided,
  variationGroupTitle,
  variationGroupId,
  variationGroupKind,
  variations,
}: CollapsableGroupProps) => {
  const { groups, setGroups } = useEditorContext();
  const { handleError } = useErrorHandlingContext();
  const { deleteVariationsGroup, updateVariationsGroup } =
    useWidgetVariationsContext();
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
      updateVariationsGroup([...before, updated, ...after]);
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
    updateVariationsGroup,
    handleError,
    closeEditModal,
  ]);

  const handleDeleteVariationsGroup = useCallback(async () => {
    await deleteVariationsGroup(variationGroupId);
    closeConfirmModal();
  }, [variationGroupId, deleteVariationsGroup, closeConfirmModal]);

  return (
    <>
      <StyledModal onClose={closeEditModal} open={isModalEditOpenned}>
        <ModalContent>
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
        </ModalContent>
      </StyledModal>

      {/*  */}

      <StyledModal onClose={closeConfirmModal} open={isModalConfirmOpenned}>
        <ModalContent>
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
                onClick={handleDeleteVariationsGroup}
              >
                Delete
              </Button>
            </Buttons>
          </StyledForm>
        </ModalContent>
      </StyledModal>

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
