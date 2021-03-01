import { Chip } from "@material-ui/core";
import styled from "styled-components";

import { colors, fonts } from "../../../constants";

export const Section = styled.section`
  position: relative;
  min-height: 100vh;
  height: max-content;
  width: 100vw;
  background-color: #060606;
  padding: 6rem 0 4rem;

  overflow-x: hidden;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: left;

  background-image: url("/planet_2_rotated.jpeg");
  background-position: bottom right;
  background-size: contain;
  background-repeat: no-repeat;

  @media (min-width: 450px) {
    padding: 6rem 0 14rem;
  }

  @media (min-width: 550px) {
    padding: 6rem 0 16rem;
  }

  @media (min-width: 800px) {
    padding: 6rem 0 17rem;
  }

  @media (min-width: 980px) {
    padding: 6rem 0 2rem;
    background-image: url("/planet_2.jpeg");
  }
`;

export const CatchPhraseAndImage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  width: 100vw;
  height: max-content;
  flex: 1;

  @media (min-width: 450px) {
    flex-direction: row;
    width: 40rem;
    margin-left: 4rem;
  }

  @media (min-width: 820px) {
    width: 50rem;
    margin-left: 7rem;
    flex: 1;
  }
`;

export const CatchPhraseContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: space-between;

  width: 100vw;
  height: 18rem;
  padding: 1rem;

  background-color: transparent;

  @media (min-width: 450px) {
    width: 35rem;
    height: 23rem;
    padding: 1rem;
  }

  @media (min-width: 680px) {
    width: 40rem;
    height: 25rem;
    padding: 1rem;
  }
`;

export const ShortCatchPhraseChip = styled(Chip)`
  font-size: 0.7rem !important;
  width: max-content !important;
  padding: 0 0.8rem !important;
  margin: 0 1rem !important;

  @media (min-width: 450px) {
    font-size: 0.75rem !important;
    width: max-content !important;
    padding: 0 1rem !important;
    margin: 0 !important;
  }
`;

export const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 10rem;

  @media (min-width: 680px) {
    height: 11rem;
  }

  @media (min-width: 450px) {
    height: 13rem;
  }
`;

export const MainCatchPhrase = styled.h1`
  font-family: ${fonts.Roboto};
  font-size: 1.4rem;
  color: ${colors.secondary};
  margin: 0;

  @media (min-width: 450px) {
    font-size: 2rem;
  }

  @media (min-width: 680px) {
    font-size: 2.6rem;
  }
`;

export const SubMainCatchPhrase = styled.h3`
  font-family: ${fonts.Ubuntu};
  font-size: 0.8rem;
  color: ${colors.secondary};
  margin: 0;

  @media (min-width: 450px) {
    font-size: 1.2rem;
  }
`;

export const LittleDisclaimer = styled.h6`
  margin: 0;

  font-size: 0.4rem;
  width: 16rem;

  font-family: ${fonts.Ubuntu};
  color: ${colors.quad};

  @media (min-width: 450px) {
    font-size: 0.8rem;
    width: max-content;
  }
`;

export const ReferencesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  margin: 2rem 0 10rem;

  height: 8rem;
  width: 100%;

  @media (min-width: 450px) {
    margin: 2rem 0;
  }
`;

export const ReferencesTitle = styled.h2`
  position: relative;

  width: 10rem;
  height: 2rem;

  margin: 0 4rem;

  font-family: ${fonts.Roboto};
  color: ${colors.quad};
  text-align: center;

  font-size: 0.8rem;
  line-height: 1rem;
  letter-spacing: 1.2px;

  font-variant-caps: all-small-caps;

  @media (min-width: 450px) {
    width: max-content;

    font-size: 1.2rem;
    line-height: 2rem;
  }

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: -7rem;

    width: 6rem;
    height: 1px;

    border-radius: 999px;
    background-color: ${colors.quad};

    @media (min-width: 800px) {
      left: -15rem;

      width: 13rem;
    }

    @media (min-width: 1000px) {
      left: -20rem;

      width: 18rem;
    }

    @media (min-width: 1180px) {
      left: -25rem;

      width: 22rem;
    }
  }

  &::after {
    content: "";
    position: absolute;
    top: 50%;
    right: -7rem;

    width: 6rem;
    height: 1px;

    border-radius: 999px;
    background-color: ${colors.quad};

    @media (min-width: 800px) {
      right: -15rem;

      width: 13rem;
    }

    @media (min-width: 1000px) {
      right: -20rem;

      width: 18rem;
    }

    @media (min-width: 1180px) {
      right: -25rem;

      width: 22rem;
    }
  }
`;

export const ReferencesContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin: 1rem 0;
`;

export const Reference = styled.div<{ logoPath?: string }>`
  position: relative;

  height: 30px;
  padding: 0 1rem;

  font-size: 1.2rem;
  font-family: ${fonts.Roboto};
  color: ${colors.secondary};

  line-height: 30px;

  margin: 0 2rem 2rem 4rem;

  cursor: pointer;

  @media (min-width: 450px) {
    height: 50px;

    font-size: 1.6rem;

    line-height: 50px;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -25px;

    width: 30px;
    height: 30px;

    background-image: ${({ logoPath }) => `url(${logoPath})`};
    background-size: cover;
    background-position: center right;

    filter: grayscale(100%);

    transition: 0.9s;

    @media (min-width: 450px) {
      left: -40px;

      width: 50px;
      height: 50px;
    }
  }

  &:hover::before {
    filter: grayscale(0%);
  }
`;
