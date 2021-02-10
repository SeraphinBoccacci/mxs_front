import { Modal, Paper } from "@material-ui/core";
import styled from "styled-components";
import { colorsV2, fonts } from "../../constants";

export const ModalContainer = styled(Modal)`
  width: 500px;
  height: 600px;

  margin: auto;
`;

export const ModalContent = styled(Paper)`
  width: 100%;
  height: 100%;

  outline: none !important;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const FormTitle = styled.h3`
  margin: 1.5rem auto;
  letter-spacing: 2px;
  width: max-content;

  font-size: 2rem;
  font-family: ${fonts.Roboto};
  color: ${colorsV2.quad};
`;
