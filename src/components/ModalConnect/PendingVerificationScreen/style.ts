import styled, { keyframes } from "styled-components";
import { colors, fonts } from "../../../constants";
import MaterialAlert from "@material-ui/lab/Alert";

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
  color: ${colors.eerieBlack};
`;
export const TransactionReferenceHighlighted = styled.span`
  color: ${colors.denimBlue};
`;

export const Alert = styled(MaterialAlert)`
  margin: 0 1rem;
`;
