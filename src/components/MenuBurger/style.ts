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
  margin: auto 0;
  padding: 0;
  border: none;
  outline: none !important;
  outline-color: none !important;
  cursor: pointer;
  background: transparent;

  span {
    position: relative;
    width: 2rem;
    height: 3px;
    border-radius: 9999px;
    transform-origin: 1px;
    background: ${({ color }) => color || colors.secondary};

    :first-child {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
      transition: all 0.2s linear;
    }

    :nth-child(2) {
      transform: ${({ open }) => (open ? "translateX(20px)" : "translateX(0)")};
      transition: all 0.1s linear;
      opacity: ${({ open }) => (open ? "0" : "1")};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
      transition: all 0.2s linear;
    }
  }
`;
