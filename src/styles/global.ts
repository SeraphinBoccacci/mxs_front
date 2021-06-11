import { Paper } from "@material-ui/core";
import styled from "styled-components";

import { colors, fonts } from "../constants";

export const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LogoContainer = styled.div`
  width: max-content;
  height: max-content;
  margin: auto 0;
  padding: 0.5rem 1rem;
  border-radius: 10px;
  background-color: ${colors.secondary};
  box-shadow: 0 8px 6px -6px ${colors.black};
`;

export const Text = styled.p`
  width: 100%;
  margin: 0.5rem auto;
  padding: 0 0.6rem;
  color: ${colors.secondary};
  font-size: 0.8rem;
  font-family: ${fonts.Ubuntu};
  line-height: 1.2rem;
  text-align: justify;

  @media (min-width: 500px) {
    margin: 1rem auto 0.5;
    padding: 0 1.2rem;
    font-size: 1.1rem;
    line-height: 1.7rem;
  }
`;

export const Emphasize = styled.span`
  position: relative;
  margin: 0 0.1rem;
  padding: 0.1rem 0.4rem;
  border-radius: 99px;
  background-color: ${colors.quad};
  color: ${colors.primary};

  & > a::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: ${colors.primary};
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
    content: "";
    position: absolute;
    bottom: 1px;
    left: 0;
    display: block;
    width: 100%;
    height: 1px;
    background-color: ${colors.quad}55;
    transition: 0.2s;
  }

  &:hover::before {
    height: 3px;
    background-color: ${colors.quad};
  }
`;

export const ContentContainer = styled(Paper)`
  display: flex;
  flex-direction: column;
  width: 90vw !important;
  height: max-content !important;
  margin: 1rem auto !important;
  padding: 0.5rem 0.6rem !important;

  @media (min-width: 500px) {
    width: max-content !important;
    margin: 1.4rem auto !important;
    padding: 1rem 2rem !important;
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
  width: 100%;
  color: ${colors.secondary};
  font-size: 1.4rem;
  font-family: ${fonts.Ubuntu};
  line-height: 2rem;
  text-align: center;
`;

export const Paragraph = styled.p`
  max-width: 20rem;
  margin: 0.6rem 0;
  color: ${colors.secondary};
  font-size: 0.9rem;
  font-family: ${fonts.Ubuntu};
  line-height: 1.6rem;
  text-align: justify;

  @media (min-width: 700px) {
    max-width: 30rem;
    font-size: 1rem;
  }

  @media (min-width: 1000px) {
    max-width: 40rem;
    font-size: 1.1rem;
    line-height: 2rem;
  }
`;
