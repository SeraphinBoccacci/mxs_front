import { Switch } from "@material-ui/core";
import styled from "styled-components";

import { colors, fonts } from "../../../constants/index";

export const IftttParticleContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const IftttParticleForm = styled.form`
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
