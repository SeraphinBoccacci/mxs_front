import { Button as MaterialButton } from "@material-ui/core";
import styled from "styled-components";

import { colors, fonts } from "../../../constants";
import { FlexColumn } from "../../../styles/global";

export const FormContent = styled(FlexColumn)`
  justify-content: space-evenly;
  width: 100%;
  height: 30rem;
`;

export const Button = styled(MaterialButton)`
  margin: 0.3rem 1rem !important;
`;

export const HowTo = styled.div`
  position: relative;
  width: max-content;
  margin: 0 auto;
  color: ${colors.quad};
  outline: none !important;
  font-family: ${fonts.Roboto};
  cursor: pointer;

  @media (min-width: 400px) {
    & > img {
      border-radius: 0.5rem;
    }

    &:focus > img {
      width: 17rem;
      opacity: 1;
    }
  }

  & > img {
    position: fixed;
    top: 50%;
    left: 50%;
    z-index: 100;
    width: 0;
    border-radius: 0.5rem;
    cursor: none;
    transform: translateX(-50%) translateY(-50%);
    opacity: 0;
    transition: 0.4s;
  }

  &:focus > img {
    width: 80vw;
    opacity: 1;
  }
`;
