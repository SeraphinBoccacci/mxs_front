import { Modal, Paper } from "@material-ui/core";
import styled from "styled-components";

import { colors, fonts } from "../../../constants";

export const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: space-evenly;
  width: 100vw;
  height: max-content;
  min-height: 50vh;
  padding: 3rem 4rem 1rem;
  background-color: ${colors.quad};

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
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: space-around;
  width: 100%;
  height: max-content;
  margin: auto;

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
  color: ${colors.black};
  font-variant: small-caps;
  font-size: 1.5rem;
  font-family: ${fonts.Roboto};

  @media (min-width: 800px) {
    margin: 2rem 0 1rem;
  }
`;

export const ColumnItem = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: max-content;
  height: 2rem;
  margin: 0;
  margin-left: 0.2rem;
  color: ${colors.black};
  font-size: 1rem;
  font-family: ${fonts.Ubuntu};
  cursor: pointer;

  & > span {
    margin: 0 1rem 0 0;
  }

  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background-color: ${colors.primary};
    transition: 0.6s cubic-bezier(0.39, 0.575, 0.565, 1);
  }

  &:hover::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: ${colors.primary};
  }
`;

export const ElgdSymbol = styled.span`
  content: "¤";
  font-size: 2rem;
  font-family: ${fonts.Ubuntu};
`;

export const StyledModal = styled(Modal)`
  overflow: scroll;
  width: 20rem;
  height: 30rem;
  margin: auto !important;
  border: none !important;
  border-radius: 6px !important;
  outline: none !important;

  @media (min-width: 35rem) {
    width: 30rem;
  }

  @media (min-width: 45rem) {
    width: 40rem;
  }

  @media (min-height: 45rem) {
    height: 40rem;
  }
`;

export const FooterModalContent = styled(Paper)`
  padding: 1rem 0 !important;
  border: none !important;
  outline: none !important;
`;

export const FooterModalTitle = styled.h3`
  margin: 1rem 1rem 2rem;
  font-size: 1.4rem;
  font-family: ${fonts.Roboto};
  text-align: center;

  @media (min-width: 35rem) {
    font-size: 1.7rem;
  }

  @media (min-width: 45rem) {
    font-size: 2rem;
  }
`;

export const FooterModalParagraph = styled.p`
  margin: 1.3rem 1.6rem;
  font-size: 0.8rem;
  font-family: ${fonts.Ubuntu};
  line-height: 1rem;
  text-align: justify;
  text-align-last: center;

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
  margin-left: 1rem;
  font-size: 0.8rem;
  font-family: ${fonts.Ubuntu};
  line-height: 1rem;

  @media (min-width: 35rem) {
    font-size: 0.85rem;
    line-height: 1.3rem;
  }

  @media (min-width: 45rem) {
    font-size: 1rem;
    line-height: 1.6rem;
  }
`;

export const StyledLi = styled.li`
  margin-bottom: 1.4rem;
`;

export const StyledComment = styled.span`
  display: inline-block;
  width: 90%;
  font-size: 0.65rem;
`;
