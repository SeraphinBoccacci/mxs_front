import { Button } from "@material-ui/core";
import styled from "styled-components";

import { FlexColumn } from "../../../styles/global";

export const StyledButton = styled(Button)`
  width: 10rem;
  margin: 2rem auto 0 !important;
`;

export const Inputs = styled(FlexColumn)`
  align-items: center;
  justify-content: space-evenly;
  width: 80vw;
  height: max-content;

  @media (min-width: 500px) {
    width: 25rem;
  }

  @media (min-width: 1000px) {
    width: 30rem;
  }
`;
