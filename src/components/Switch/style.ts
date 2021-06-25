import styled from "styled-components";

import { colors, fonts } from "../../constants";

export const SwitchContainer = styled.div<{ variant?: "inverted" }>`
  position: relative;
  z-index: 30;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 18rem;
  height: max-content;
  margin: 0 auto;
  padding: 0.2rem;
  border-radius: 20rem;
  background-color: ${({ variant }) =>
    variant === "inverted" ? `${colors.quad}44` : `${colors.primary}44`};
`;

export const CheckBackground = styled.div<{
  isActive: boolean;
  variant?: "inverted";
}>`
  position: absolute;
  left: ${({ isActive }) => (isActive ? "9.8rem" : "0.2rem")};
  z-index: 40;
  width: 8rem;
  height: calc(100% - 0.4rem);
  border-radius: 20rem;
  background-color: ${colors.primary};
  background-color: ${({ variant }) =>
    variant === "inverted" ? colors.quad : colors.primary};
  transition: 0.4s;
`;

export const Value = styled.div<{ variant?: "inverted" }>`
  position: relative;
  z-index: 50;
  width: 8rem;
  padding: 0.4rem 0.9rem;
  border-radius: 20rem;
  color: ${({ variant }) =>
    variant === "inverted" ? colors.primary : colors.secondary};
  font-family: ${fonts.Ubuntu};
  text-align: center;
  cursor: pointer;
  transition: 0.2s;
`;

export const OffValue = styled(Value)<{
  isActive: boolean;
  variant?: "inverted";
}>`
  color: ${({ isActive, variant }) =>
    variant === "inverted"
      ? isActive
        ? colors.secondary
        : colors.primary
      : isActive
      ? colors.primary
      : colors.secondary};
`;

export const OnValue = styled(Value)<{
  isActive: boolean;
  variant?: "inverted";
}>`
  color: ${({ isActive, variant }) =>
    variant === "inverted"
      ? isActive
        ? colors.primary
        : colors.secondary
      : isActive
      ? colors.secondary
      : colors.primary};
`;
