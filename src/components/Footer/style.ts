import { Modal, Paper } from "@material-ui/core";
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
  height: max-content;

  width: 100%;

  margin: auto;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: left;

  @media (min-width: 800px) {
    flex-direction: row;
  }

  @media (min-width: 35rem) {
    width: 30rem;
  }

  @media (min-width: 45rem) {
    width: 40rem;
  }

  @media (min-width: 55rem) {
    width: 50rem;
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
  margin: 1rem 0 0.8rem;

  font-size: 1.5rem;
  font-family: ${fonts.Roboto};
  font-variant: small-caps;

  color: ${colors.black};

  @media (min-width: 800px) {
    margin: 2rem 0 1rem;
  }
`;

export const ColumnItem = styled.div`
  position: relative;

  height: 2rem;

  display: flex;
  flex-direction: row;
  align-items: center;

  margin: 0;
  margin-left: 0.2rem;

  font-size: 1rem;

  width: max-content;

  font-family: ${fonts.Ubuntu};
  color: ${colors.black};

  cursor: pointer;

  & > span {
    margin: 0 1rem 0 0;
  }

  &::before {
    position: absolute;
    content: "";
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background-color: ${colors.primary};

    transition: 0.6s cubic-bezier(0.39, 0.575, 0.565, 1);
  }

  &:hover::before {
    position: absolute;
    content: "";
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: ${colors.primary};
  }
`;

export const ElgdSymbol = styled.span`
  content: "¤";

  font-family: ${fonts.Ubuntu};
  font-size: 2rem;
`;

export const StyledModal = styled(Modal)`
  width: 20rem;
  height: 30rem;
  margin: auto !important;

  outline: none !important;
  border: none !important;

  overflow: scroll;

  @media (min-width: 35rem) {
    width: 30rem;
  }

  @media (min-width: 45rem) {
    width: 40rem;
    height: max-content;
  }
`;

export const FooterModalContent = styled(Paper)`
  padding: 1rem 3rem !important;

  outline: none !important;
  border: none !important;
`;

export const FooterModalTitle = styled.h3`
  text-align: center;
  font-family: ${fonts.Roboto};
  font-size: 1.4rem;

  margin: 0.6rem 0;

  @media (min-width: 35rem) {
    font-size: 1.7rem;
    margin: 0.8rem 0;
  }

  @media (min-width: 45rem) {
    font-size: 2rem;
    margin: 1rem 0;
  }
`;

export const FooterModalParagraph = styled.p`
  text-align: justify;
  text-align-last: center;
  font-family: ${fonts.Ubuntu};
  font-size: 0.8rem;
  line-height: 1rem;

  @media (min-width: 35rem) {
    font-size: 0.85rem;
    line-height: 1.3rem;
  }

  @media (min-width: 45rem) {
    font-size: 0.9rem;
    line-height: 1.6rem;
  }
`;

export const StyledUlParagraph = styled(FooterModalParagraph)`
  margin-top: 3rem;
  text-align-last: left;
`;

export const StyledUl = styled.ol`
  font-family: ${fonts.Ubuntu};
  font-size: 0.8rem;
  line-height: 1rem;

  margin-left: 1rem;

  @media (min-width: 35rem) {
    font-size: 0.85rem;
    line-height: 1.3rem;
  }

  @media (min-width: 45rem) {
    font-size: 1rem;
    line-height: 1.6rem;
  }
`;

export const StyledLi = styled.li``;

export const StyledComment = styled.span`
  font-size: 0.65rem;
`;
