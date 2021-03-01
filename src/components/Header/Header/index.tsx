import React from "react";

import Logo from "../../../assets/icons/StreamParticlesLogo";
import { LogoContainer } from "../../../styles/global";
import Anchors from "./Anchors";
import { HeaderCTAs } from "./HeaderCTAs";
import { HeaderContainer } from "./style";

const Header = () => {
  return (
    <HeaderContainer>
      <LogoContainer style={{ background: "white" }}>
        <Logo></Logo>
      </LogoContainer>
      <Anchors></Anchors>
      <HeaderCTAs></HeaderCTAs>
    </HeaderContainer>
  );
};

export default Header;
