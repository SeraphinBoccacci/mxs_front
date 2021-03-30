import { Button as MaterialButton } from "@material-ui/core";
import styled from "styled-components";

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
