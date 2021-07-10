import { TextField } from "@material-ui/core";
import styled from "styled-components";

import { fonts } from "../../constants";

interface StyledTextFieldProps {
  fontFamily?: string;
}

export const StyledTextField = styled(TextField).attrs<StyledTextFieldProps>(
  ({ fontFamily }) => ({
    style: {
      fontFamily: `${fontFamily}, ${fonts.Roboto}, sans-serif`,
    },
  })
)<StyledTextFieldProps>`
  height: 2.5rem !important;
  & input {
    font-family: ${({ fontFamily }) =>
      `${fontFamily}, ${fonts.Roboto}, Arial, sans-serif !important;`};
  }

  & > div {
    padding: 2.5px 1.4rem !important;
  }

  & > label {
    transform: translate(14px, 14px) scale(1);
  }
`;
