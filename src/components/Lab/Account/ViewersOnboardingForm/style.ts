import { Button as MaterialButton } from "@material-ui/core";
import styled from "styled-components";

import { FlexColumn } from "../../../../styles/global";

export const FormContent = styled(FlexColumn)`
  height: 30rem;
  width: 100%;
  justify-content: space-evenly;
`;

export const Button = styled(MaterialButton)`
  margin: 0.3rem 1rem !important;
`;
