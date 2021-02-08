import styled from "styled-components";
import { colors, fonts } from "../../../../constants";

export const ConnectionForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Inputs = styled.div`
  height: max-content;
  width: 70%;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const BaseInput = styled.input`
  margin: 1rem 0;
  height: 1.7rem;
  font-family: ${fonts.Ubuntu};
  font-size: 0.9rem;

  transition: 0.4s;
  text-align: center;

  &::placeholder {
    font-size: 0.9rem;

    transition: 0.4s;
  }

  &:focus::placeholder {
    font-size: 0;
  }
`;

export const Herotag = styled(BaseInput)``;

export const Password = styled(BaseInput)``;

export const ChangeModePhrase = styled.div`
  margin: 0.6rem auto;
  font-family: ${fonts.Ubuntu};
`;

export const ChangeModeSpan = styled.span`
  color: ${colors.denimBlue};
  text-decoration: underline;

  cursor: pointer;
`;
