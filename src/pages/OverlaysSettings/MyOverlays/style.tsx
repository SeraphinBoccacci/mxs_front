import { Button } from "@material-ui/core";
import styled from "styled-components";

import { fonts } from "../../../constants";

export const Title = styled.h2`
  font-family: ${fonts.Roboto};
  font-size: 1.3rem;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-content: center;

  padding: 0 1rem;

  & > button {
    height: 2rem;
    margin: auto 0;
  }
`;

export const OverlaysContainer = styled.div`
  width: 50rem;
  height: max-content;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const Overlay = styled.div`
  margin: 3rem 0;
  width: 10rem;
  height: 10rem;
  background: red;
`;

export const StyledButton = styled(Button)`
  margin: 0 1rem !important;
`;
