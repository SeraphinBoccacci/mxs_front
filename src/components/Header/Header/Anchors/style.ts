import styled from "styled-components";

import { colors, fonts, weights } from "../../../../constants";

export const AnchorsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  width: 20rem;
  margin-left: -10%;
`;

export const Anchor = styled.label`
  position: relative;
  color: ${colors.secondary};
  font-family: ${fonts.Ubuntu};
  font-weight: ${weights.Ubuntu.thin};
  font-size: 1rem;

  transition: 0.7s;

  padding: 0.1rem 0.6rem;

  line-height: 2rem;

  width: max-content;

  cursor: pointer;

  &:hover {
    color: ${colors.quad};
  }

  &::before {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    height: 100%;
    width: 0;

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
    position: absolute;
    content: "";
    top: 0;
    right: 0;
    height: 100%;
    width: 0;

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
