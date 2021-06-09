import { Modal, Paper } from "@material-ui/core";
import styled from "styled-components";

import { colors } from "../../../../constants";
import { FlexRow, Title } from "../../../../styles/global";

export const Container = styled.div`
  margin: 3rem 1rem;
  width: 15rem;
  height: max-content;
  background: ${colors.soft_black};
`;

interface ImageContainerProps {
  color: string;
}

export const Header = styled(FlexRow)`
  padding: 0 1rem;
  justify-content: space-between;

  & button {
    width: 1.5rem !important;
    min-width: 1.5rem !important;
    padding: 0 !important;
  }
`;

export const StyledTitle = styled(Title)`
  width: 10rem;

  margin: 0.4rem 0;
  font-size: 1rem;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const ImageContainer = styled.div<ImageContainerProps>`
  width: 15rem;
  min-height: 8rem;
  height: max-content;

  background-color: ${({ color }) => color || colors.secondary};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Image = styled.img`
  width: 4rem;
  height: 4rem;
`;

export const Buttons = styled.div`
  width: 100%;
  margin: 0.5rem 0;

  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

export const StyledModal = styled(Modal)`
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

export const StyledPaper = styled(Paper)`
  width: 100% !important;
  height: 100% !important;

  padding: 1.4rem !important;
`;

export const StyledParagraph = styled.p`
  text-align: center;
`;
