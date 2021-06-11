import MaterialCarousel from "react-material-ui-carousel";
import styled from "styled-components";

import { colors, fonts } from "../../../constants";

export const Carousel = styled(MaterialCarousel)``;

export const CarousselContent = styled.a`
  position: relative;
  display: block;
  overflow: hidden;
  width: 20rem;
  height: 10rem;
  border-radius: 0.6rem;

  @media (min-width: 30rem) {
    width: 25rem;
    height: 12.5rem;
  }

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

// Banner image are 320 / 160
export const CarousselImage = styled.img`
  width: 20rem;

  @media (min-width: 30rem) {
    width: 25rem;
  }
`;
