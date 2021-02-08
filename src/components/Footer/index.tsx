import { colors } from "../../constants";
import LogoAndName from "../LogoAndName";
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
      <LogoAndName color={colors.eerieBlack}></LogoAndName>
      <Columns>
        <DoubleColumn>
          <ColumnParagraph>
            Maiar is powered by the amazing technology of the Elrond blockchain,
            and is going to radically change the way we interact with money.
          </ColumnParagraph>

          <ColumnParagraph>
            MaiarXstreaM uses maiar to let you interact freely, without
            intermediary between you and the streamers you support intermedia
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
