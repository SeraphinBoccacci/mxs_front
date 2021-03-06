import { Fade } from "@material-ui/core";
import TelegramIcon from "@material-ui/icons/Telegram";
import TwitterIcon from "@material-ui/icons/Twitter";
import React, { useState } from "react";

import Logo from "../../assets/icons/StreamParticlesLogo";
import { LogoContainer } from "../../styles/global";
import {
  Column,
  ColumnItem,
  ColumnParagraph,
  Columns,
  ColumnTitle,
  DoubleColumn,
  ElgdSymbol,
  FooterContainer,
  FooterModalContent,
  FooterModalParagraph,
  FooterModalTitle,
  StyledModal,
} from "./style";

const Footer = () => {
  const [isPricingModalOpenned, setIsPricingModalOpenned] = useState(false);
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
          <ColumnItem onClick={() => setIsPricingModalOpenned(true)}>
            Pricing ?
          </ColumnItem>
        </Column>
        <Column>
          <ColumnTitle>Community</ColumnTitle>
          <ColumnItem>
            <span>
              <a target="about:blank" href="https://elrond.com/">
                elrond.com
              </a>
            </span>
            <ElgdSymbol>¤</ElgdSymbol>
          </ColumnItem>
          <ColumnItem>
            <span>
              <a target="about:blank" href="https://t.me/ElrondNetwork_fr">
                ElrondFr
              </a>
            </span>
            <TelegramIcon></TelegramIcon>
          </ColumnItem>
          <ColumnItem>
            <span>
              <a target="about:blank" href="https://twitter.com/beniaminmincu">
                Beniamin Mincu
              </a>
            </span>
            <TwitterIcon></TwitterIcon>
          </ColumnItem>
        </Column>
      </Columns>
      <StyledModal
        onClose={() => setIsPricingModalOpenned(false)}
        open={isPricingModalOpenned}
      >
        <Fade in={isPricingModalOpenned}>
          <FooterModalContent>
            <FooterModalTitle>Stream Particles is 100% Free</FooterModalTitle>
            <FooterModalParagraph>
              Stream particles is Free and Open source.
            </FooterModalParagraph>
            <FooterModalParagraph>
              In spit of this, you have to know that every transaction has a
              cost on the blockchain.
            </FooterModalParagraph>
            <FooterModalParagraph>
              Whereas many blochains have a prohibitive transaction fee, the
              elrond blockchain which is used by the maiar app has a fixed cost
              of 0.00005 egld per transacation, whatever the value of the
              latter. Those fees are used to pay people around the world who are
              staking and delegating their egld in order to secure the elrond
              blockchain. Streamparticles will not receive anything from those
              fees.
            </FooterModalParagraph>
            <FooterModalParagraph>
              To make it more understandable, let’s take the example below:
              <br></br>
              currently, 1 EGLD is worth 150$<br></br>
              If you send your favorite streamer [30$] (0,2 EGLD)<br></br>
              The transaction fee will be [0,0075$] (0.00005 EGLD)<br></br>
              They will receive [29,9925$] (0,1995 EGLD)<br></br>
            </FooterModalParagraph>
          </FooterModalContent>
        </Fade>
      </StyledModal>
    </FooterContainer>
  );
};

export default Footer;
