import { Chip } from "@material-ui/core";
import styled from "styled-components";
import { colors, fonts } from "../../../constants";

export const Section = styled.section`
  height: 100vh;
  width: 100vw;
  background-color: ${colors.eerieBlack}ed;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const CatchPhraseAndImage = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  width: 80rem;
  height: 25rem;
`;

export const CatchPhraseContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: space-between;

  width: 39rem;
  height: 25rem;
  padding: 1rem;

  background-color: transparent;
`;

export const Image = styled.img`
  width: 39rem;
  height: 25rem;

  border: none;
  outline: none;
`;

export const ShortCatchPhraseChip = styled(Chip)`
  font-size: 0.75rem !important;
  width: max-content !important;
  padding: 0 1rem !important;
`;

export const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 13rem;
`;

export const MainCatchPhrase = styled.h1`
  font-family: ${fonts.Roboto};
  font-size: 2.6rem;
  color: ${colors.cultured};
  margin: 0;
`;

export const SubMainCatchPhrase = styled.h3`
  font-family: ${fonts.Ubuntu};
  font-size: 1.2rem;
  color: ${colors.cultured};
  margin: 0;
`;

export const LittleDisclaimer = styled.h6`
  font-family: ${fonts.Ubuntu};
  font-size: 0.7rem;
  color: ${colors.cultured};
  margin: 0;
`;

export const ReferencesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  margin-top: 7rem;

  height: 8rem;
`;

export const ReferencesTitle = styled.h2`
  position: relative;
  font-size: 1.2rem;
  font-family: ${fonts.Roboto};
  color: ${colors.spanishGray};
  width: max-content;
  margin: 0 4rem;

  height: 2rem;
  line-height: 2rem;

  &::before {
    content: "";
    position: absolute;
    top: 1rem;
    left: -25rem;
    width: 22rem;
    height: 1px;
    border-radius: 999px;
    background-color: ${colors.spanishGray};
  }

  &::after {
    content: "";
    position: absolute;
    top: 1rem;
    right: -25rem;
    width: 22rem;
    height: 1px;
    border-radius: 999px;
    background-color: ${colors.spanishGray};
  }
`;

export const ReferencesContent = styled.div``;

export const Reference = styled.div<{ logoPath?: string }>`
  position: relative;

  height: 50px;
  line-height: 50px;
  padding: 0 1rem;

  font-size: 1.6rem;
  font-family: ${fonts.Roboto};
  color: ${colors.spanishGray};

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -50px;
    width: 50px;
    height: 50px;
    background-image: ${({ logoPath }) => `url(${logoPath})`};
    background-size: cover;
  }
`;
