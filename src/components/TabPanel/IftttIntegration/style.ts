import { Switch } from "@material-ui/core";
import styled from "styled-components";
import { colors, colorsV2, fonts } from "../../../constants/index";
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

  height: 10rem;
`;

export const Paragraph = styled.p`
  color: ${colorsV2.secondary};
  font-family: ${fonts.Ubuntu};
  font-size: 1.1rem;
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

export const FormInputAndLabel = styled.div`
  display: flex;
  flex-direction: row;
  width: max-content;
  align-items: center;
`;
export const FormLabel = styled.label`
  color: ${colors.cultured};
  margin: 0 1rem;
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

  color: ${colors.denimBlue};
  background-color: ${colors.cultured};
`;

export const ActivateSwitch = styled(Switch)`
  margin: auto 0;
`;
