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

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  width: 100%;
`;

export const FormCaption = styled.p`
  font-family: ${fonts.Roboto};
  font-size: 0.85rem;
  text-align: justify;
  text-align-last: left;

  margin: 1rem auto 3rem;
`;

export const Comment = styled.p`
  width: 100%;
  height: 2rem;
  line-height: 1rem;
  font-family: ${fonts.Ubuntu};
  font-size: 0.75rem;
  text-align: center;

  margin: 0 auto 1rem;
`;

export const OnboardingTitle = styled.h4`
  text-align: center;
  font-size: 1.4rem;

  font-family: ${fonts.Roboto};
`;

export const CarousselContent = styled.a`
  display: block;
  position: relative;
  overflow: hidden;
  border-radius: 0.6rem;

  &::before {
    position: absolute;
    top: 0;
    left: 0;

    content: "Download";
    font-family: ${fonts.Ubuntu};
    font-size: 1.4rem;
    color: ${colors.secondary}00;

    text-align: center;
    line-height: 10rem;

    width: 100%;
    height: 100%;

    background: ${colors.soft_black}00;

    transition: 0.4s;

    cursor: pointer;
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
