// import { colors } from "../../constants";
// import LogoAndName from "../LogoAndName";
import Logo from "../../assets/icons/StreamParticlesLogo";
import { LogoContainer } from "../../styles/global";
import {
  Columns,
  DoubleColumn,
  FooterContainer,
  Column,
  ColumnTitle,
  ColumnItem,
  ColumnParagraph,
} from "./style";

const Footer = () => {
  return (
    <FooterContainer>
      <LogoContainer style={{ background: "white" }}>
        <Logo></Logo>
      </LogoContainer>
      <Columns>
        <DoubleColumn>
          <ColumnParagraph>
            Maiar is powered by the amazing technology of the Elrond blockchain,
            and is going to radically change the way we interact with money.
          </ColumnParagraph>

          <ColumnParagraph>
            StreamParticles uses Maiar technology to let you interact freely,
            without intermediary between you and the creators you support.
          </ColumnParagraph>
        </DoubleColumn>
        <Column>
          <ColumnTitle>Ressources</ColumnTitle>
          <ColumnItem>Documentation</ColumnItem>
          <ColumnItem>No Pricing !</ColumnItem>
        </Column>
        <Column>
          <ColumnTitle>Community</ColumnTitle>
          <ColumnItem>Twitter</ColumnItem>
          <ColumnItem>ElrondFr</ColumnItem>
          <ColumnItem>Beniamin Mincu</ColumnItem>
        </Column>
      </Columns>
    </FooterContainer>
  );
};

export default Footer;
