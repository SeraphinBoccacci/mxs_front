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
  display: inline-flex;
  flex-direction: row;
  width: ${({ width }) => width || "100%"};
  height: max-content;
  margin: ${resolveMargins};
  padding: 0 1.4rem;
  border: ${({ isEmpty }) =>
    isEmpty ? `${colors.gray} solid 1.8px` : `${colors.gray}66 solid 1.8px`};
  border-radius: 4px;
  transition: 0.3s;

  &:focus-within {
    border-color: ${colors.gray}66;
  }
`;

export const InputLabel = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 40;
  display: block;
  flex: 1;
  overflow: hidden;
  max-width: 100%;
  height: 100%;
  padding: 0 1rem;
  color: ${colors.gray};
  line-height: 2.25rem;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: text;
  transition: 0.2s;
`;

interface AdornmentProps {
  isVisible?: boolean;
}

export const Adornment = styled.div<AdornmentProps>`
  position: relative;
  top: 0.1rem;
  z-index: 50;
  width: max-content;
  font-size: 0.95rem;
  font-family: ${fonts.Roboto};
  line-height: 2.5rem;
  text-align: right;
  transition-timing-function: cubic-bezier(0.165, 0.84, 0.44, 1);
  transition-duration: 0.3s;
  transform: scaleX(0);
  transform-origin: right;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
`;
