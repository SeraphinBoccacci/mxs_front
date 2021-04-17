import React from "react";

import Logo from "../../../../assets/icons/StreamParticlesLogo";
import { HeaderContainer } from "../style";
import Anchors from "./Anchors";
import { HeaderCTAs } from "./HeaderCTAs";

const Header = () => {
  return (
    <HeaderContainer>
      <Logo></Logo>
      <Anchors></Anchors>
      <HeaderCTAs></HeaderCTAs>
    </HeaderContainer>
  );
};

export default Header;
