import { Button as MaterialButton } from "@material-ui/core";
import styled from "styled-components";

import { colors, fonts } from "../../constants";

export const AccountContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Button = styled(MaterialButton)`
  margin: 0.8rem 0 !important;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 80vw;
  height: max-content;

  @media (min-width: 500px) {
    width: 25rem;
  }

  @media (min-width: 1000px) {
    width: 30rem;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const FormCaption = styled.p`
  margin: 1rem auto 3rem;
  font-size: 0.85rem;
  font-family: ${fonts.Roboto};
  text-align: justify;
  text-align-last: left;
`;

export const Comment = styled.p`
  width: 100%;
  height: 2rem;
  margin: 0 auto 1rem;
  font-size: 0.75rem;
  font-family: ${fonts.Ubuntu};
  line-height: 1rem;
  text-align: center;
`;

export const OnboardingTitle = styled.h4`
  font-size: 1.4rem;
  font-family: ${fonts.Roboto};
  text-align: center;
`;

export const CarousselContent = styled.a`
  position: relative;
  display: block;
  overflow: hidden;
  border-radius: 0.6rem;

  &::before {
    content: "Download";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    color: ${colors.secondary}00;
    font-size: 1.4rem;
    font-family: ${fonts.Ubuntu};
    line-height: 10rem;
    text-align: center;
    cursor: pointer;
    background: ${colors.soft_black}00;
    transition: 0.4s;
  }

  &:hover::before {
    color: ${colors.secondary}ff;
    background: ${colors.soft_black}bb;
  }
`;

export const CarousselImage = styled.img`
  width: 100%;

  @media (min-width: 30rem) {
    width: 25rem;
  }
`;
