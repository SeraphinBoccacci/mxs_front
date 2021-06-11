import { Modal, Paper } from "@material-ui/core";
import styled from "styled-components";

import { colors } from "../../../../constants";
import { FlexRow, Title } from "../../../../styles/global";

export const Container = styled.div`
  width: 15rem;
  height: max-content;
  margin: 3rem 1rem;
  background: ${colors.soft_black};
`;

interface ImageContainerProps {
  color: string;
}

export const Header = styled(FlexRow)`
  justify-content: space-between;
  padding: 0 1rem;

  & button {
    width: 1.5rem !important;
    min-width: 1.5rem !important;
    padding: 0 !important;
  }
`;

export const StyledTitle = styled(Title)`
  overflow: hidden;
  width: 10rem;
  margin: 0.4rem 0;
  font-size: 1rem;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const ImageContainer = styled.div<ImageContainerProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 15rem;
  height: max-content;
  min-height: 8rem;
  background-color: ${({ color }) => color || colors.secondary};
`;

export const Image = styled.img`
  width: 4rem;
  height: 4rem;
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 100%;
  margin: 0.5rem 0;
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

export const StyledForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 100%;
`;

export const StyledParagraph = styled.p`
  text-align: center;
`;
