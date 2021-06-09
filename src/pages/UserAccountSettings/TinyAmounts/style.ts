import { Button } from "@material-ui/core";
import styled from "styled-components";

import { FlexColumn } from "../../../styles/global";

export const StyledButton = styled(Button)`
  margin: 2rem auto 0 !important;
  width: 10rem;
`;

export const Inputs = styled(FlexColumn)`
  justify-content: space-evenly;
  align-items: center;

  height: max-content;
  width: 80vw;

  @media (min-width: 500px) {
    width: 25rem;
  }

  @media (min-width: 1000px) {
    width: 30rem;
  }
`;
