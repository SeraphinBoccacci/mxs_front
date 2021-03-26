import React from "react";

import { StyledMenuBurger } from "./style";

interface MenuBurger {
  open: boolean;
  setOpen: (b: boolean) => void;
}

const MenuBurger = ({ open, setOpen, ...props }: MenuBurger) => {
  const isExpanded = open ? true : false;

  return (
    <StyledMenuBurger
      aria-label="Toggle menu"
      aria-expanded={isExpanded}
      open={open}
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
