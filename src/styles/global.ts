import styled from "styled-components";

import { colors, fonts } from "../constants";

export const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
`;

export const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LogoContainer = styled.div`
  background-color: ${colors.secondary};
  height: max-content;
  width: max-content;
  padding: 0.5rem 1rem;
  margin: auto 0;
  border-radius: 10px;
  box-shadow: 0 8px 6px -6px ${colors.black};
`;

export const Text = styled.p`
  width: 100%;
  color: ${colors.secondary};
  font-family: ${fonts.Ubuntu};
  font-size: 0.8rem;
  line-height: 1.2rem;
  text-align: justify;

  margin: 0.5rem auto;
  padding: 0 0.6rem;

  @media (min-width: 500px) {
    font-size: 1.1rem;
    line-height: 1.7rem;

    margin: 1rem auto 0.5;
    padding: 0 1.2rem;
  }
`;

export const Emphasize = styled.span`
  background-color: ${colors.quad};
  color: ${colors.primary};
  margin: 0 0.1rem;
  padding: 0.1rem 0.4rem;

  border-radius: 99px;
`;

export const Link = styled.a`
  position: relative;
  font-size: 0.8rem;
  padding: 0 0.2rem;

  cursor: pointer;

  &::before {
    display: block;
    position: absolute;
    content: "";

    bottom: 1px;
    left: 0;
    width: 100%;
    height: 1px;

    transition: 0.2s;

    background-color: ${colors.quad}55;
  }

  &:hover::before {
    height: 3px;

    background-color: ${colors.quad};
  }
`;
