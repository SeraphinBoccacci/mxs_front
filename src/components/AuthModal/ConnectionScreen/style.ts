import { Button as MaterialButton } from "@material-ui/core";
import styled from "styled-components";

import { colors, fonts } from "../../../constants";

export const ConnectionForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Inputs = styled.div`
  height: max-content;
  width: 70%;
  margin: 1rem auto;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  @media (min-width: 700px) {
    margin: 3rem auto;
  }
`;

const BaseInput = styled.input`
  margin: 1rem auto;
  width: 15rem;
  height: 2.1rem;
  font-family: ${fonts.Ubuntu};
  border-radius: 10px;
  border: none;
  font-size: 0.9rem;

  transition: 0.4s;
  text-align: center;

  box-shadow: 0 8px 6px -6px ${colors.black};

  &::placeholder {
    font-size: 0.9rem;

    transition: 0.4s;
  }

  &:focus::placeholder {
    font-size: 0;
  }

  @media (min-width: 700px) {
    width: 17rem;
  }

  @media (min-width: 900px) {
    width: 20rem;
  }
`;

export const Button = styled(MaterialButton)`
  width: max-content !important;

  margin: 0 auto !important;
  padding: 0.4rem 2rem !important;
`;

export const Herotag = styled(BaseInput)``;

export const Password = styled(BaseInput)``;

export const ChangeModePhrase = styled.div`
  margin: 0.6rem auto;
  margin-bottom: 1.7rem;
  padding: 0.5rem 2.2rem;
  border-radius: 999px;
  font-size: 0.8rem;
  line-height: 1rem;
  background: ${colors.primary};
  font-family: ${fonts.Ubuntu};
  color: ${colors.secondary};
  box-shadow: 0 8px 6px -6px ${colors.black};
`;

export const ChangeModeSpan = styled.span`
  margin-left: 1rem;
  color: ${colors.quad};

  cursor: pointer;
`;
