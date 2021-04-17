import { Button as MaterialButton } from "@material-ui/core";
import styled from "styled-components";

export const ChatBotGeneratorForm = styled.div`
  margin: 1rem 0 3rem;
  width: 100%;

  @media (min-width: 30rem) {
    width: 25rem;
  }

  @media (min-width: 35rem) {
    width: 30rem;
  }
`;

export const Button = styled(MaterialButton)`
  margin: 0.3rem auto !important;
  width: 10rem !important;
`;
