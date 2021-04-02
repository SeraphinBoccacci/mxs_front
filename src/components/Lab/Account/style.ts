import { Button as MaterialButton } from "@material-ui/core";
import styled from "styled-components";

import { fonts } from "../../../constants";

export const AccountContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Button = styled(MaterialButton)`
  margin: 0.8rem 0 !important;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  height: max-content;
  width: 80vw;

  @media (min-width: 500px) {
    width: 25rem;
  }

  @media (min-width: 1000px) {
    width: 30rem;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  width: 100%;
`;

export const FormCaption = styled.p`
  font-family: ${fonts.Roboto};
  font-size: 0.85rem;
  text-align: justify;
  text-align-last: left;

  margin: 1rem auto 3rem;
`;

export const Comment = styled.p`
  width: 100%;
  height: 2rem;
  line-height: 1rem;
  font-family: ${fonts.Ubuntu};
  font-size: 0.75rem;
  text-align: center;

  margin: 0 auto 1rem;
`;
