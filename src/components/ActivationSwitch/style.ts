import { Switch } from "@material-ui/core";
import styled from "styled-components";

import { colors } from "../../constants/index";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 17rem;
  height: 3rem;
  margin: 3rem auto;
  border-radius: 6px;
  background-color: ${colors.secondary};
  color: ${colors.primary};
  line-height: 3rem;
`;

export const ActivateSwitch = styled(Switch)`
  margin: auto 0;
`;
