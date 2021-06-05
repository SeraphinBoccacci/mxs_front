import { Paper } from "@material-ui/core";
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
  position: relative;
  background-color: ${colors.quad};
  color: ${colors.primary};
  margin: 0 0.1rem;
  padding: 0.1rem 0.4rem;

  border-radius: 99px;

  & > a::before {
    position: absolute;
    content: "";
    left: 0;
    bottom: 0;
    height: 1px;
    background-color: ${colors.primary};
    width: 100%;

    transition: 0.1s;
  }

  & > a:hover::before {
    height: 3px;
  }
`;

export const Link = styled.a`
  position: relative;

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

export const ContentContainer = styled(Paper)`
  width: 90vw !important;

  height: max-content !important;
  margin: 1rem auto !important;
  padding: 0.5rem 0.6rem !important;

  display: flex;
  flex-direction: column;

  @media (min-width: 500px) {
    margin: 1.4rem auto !important;
    padding: 1rem 2rem !important;

    width: max-content !important;
  }

  @media (min-width: 800px) {
    margin: 2rem auto !important;
    padding: 0.8rem 3rem !important;
  }

  @media (min-width: 1100px) {
    margin: 3rem auto !important;
    padding: 1rem 4rem !important;
  }
`;

export const Title = styled.h3`
  color: ${colors.secondary};
  font-family: ${fonts.Ubuntu};
  font-size: 1.4rem;
  line-height: 2rem;
  text-align: center;
  width: 100%;
`;

export const Paragraph = styled.p`
  color: ${colors.secondary};
  font-family: ${fonts.Ubuntu};
  font-size: 0.9rem;
  line-height: 1.6rem;
  text-align: justify;
  max-width: 20rem;

  margin: 0.6rem 0;

  @media (min-width: 700px) {
    font-size: 1rem;
    max-width: 30rem;
  }

  @media (min-width: 1000px) {
    max-width: 40rem;
    font-size: 1.1rem;
    line-height: 2rem;
  }
`;
