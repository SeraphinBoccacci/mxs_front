import { Modal, Paper } from "@material-ui/core";
import styled from "styled-components";
import { colors, fonts } from "../../constants";

export const ModalContainer = styled(Modal)`
  width: 90vw;
  height: 120vw;

  max-width: 500px;
  max-height: 600px;

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

  font-size: 1.4rem;
  font-family: ${fonts.Roboto};
  color: ${colors.quad};

  @media (min-width: 800px) {
    font-size: 2rem;
  }
`;
