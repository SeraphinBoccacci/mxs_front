import { Button, Modal as MaterialModal, Paper } from "@material-ui/core";
import styled from "styled-components";

import { fonts } from "../../../constants";
import { FlexRow, Paragraph } from "../../../styles/global";

export const Title = styled.h2`
  font-size: 1.3rem;
  font-family: ${fonts.Roboto};
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: space-between;
  padding: 0 1rem;

  & > button {
    height: 2rem;
    margin: auto 0;
  }
`;

export const OverlaysContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 50rem;
  height: max-content;
`;

export const Overlay = styled.div`
  width: 10rem;
  height: 10rem;
  margin: 3rem 0;
`;

export const StyledButton = styled(Button)`
  margin: 0 1rem !important;
`;

export const Modal = styled(MaterialModal)`
  width: 30rem;
  height: 16rem;
  margin: auto;
  padding: 1rem !important;
  border: none !important;
  outline: none !important;
`;

export const ModalContent = styled(Paper)`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 100%;
  height: 100%;
  padding: 1rem;
  border: none !important;
  outline: none !important;
`;

export const StyledParagraph = styled(Paragraph)`
  font-size: 0.8rem;
  line-height: 1.1rem;
  text-align: center;
`;

export const Buttons = styled(FlexRow)`
  justify-content: space-evenly;
  padding: 0 4rem;
`;
