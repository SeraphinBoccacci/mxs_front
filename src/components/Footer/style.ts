import styled from "styled-components";
import { colors, colorsV2, fonts } from "../../constants";

export const FooterContainer = styled.footer`
  /* background-color: ${`linear-gradient(to top, ${colorsV2.quad}, white)`}; */
  background: ${`linear-gradient(to top, ${colorsV2.quad} 75%, ${colorsV2.secondary})`};

  width: 100vw;
  height: 50vh;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: left;

  padding: 2rem 20%;
`;

export const Columns = styled.div`
  width: 100%;
  height: 70%;

  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const DoubleColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  width: 20rem;

  padding: 4rem 0;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;

  width: 10rem;
`;

export const ColumnParagraph = styled.p`
  font-family: ${fonts.Ubuntu};
  text-align: justify;

  padding-right: 2rem;
`;

export const ColumnTitle = styled.h5`
  margin: 2rem 0;

  font-size: 1.1rem;
  font-family: ${fonts.Roboto};
  color: ${colors.eerieBlack};
`;

export const ColumnItem = styled.span`
  margin: 0.9rem 0;
  font-size: 0.9rem;

  font-family: ${fonts.Ubuntu};
  color: ${colors.eerieBlack};
`;
