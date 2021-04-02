import { Button as MaterialButton } from "@material-ui/core";
import styled from "styled-components";

import { colors, fonts } from "../../../../constants";
import { FlexColumn } from "../../../../styles/global";

export const FormContent = styled(FlexColumn)`
  height: 30rem;
  width: 100%;
  justify-content: space-evenly;
`;

export const Button = styled(MaterialButton)`
  margin: 0.3rem 1rem !important;
`;

export const HowTo = styled.div`
  position: relative;
  font-family: ${fonts.Roboto};
  width: max-content;
  color: ${colors.quad};
  margin: 0 auto;

  cursor: pointer;

  outline: none !important;

  & > img {
    position: fixed;
    width: 0;
    z-index: 100;

    left: 50%;
    top: 50%;

    border-radius: 0.5rem;

    transform: translateX(-50%) translateY(-50%);
    opacity: 0;

    transition: 0.4s;

    cursor: none;
  }

  &:focus > img {
    opacity: 1;
    width: 80vw;
  }

  @media (min-width: 400px) {
    & > img {
      border-radius: 0.5rem;
    }

    &:focus > img {
      opacity: 1;
      width: 17rem;
    }
  }
`;
