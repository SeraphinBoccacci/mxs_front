import { Modal, Paper } from "@material-ui/core";
import styled from "styled-components";

import { colors } from "../../../../../../../constants";

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

  & > button {
    width: 32px;
    min-width: 32px;
    height: 32px;

    margin: 0;
    padding: 0;

    transform: scale(0.8);
  }
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

export const StyledModal = styled(Modal)`
  width: 20rem !important;
  height: 10rem !important;
  margin: auto;
`;

export const StyledPaper = styled(Paper)`
  width: 20rem !important;
  height: 10rem !important;
`;

export const StyledForm = styled.div`
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;
