import { Button } from "@material-ui/core";
import styled from "styled-components";

import { colors } from "../../../constants";

export const Container = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100vw;
  height: 4rem;
  padding: 0 2rem;
  background: ${colors.primary};

  & button {
    height: 2.4rem;
    margin: auto 1rem;
  }
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: row;

  & > button {
    line-height: 1rem;
  }

  & > button:first-child > span > div > span:first-child {
    display: inline-block;
    font-size: 0.7rem !important;
    line-height: 0.7rem;
  }

  & > button:first-child > span > div > span:last-child {
    display: inline-block;
    font-size: 0.9rem !important;
    line-height: 0.9rem;
  }
`;

export const CopyButton = styled(Button)`
  width: 10rem;
`;

export const Link = styled.a`
  height: max-content;
  margin: auto;
`;
