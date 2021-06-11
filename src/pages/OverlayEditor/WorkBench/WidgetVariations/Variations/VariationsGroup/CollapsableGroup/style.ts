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
  overflow: hidden;
  width: 100%;
  height: max-content;
  max-height: ${({ isExpanded }) => (isExpanded ? "100vh" : "0")};
  margin: 0.6rem 0;
  padding: 2.6rem 0.4rem 0.2rem;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.12);
  transition: 0.3s;
  transition: ${({ isExpanded }) => (isExpanded ? "1s" : "0.3s")};
`;

export const VariationGroupHeader = styled.div`
  position: absolute;
  top: 0.4rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: calc(100% - 0.8rem);
  height: 2rem;

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
  color: ${colors.primary};
  cursor: pointer;
  transform: ${({ isExpanded }) => (isExpanded ? "rotateZ(90deg)" : "")};
  transform-origin: center center;
  transition: 0.3s;
`;

export const VariationGroupTitle = styled.div`
  width: max-content;
  height: 2rem;
  margin-left: 2rem;
  line-height: 2rem;
`;

export const DroppableContainer = styled.div<{ isDraggingOver?: boolean }>`
  position: relative;
  width: 100%;
  height: max-content;
  min-height: 6rem;
  margin: 0.4rem 0;
  padding: 0 0.2rem;
  transition: 0.2s;
  background: ${({ isDraggingOver }) =>
    isDraggingOver ? colors.gray : "#ffffff"};
`;

export const StyledForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 100%;
`;

export const StyledModal = styled(Modal)`
  width: 20rem !important;
  height: max-content !important;
  margin: auto;
`;

export const ModalContent = styled(Paper)`
  padding: 1rem;
  border: none !important;
  outline: none !important;
`;

export const StyledParagraph = styled.p`
  text-align: center;
`;

export const Buttons = styled(FlexRow)`
  justify-content: space-evenly;
  width: 20rem;
  margin-top: 2rem;
`;
