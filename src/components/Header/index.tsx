import Anchors from "./Anchors";
import { HeaderCTAs } from "./HeaderCTAs";
import LogoAndName from "../LogoAndName";
import { HeaderContainer } from "./style";

const Header = () => {
  return (
    <HeaderContainer>
      <LogoAndName></LogoAndName>
      <Anchors></Anchors>
      <HeaderCTAs></HeaderCTAs>
    </HeaderContainer>
  );
};

export default Header;
