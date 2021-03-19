import styled from "styled-components";

import { colors, fonts } from "../../constants";

export const FooterContainer = styled.footer`
  background-color: ${colors.quad};

  width: 100vw;
  min-height: 50vh;
  height: max-content;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: left;

  padding: 3rem 4rem 1rem;

  @media (min-width: 800px) {
    padding: 2rem 5rem;
  }

  @media (min-width: 1000px) {
    padding: 2rem 10rem;
  }

  @media (min-width: 1200px) {
    padding: 2rem 15rem;
  }
`;

export const Columns = styled.div`
  width: 100%;
  height: 70%;

  display: flex;
  flex-direction: column;
  justify-content: space-around;

  @media (min-width: 800px) {
    flex-direction: row;
  }
`;

export const DoubleColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  width: 100%;

  padding: 4rem 0;

  @media (min-width: 800px) {
    width: 20rem;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;

  width: 10rem;

  margin-bottom: 3rem;

  &:nth-child(even) {
    margin-left: 50%;
  }

  &:nth-child(odd) {
    margin-right: 50%;
  }

  @media (min-width: 800px) {
    &:nth-child(even) {
      margin-left: 0;
    }

    &:nth-child(odd) {
      margin-right: 0;
    }
  }
`;

export const ColumnParagraph = styled.p`
  font-family: ${fonts.Ubuntu};
  text-align: justify;

  @media (min-width: 800px) {
    margin-right: 2rem;
  }
`;

export const ColumnTitle = styled.h5`
  margin: 1rem 0;

  font-size: 1.2rem;
  font-family: ${fonts.Roboto};
  color: ${colors.black};

  @media (min-width: 800px) {
    margin: 2rem 0;
  }
`;

export const ColumnItem = styled.span`
  margin: 0.7rem 0;
  font-size: 0.9rem;

  font-family: ${fonts.Ubuntu};
  color: ${colors.black};

  @media (min-width: 800px) {
    margin: 0.9rem 0;
  }
`;
