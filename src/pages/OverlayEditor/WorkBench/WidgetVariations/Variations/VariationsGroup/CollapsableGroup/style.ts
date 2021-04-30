import { Modal, Paper } from "@material-ui/core";
import styled from "styled-components";

import { colors } from "../../../../../../../constants";
import { FlexRow } from "../../../../../../../styles/global";

interface ContainerProps {
  isExpanded: boolean;
}

export const DraggableContainer = styled.div<ContainerProps>`
  position: relative;
  display: flex;
  flex-direction: column;

  margin: 0.6rem 0;

  padding: 0.4rem;

  width: 100%;
  height: max-content;

  transition: 0.3s;

  transition: ${({ isExpanded }) => (isExpanded ? "1s" : "0.3s")};
  max-height: ${({ isExpanded }) => (isExpanded ? "100vh" : "2.6rem")};

  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.12);

  overflow: hidden;
`;

export const VariationGroupHeader = styled.div`
  width: 100%;
  height: 2rem;

  display: flex;
  flex-direction: row;
  justify-content: space-between;

  & > button {
    width: 32px;
    min-width: 32px;
    height: 32px;

    margin: 0;
    padding: 0;

    transform: scale(0.8);
  }
`;

export const LeftNode = styled.div`
  display: flex;
`;

export const RightNode = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  margin-right: 2rem;
`;

interface ArrowContainerProps {
  isExpanded: boolean;
}

export const ArrowContainer = styled.div<ArrowContainerProps>`
  margin: auto 0;

  cursor: pointer;

  transition: 0.3s;
  transform-origin: center center;
  transform: ${({ isExpanded }) => (isExpanded ? "rotateZ(90deg)" : "")};

  color: ${colors.primary};
`;

export const VariationGroupTitle = styled.div`
  height: 2rem;
  width: max-content;

  line-height: 2rem;

  margin-left: 2rem;
`;

export const DroppableContainer = styled.div<{ isDraggingOver?: boolean }>`
  position: relative;
  width: 100%;
  min-height: 6rem;
  height: max-content;

  transition: 0.2s;
  background: ${({ isDraggingOver }) =>
    isDraggingOver ? colors.gray : "#ffffff"};

  margin: 0.4rem 0;
  padding: 0 0.2rem;
`;

export const StyledConfirmModal = styled(Modal)`
  width: 20rem !important;
  height: max-content !important;
  margin: auto;
`;

export const StyledForm = styled.div`
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

export const StyledEditModal = styled(Modal)`
  width: 30rem !important;
  height: max-content !important;
  margin: auto;
`;

export const StyledPaper = styled(Paper)`
  width: 100% !important;
  height: 100% !important;

  padding: 1.4rem !important;
`;

export const StyledParagraph = styled.p`
  text-align: center;
`;

export const Buttons = styled(FlexRow)`
  width: 20rem;

  justify-content: space-evenly;

  margin-top: 2rem;
`;
