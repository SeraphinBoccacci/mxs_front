import { Chip } from "@material-ui/core";
import styled from "styled-components";

import { colors, fonts } from "../../../constants";

export const Section = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: space-between;
  overflow-x: hidden;
  width: 100vw;
  height: max-content;
  min-height: 100vh;
  padding: 6rem 0 2rem;
  background-color: #060606;
  background-image: url("/planet_2_rotated.jpeg");
  background-position: bottom right;
  background-size: contain;
  background-repeat: no-repeat;

  @media (min-width: 980px) {
    background-image: url("/planet_2.jpeg");
  }
`;

export const CatchPhraseAndImage = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100vw;
  height: max-content;

  @media (min-width: 450px) {
    flex-direction: row;
    width: 40rem;
    margin-left: 4rem;
  }

  @media (min-width: 820px) {
    flex: 1;
    width: 50rem;
    margin-left: 7rem;
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
  width: max-content !important;
  margin: 0 1rem !important;
  padding: 0 0.8rem !important;
  font-size: 0.7rem !important;

  @media (min-width: 450px) {
    width: max-content !important;
    margin: 0 !important;
    padding: 0 1rem !important;
    font-size: 0.75rem !important;
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
  margin: 0;
  color: ${colors.secondary};
  font-size: 1.4rem;
  font-family: ${fonts.Roboto};

  @media (min-width: 450px) {
    font-size: 2rem;
  }

  @media (min-width: 680px) {
    font-size: 2.6rem;
  }
`;

export const SubMainCatchPhrase = styled.h3`
  margin: 0;
  color: ${colors.secondary};
  font-size: 0.8rem;
  font-family: ${fonts.Ubuntu};

  @media (min-width: 450px) {
    font-size: 1.2rem;
  }
`;

export const LittleDisclaimer = styled.h6`
  width: 16rem;
  margin: 0;
  color: ${colors.quad};
  font-size: 0.4rem;
  font-family: ${fonts.Ubuntu};

  @media (min-width: 450px) {
    width: max-content;
    font-size: 0.8rem;
  }
`;

export const ReferencesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: max-content;
  margin: 2rem 0;

  @media (min-width: 450px) {
    margin: 2rem 0;
  }
`;

export const ReferencesTitle = styled.h2`
  position: relative;
  width: 10rem;
  height: 2rem;
  margin: 0 4rem;
  color: ${colors.quad};
  font-size: 0.8rem;
  font-family: ${fonts.Roboto};
  line-height: 2rem;
  letter-spacing: 1.2px;
  text-align: center;
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
    left: -6rem;
    width: 6rem;
    height: 1px;
    border-radius: 999px;
    background-color: ${colors.quad};

    @media (min-width: 500px) {
      left: -12rem;
      width: 10rem;
    }

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
    right: -6rem;
    width: 6rem;
    height: 1px;
    border-radius: 999px;
    background-color: ${colors.quad};

    @media (min-width: 500px) {
      right: -12rem;
      width: 10rem;
    }

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
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin: 1rem 0;
  padding: 0 0.4rem;
`;

export const Reference = styled.a`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: max-content;
  margin: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 0.4rem;

  @media (min-width: 700px) {
    margin: 1rem 2rem;
    border-radius: 0.5rem;
  }

  @media (min-width: 1000px) {
    margin: 2rem;
    border-radius: 0.6rem;
  }

  &:hover img {
    filter: grayscale(0%);
  }
`;

export const ReferencesText = styled.div`
  position: relative;
  height: 30px;
  color: ${colors.secondary};
  font-size: 0.7rem;
  font-family: ${fonts.Roboto};
  line-height: 30px;
  cursor: pointer;

  @media (min-width: 700px) {
    height: 40px;
    font-size: 1.2rem;
    line-height: 40px;
  }

  @media (min-width: 1000px) {
    height: 50px;
    font-size: 1.6rem;
    line-height: 50px;
  }
`;

export const ReferenceImage = styled.img`
  width: 30px;
  height: 30px;
  margin: auto 0.4rem;
  filter: grayscale(100%);
  transition: 0.9s;

  @media (min-width: 700px) {
    width: 40px;
    height: 40px;
  }

  @media (min-width: 1000px) {
    width: 50px;
    height: 50px;
  }
`;
