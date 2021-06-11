import { Button as MaterialButton, Modal, Paper } from "@material-ui/core";
import styled from "styled-components";

import { colors, fonts } from "../../constants";

export const ModalContainer = styled(Modal)`
  width: 90vw;
  max-width: 500px;
  height: 120vw;
  max-height: 600px;
  margin: auto;
`;

export const ModalContent = styled(Paper)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  outline: none !important;
`;

export const FormTitle = styled.h3`
  width: max-content;
  margin: 1.5rem auto;
  color: ${colors.quad};
  font-size: 1.4rem;
  font-family: ${fonts.Roboto};
  letter-spacing: 2px;

  @media (min-width: 800px) {
    font-size: 2rem;
  }
`;

export const ConnectionForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Inputs = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 70%;
  height: max-content;
  margin: 1rem auto;

  @media (min-width: 700px) {
    margin: 3rem auto;
  }
`;

export const Button = styled(MaterialButton)`
  width: max-content !important;
  margin: 0 auto !important;
  padding: 0.4rem 2rem !important;
`;

export const ChangeModePhrase = styled.div`
  margin: 0.6rem auto;
  margin-bottom: 1.7rem;
  padding: 0.5rem 2.2rem;
  border-radius: 999px;
  color: ${colors.secondary};
  box-shadow: 0 8px 6px -6px ${colors.black};
  font-size: 0.8rem;
  font-family: ${fonts.Ubuntu};
  line-height: 1rem;
  background: ${colors.primary};
`;

export const ChangeModeSpan = styled.span`
  margin-left: 1rem;
  color: ${colors.quad};
  cursor: pointer;
`;

export const RecoveryActionsCTAs = styled.div``;

export const RecoveryActionCTA = styled.div`
  position: relative;
  width: max-content;
  margin: auto;
  padding: 0.2rem 0.6rem;
  color: ${colors.quad};
  font-size: 0.8rem;
  font-family: ${fonts.Roboto};
  text-align: center;
  transition: 0.8s;
  &:hover {
    color: ${colors.primary};
  }
  & > label {
    position: relative;
    z-index: 30;
    cursor: pointer;
  }
  & > div {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 0%;
    border-radius: 99px;
    background-color: ${colors.quad};
    transition: 0.2s;
  }
  &:hover > div {
    height: 100%;
  }
`;
