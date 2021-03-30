import { Switch } from "@material-ui/core";
import styled from "styled-components";

import { colors } from "../../../constants/index";

export const Container = styled.div`
  height: 3rem;
  line-height: 3rem;
  width: 17rem;
  display: flex;
  flex-direction: row;
  justify-content: center;

  margin: 3rem auto;

  border-radius: 6px;

  color: ${colors.primary};
  background-color: ${colors.secondary};
`;

export const ActivateSwitch = styled(Switch)`
  margin: auto 0;
`;
