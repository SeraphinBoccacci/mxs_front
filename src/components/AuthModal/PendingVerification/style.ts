import { Button as MaterialButton } from "@material-ui/core";
import MaterialAlert from "@material-ui/lab/Alert";
import styled, { keyframes } from "styled-components";

import { colors, fonts } from "../../../constants";

const appearFirstDot = keyframes`
 0% {
    opacity: 0;
  }

  24% {
    opacity: 0;
  }

  25% {
    opacity: 1;
  }

  100% {
    opacity: 1;
  }
`;

export const FirstDot = styled.span`
  animation: ${appearFirstDot} 3s linear infinite;
`;

const appearSecondDot = keyframes`
 0% {
    opacity: 0;
  }

  49% {
    opacity: 0;
  }

  50% {
    opacity: 1;
  }

  100% {
    opacity: 1;
  }
`;

export const SecondDot = styled.span`
  animation: ${appearSecondDot} 3s linear infinite;
`;

const appearThirdDot = keyframes`
  0% {
    opacity: 0;
  }

  74% {
    opacity: 0;
  }

  75% {
    opacity: 1;
  }

  100% {
    opacity: 1;
  }
`;

export const ThirdDot = styled.span`
  animation: ${appearThirdDot} 3s linear infinite;
`;

export const TransactionReferenceP = styled.p`
  text-align: center;
  margin: 0 2rem;
  font-family: ${fonts.Ubuntu};
  color: ${colors.secondary};

  font-size: 0.8rem;

  @media (min-width: 800px) {
    font-size: 1rem;
  }
`;
export const TransactionReferenceHighlighted = styled.span`
  color: ${colors.quad};
`;

export const Alert = styled(MaterialAlert)`
  margin: 0 1rem;
`;

export const Button = styled(MaterialButton)`
  width: max-content !important;

  margin: 0 auto !important;
  padding: 0.4rem 2rem !important;
  margin-bottom: 1.8rem !important;
`;

export const Column = styled.div`
  width: 100%;
  height: 100%;

  padding: 2rem 1.4rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const ReferenceAndAlert = styled.div`
  width: 100%;
  height: 10rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
