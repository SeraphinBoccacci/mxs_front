import { colors } from "../../constants";
import { Logo, LogoAndNameContainer, Name } from "./style";
import logo from "../../assets/mxs_logo.png";

const LogoAndName = ({ color = colors.cultured }: { color?: string }) => {
  return (
    <LogoAndNameContainer>
      <Logo src={logo}></Logo>

      <Name color={color}>MaiarXstreaM</Name>
    </LogoAndNameContainer>
  );
};

export default LogoAndName;
