import { HtmlHTMLAttributes } from "react";
import styled from "styled-components";

import { colors } from "../../constants";

type StyledMenuBurgerProps = HtmlHTMLAttributes<HTMLButtonElement> & {
  open: boolean;
  color?: string;
};

export const StyledMenuBurger = styled.button<StyledMenuBurgerProps>`
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: space-around;

  width: 2rem;
  height: 2rem;

  background: transparent;
  border: none;
  cursor: pointer;

  padding: 0;
  margin: auto 0;

  outline: none !important;
  outline-color: none !important;

  span {
    width: 2rem;
    height: 3px;
    background: ${({ color }) => color || colors.secondary};
    border-radius: 9999px;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transition: all 0.2s linear;
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }

    :nth-child(2) {
      transition: all 0.1s linear;
      opacity: ${({ open }) => (open ? "0" : "1")};
      transform: ${({ open }) => (open ? "translateX(20px)" : "translateX(0)")};
    }

    :nth-child(3) {
      transition: all 0.2s linear;
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;
