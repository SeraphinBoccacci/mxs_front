import styled from "styled-components";

import { colors, fonts } from "../../../../../constants";

export const AnchorsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 11rem;

  @media (min-width: 1000px) {
    width: 16rem;
  }
`;

export const Anchor = styled.label`
  position: relative;
  width: max-content;
  padding: 0 0.5rem;
  color: ${colors.secondary};
  font-size: 0.85rem;
  font-family: ${fonts.Ubuntu};
  line-height: 2rem;
  cursor: pointer;
  transition: 0.7s;

  @media (min-width: 800px) {
    font-size: 1rem;
  }

  &:hover {
    color: ${colors.quad};
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    border: solid 1px transparent;
    border-right: none;
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
    transition: 0.5s;
  }

  &:hover::before {
    width: 60%;
    border: solid 1px ${colors.quad};
    border-right: none;
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    width: 0;
    height: 100%;
    border: solid 1px transparent;
    border-left: none;
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
    transition: 0.5s;
  }

  &:hover::after {
    width: 60%;
    border: solid 1px ${colors.quad};
    border-left: none;
  }
`;
