import { TextField } from "@material-ui/core";
import styled from "styled-components";

export const StyledTextField = styled(TextField)`
  height: 2.5rem !important;

  & > div {
    padding: 2.5px 1.4rem !important;
  }

  & > label {
    transform: translate(14px, 14px) scale(1);
  }
`;
