import { Chip } from "@material-ui/core";
import styled from "styled-components";
import { colors, colorsV2, fonts } from "../../../constants";

export const ConnectionForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Inputs = styled.div`
  height: max-content;
  width: 70%;
  margin: 3rem auto;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const BaseInput = styled.input`
  margin: 1rem auto;
  width: 20rem;
  height: 2.1rem;
  font-family: ${fonts.Ubuntu};
  border-radius: 10px;
  border: none;
  font-size: 0.9rem;

  transition: 0.4s;
  text-align: center;

  box-shadow: 0 8px 6px -6px ${colorsV2.black};

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
  margin-bottom: 1.7rem;
  padding: 0.3rem 1.8rem;
  border-radius: 999px;
  background: ${colorsV2.quad};
  font-family: ${fonts.Ubuntu};
  color: ${colorsV2.soft_black};
  box-shadow: 0 8px 6px -6px ${colorsV2.black};
`;

export const ChangeModeSpan = styled.span`
  color: ${colors.denimBlue};
  text-decoration: underline;

  cursor: pointer;
`;
