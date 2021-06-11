import styled from "styled-components";

import { colors, fonts } from "../../constants/index";

export const IftttParticleContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const IftttParticleForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 80vw;
  height: max-content;

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
  width: 80vw;
  color: ${colors.secondary};
  font-size: 0.85rem;
  font-family: ${fonts.Ubuntu};
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
    width: 35rem;
    line-height: 2rem;
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
  width: max-content;
  height: 2rem;
  margin: 1rem 2rem 1rem 0;
  border: none;
  border-radius: 5px;
  font-size: 0.9rem;
  font-family: ${fonts.Ubuntu};
  line-height: 2rem;
  text-align: center;
  transition: 0.4s;

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

  &::placeholder {
    font-size: 0.8rem;
  }

  &:focus::placeholder {
    font-size: 0;
  }
`;
