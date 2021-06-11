import { Button as MaterialButton } from "@material-ui/core";
import styled from "styled-components";

export const ChatBotGeneratorForm = styled.div`
  width: 100%;
  margin: 1rem 0 3rem;

  @media (min-width: 30rem) {
    width: 25rem;
  }

  @media (min-width: 35rem) {
    width: 30rem;
  }
`;

export const Button = styled(MaterialButton)`
  width: 10rem !important;
  margin: 0.3rem auto !important;
`;
