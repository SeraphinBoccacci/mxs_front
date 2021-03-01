import styled from "styled-components";

import { colors, fonts } from "../../constants";

export const SwitchContainer = styled.div`
  position: relative;
  z-index: 30;
  width: 18rem;
  height: max-content;
  border-radius: 20rem;

  padding: 0.2rem;

  display: flex;
  flex-direction: row;
  justify-content: space-between;

  margin: 0 auto;

  background-color: ${colors.primary}44;
`;

export const CheckBackground = styled.div<{ isActive: boolean }>`
  position: absolute;
  z-index: 40;
  width: 8rem;
  height: calc(100% - 0.4rem);
  border-radius: 20rem;
  background-color: ${colors.primary};
  left: ${({ isActive }) => (isActive ? "9.8rem" : "0.2rem")};

  transition: 0.4s;
`;

export const Value = styled.div`
  position: relative;
  z-index: 50;

  border-radius: 20rem;
  width: 8rem;

  padding: 0.4rem 0.9rem;

  text-align: center;

  color: ${colors.secondary};
  font-family: ${fonts.Ubuntu};

  cursor: pointer;

  transition: 0.2s;
`;

export const OffValue = styled(Value)<{ isActive: boolean }>`
  color: ${({ isActive }) => (isActive ? colors.primary : colors.secondary)};
`;

export const OnValue = styled(Value)<{ isActive: boolean }>`
  color: ${({ isActive }) => (isActive ? colors.secondary : colors.primary)};
`;
