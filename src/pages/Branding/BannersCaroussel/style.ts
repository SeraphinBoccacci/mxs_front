import MaterialCarousel from "react-material-ui-carousel";
import styled from "styled-components";

import { colors, fonts } from "../../../constants";

export const Carousel = styled(MaterialCarousel)``;

export const CarousselContent = styled.a`
  display: block;
  position: relative;
  overflow: hidden;
  border-radius: 0.6rem;

  height: 10rem;
  width: 20rem;

  @media (min-width: 30rem) {
    height: 12.5rem;
    width: 25rem;
  }

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

// Banner image are 320 / 160
export const CarousselImage = styled.img`
  width: 20rem;

  @media (min-width: 30rem) {
    width: 25rem;
  }
`;
