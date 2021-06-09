import { Button, Modal, Paper } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import styled from "styled-components";

export const StyledModal = styled(Modal)`
  width: max-content;
  height: max-content;
  margin: auto;
`;

export const StyledPaper = styled(Paper)`
  width: 33rem;

  padding: 2rem;
`;

export const StyledButton = styled(Button)`
  height: 2rem;
  line-height: 2rem;

  margin: auto 0 auto 2rem !important;
`;

export const Form = styled.form`
  height: max-content;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

export const FormRow = styled.div`
  width: 100%;

  margin: 1rem 2rem;

  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
`;

export const StyledAlert = styled(Alert)`
  margin: 1rem 2rem;
`;
