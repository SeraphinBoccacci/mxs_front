import { useState } from "react";
import React from "react";

import MenuBurger from "../../../assets/icons/MenuBurger";
import Logo from "../../../assets/icons/StreamParticlesLogo";
import { LogoContainer } from "../../../styles/global";
import Menu from "./Menu";
import { HeaderContainer } from "./style";

const MobileHeader = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <>
      <Menu isMenuOpenned={isActive} setIsMenuOpenned={setIsActive}></Menu>
      <HeaderContainer>
        <LogoContainer style={{ background: "white" }}>
          <Logo width={"100"}></Logo>
        </LogoContainer>
        <MenuBurger
          onClick={() => setIsActive((prev) => !prev)}
          isActive={isActive}
          width="50px"
        ></MenuBurger>
      </HeaderContainer>
    </>
  );
};

export default MobileHeader;
