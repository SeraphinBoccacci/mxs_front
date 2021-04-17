import styled from "styled-components";

import { colors, fonts } from "../../../../constants";

interface OutlinedTextAreaProps {
  hasEndAdornment?: boolean;
}

export const OutlinedTextArea = styled.textarea<OutlinedTextAreaProps>`
  position: relative;
  display: block;
  z-index: 50;
  top: 0;
  left: 0;
  width: 100%;

  height: auto;

  outline: none;
  resize: none;

  border: none;
  background: none;

  line-height: 1.5rem;
  font-family: ${fonts.Roboto};
  font-size: 0.95rem;

  padding: 1rem 0;

  &:not(:placeholder-shown),
  &:focus {
    color: ${colors.secondary};
  }

  &:not(:placeholder-shown) + label,
  &:focus + label {
    font-size: 0.75rem;
    line-height: 0.75rem;
    top: -0.45rem;

    color: ${colors.quad};
  }

  &:not(:placeholder-shown) ~ div,
  &:focus ~ div {
    transform: scaleX(1);
  }
`;
