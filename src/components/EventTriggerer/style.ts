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
  margin: auto 0 auto 2rem !important;
  line-height: 2rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: max-content;
`;

export const FormRow = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  margin: 1rem 2rem;
`;

export const StyledAlert = styled(Alert)`
  margin: 1rem 2rem;
`;
