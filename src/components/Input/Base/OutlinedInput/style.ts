import styled from "styled-components";

import { colors, fonts } from "../../../../constants";

interface OutlinedInputProps {
  hasEndAdornment?: boolean;
}

export const OutlinedInput = styled.input<OutlinedInputProps>`
  position: relative;
  z-index: 50;
  display: block;
  top: 0.1rem;
  left: 0;

  width: 100%;
  height: 2.5rem;
  padding: 0;
  outline: none;

  border: none;
  background: none;

  font-family: ${fonts.Roboto};
  font-size: 0.95rem;

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
