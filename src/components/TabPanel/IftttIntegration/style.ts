import { Switch } from "@material-ui/core";
import styled from "styled-components";
import { colors, fonts } from "../../../constants/index";
import Button from "@material-ui/core/Button";

export const IftttIntegrationContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const IftttIntegrationForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  height: max-content;
  width: 80vw;

  @media (min-width: 500px) {
    width: 25rem;
  }

  @media (min-width: 600px) {
    width: 30rem;
  }

  @media (min-width: 800px) {
    width: 40rem;
  }

  @media (min-width: 1000px) {
    width: 50rem;
  }
`;

export const Paragraph = styled.p`
  color: ${colors.secondary};
  font-family: ${fonts.Ubuntu};
  font-size: 0.85rem;
  width: 80vw;
  text-align: center;

  @media (min-width: 500px) {
    width: 20rem;
    font-size: 0.9rem;
  }

  @media (min-width: 900px) {
    width: 25rem;
    font-size: 1rem;
  }

  @media (min-width: 1000px) {
    width: 30rem;
    font-size: 1.1rem;
  }

  @media (min-width: 1250px) {
    line-height: 2rem;
    width: 35rem;
  }
`;

export const HideButton = styled(Button)`
  position: absolute !important;

  top: 3rem;
  right: 3rem;
`;

export const TutorialButtonContainer = styled.div`
  position: relative;
  width: 50rem;
  height: max-content;

  margin: 0 auto;
`;

export const FormInputs = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;

  margin: 1rem 0 2.5rem;
`;

export const FormInputAndLabel = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  max-width: 100%;

  margin: 1rem 0;

  @media (min-width: 600px) {
    flex-direction: row;
    margin: 0.2rem 0;
  }
`;
export const FormLabel = styled.label`
  color: ${colors.secondary};
  margin: 0 1rem;
  font-size: 0.8rem;

  @media (min-width: 800px) {
    font-size: 0.9rem;
  }

  @media (min-width: 1000px) {
    font-size: 1rem;
  }
`;
export const FormInput = styled.input`
  display: inline-block;
  height: 2rem;
  line-height: 2rem;
  width: max-content;

  margin: 1rem 2rem 1rem 0;
  font-family: ${fonts.Ubuntu};
  font-size: 0.9rem;

  transition: 0.4s;
  text-align: center;

  border-radius: 5px;
  border: none;

  &::placeholder {
    font-size: 0.8rem;
  }

  @media (min-width: 800px) {
    &::placeholder {
      font-size: 0.9rem;
    }
  }

  @media (min-width: 1000px) {
    &::placeholder {
      font-size: 1rem;
    }
  }

  &:focus::placeholder {
    font-size: 0;
  }
`;

export const EventNameInput = styled(FormInput)`
  width: 10rem;

  &::placeholder {
    font-size: 0.9rem;

    transition: 0.4s;
  }

  &:focus::placeholder {
    font-size: 0;
  }
`;

export const TriggerKeyInput = styled(FormInput)`
  width: 20rem;

  &::placeholder {
    font-size: 0.7rem;

    transition: 0.4s;
  }
`;

export const ActivateIntegration = styled.div`
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
