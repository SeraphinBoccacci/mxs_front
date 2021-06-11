import styled from "styled-components";

import { colors, fonts } from "../../../../constants";

interface OutlinedTextAreaProps {
  hasEndAdornment?: boolean;
}

export const OutlinedTextArea = styled.textarea<OutlinedTextAreaProps>`
  position: relative;
  top: 0;
  left: 0;
  z-index: 50;
  display: block;
  width: 100%;
  height: auto;
  padding: 1rem 0;
  border: none;
  outline: none;
  font-size: 0.95rem;
  font-family: ${fonts.Roboto};
  line-height: 1.5rem;
  resize: none;
  background: none;

  &:not(:placeholder-shown),
  &:focus {
    color: ${colors.secondary};
  }

  &:not(:placeholder-shown) + label,
  &:focus + label {
    top: -0.45rem;
    color: ${colors.quad};
    font-size: 0.75rem;
    line-height: 0.75rem;
  }

  &:not(:placeholder-shown) ~ div,
  &:focus ~ div {
    transform: scaleX(1);
  }
`;
