import { Button, Modal as MaterialModal, Paper } from "@material-ui/core";
import styled from "styled-components";

import { fonts } from "../../../constants";
import { FlexRow, Paragraph } from "../../../styles/global";

export const Title = styled.h2`
  font-family: ${fonts.Roboto};
  font-size: 1.3rem;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-content: center;

  padding: 0 1rem;

  & > button {
    height: 2rem;
    margin: auto 0;
  }
`;

export const OverlaysContainer = styled.div`
  width: 50rem;
  height: max-content;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const Overlay = styled.div`
  margin: 3rem 0;
  width: 10rem;
  height: 10rem;
  background: red;
`;

export const StyledButton = styled(Button)`
  margin: 0 1rem !important;
`;

export const Modal = styled(MaterialModal)`
  width: 30rem;
  height: 16rem;

  margin: auto;

  border: none !important;
  outline: none !important;

  padding: 1rem !important;
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
