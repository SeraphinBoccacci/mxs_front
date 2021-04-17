import React from "react";

import { StyledMenuBurger } from "./style";

interface MenuBurgerProps {
  open: boolean;
  setOpen: (b: boolean) => void;
  color?: string;
}

const MenuBurger = ({ open, setOpen, color, ...props }: MenuBurgerProps) => {
  const isExpanded = open ? true : false;

  return (
    <StyledMenuBurger
      aria-label="Toggle menu"
      aria-expanded={isExpanded}
      open={open}
      color={color}
      onClick={() => setOpen(!open)}
      {...props}
    >
      <span />
      <span />
      <span />
    </StyledMenuBurger>
  );
};

export default MenuBurger;
