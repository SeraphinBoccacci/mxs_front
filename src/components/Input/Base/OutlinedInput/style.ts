import styled from "styled-components";

import { colors, fonts } from "../../../../constants";

interface OutlinedInputProps {
  hasEndAdornment?: boolean;
}

export const OutlinedInput = styled.input<OutlinedInputProps>`
  position: relative;
  top: 0.1rem;
  left: 0;
  z-index: 50;
  display: block;
  width: 100%;
  height: 2.5rem;
  padding: 0;
  border: none;
  outline: none;
  font-size: 0.95rem;
  font-family: ${fonts.Roboto};
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
