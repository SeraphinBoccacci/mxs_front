import styled from "styled-components";

import { colors, fonts } from "../../../constants";

interface InputContainerProps {
  isEmpty: boolean;
  centered?: boolean;
  width?: string;
  withoutMargin?: boolean;
}

const resolveMargins = ({ withoutMargin, centered }: InputContainerProps) => {
  if (withoutMargin) return "0";

  if (centered) return "1rem auto";

  return "1rem 0";
};

export const InputContainer = styled.div<InputContainerProps>`
  position: relative;
  width: ${({ width }) => width || "100%"};
  height: max-content;
  margin: ${resolveMargins};

  display: inline-flex;
  flex-direction: row;

  border: ${({ isEmpty }) =>
    isEmpty ? `${colors.gray} solid 1.8px` : `${colors.gray}66 solid 1.8px`};

  border-radius: 4px;
  padding: 0 1.4rem;

  transition: 0.3s;

  &:focus-within {
    border-color: ${colors.gray}66;
  }
`;

export const InputLabel = styled.label`
  display: block;
  position: absolute;
  z-index: 40;
  top: 0;
  left: 0;

  height: 100%;
  max-width: 100%;
  flex: 1;

  line-height: 2.25rem;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;

  padding: 0 1rem;

  transition: 0.2s;

  color: ${colors.gray};

  cursor: text;
`;

interface AdornmentProps {
  isVisible?: boolean;
}

export const Adornment = styled.div<AdornmentProps>`
  position: relative;
  top: 0.1rem;
  width: max-content;
  z-index: 50;

  line-height: 2.5rem;
  text-align: right;

  font-family: ${fonts.Roboto};
  font-size: 0.95rem;

  transition: 0.3s;
  transform: scaleX(0);
  transition-timing-function: cubic-bezier(0.165, 0.84, 0.44, 1);
  transform-origin: right;

  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
`;
