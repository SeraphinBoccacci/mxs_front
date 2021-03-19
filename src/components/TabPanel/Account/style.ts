import { Switch } from "@material-ui/core";
import styled from "styled-components";
import { colors } from "../../../constants/index";

export const AccountContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ActivateIntegration = styled.div`
  height: 2rem;
  line-height: 2rem;
  width: 17rem;
  display: flex;
  flex-direction: row;
  justify-content: center;

  margin: 1rem auto;

  border-radius: 6px;

  color: ${colors.secondary};

  @media (min-width: 800px) {
    height: 3rem;
    line-height: 3rem;

    margin: 3rem auto;
  }
`;

export const ActivateSwitch = styled(Switch)`
  margin: auto 0;
`;
