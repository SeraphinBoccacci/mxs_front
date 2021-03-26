import { useState } from "react";
import React from "react";

import Logo from "../../../assets/icons/StreamParticlesLogo";
import MenuBurger from "../../MenuBurger";
import { HeaderContainer } from "../style";
import Menu from "./Menu";

const MobileHeader = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <>
      <Menu isMenuOpenned={isActive} setIsMenuOpenned={setIsActive}></Menu>
      <HeaderContainer>
        <Logo></Logo>
        <MenuBurger
          open={isActive}
          setOpen={() => setIsActive((prev) => !prev)}
        ></MenuBurger>
      </HeaderContainer>
    </>
  );
};

export default MobileHeader;
