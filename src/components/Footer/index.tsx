import { Fade } from "@material-ui/core";
import TelegramIcon from "@material-ui/icons/Telegram";
import TwitterIcon from "@material-ui/icons/Twitter";
import axios from "axios";
import React, { useEffect, useState } from "react";

import Logo from "../../assets/icons/StreamParticlesLogo";
import { Emphasize, LogoContainer } from "../../styles/global";
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
  StyledLi,
  StyledModal,
  StyledUl,
  StyledUlParagraph,
} from "./style";

const Footer = () => {
  const [isPricingModalOpenned, setIsPricingModalOpenned] = useState(false);

  const [currentPrice, setCurrentPrice] = useState(150);

  const EGLDPer30Dollars = (30 / currentPrice).toFixed(2);
  const feesInDollars = (0.00005 * currentPrice).toFixed(4);

  const receivedDollars = (30 - Number(feesInDollars)).toFixed(4);
  const receivedEGLD = (Number(EGLDPer30Dollars) - 0.00005).toFixed(5);

  const maiar = (
    <Emphasize>
      <a target="about:blank" href="https://maiar.com/">
        Maiar
      </a>
    </Emphasize>
  );

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/simple/price?ids=elrond-erd-2&vs_currencies=usd"
      )
      .then((response) => {
        if (!response) return;

        setCurrentPrice(response.data["elrond-erd-2"].usd);
      });
  }, []);
  return (
    <FooterContainer>
      <LogoContainer style={{ background: "white" }}>
        <Logo></Logo>
      </LogoContainer>
      <Columns>
        <DoubleColumn>
          <ColumnParagraph>
            {maiar} is powered by the amazing technology of the Elrond
            blockchain, and is going to radically change the way we interact
            with money.
          </ColumnParagraph>

          <ColumnParagraph>
            StreamParticles uses {maiar} technology to let you interact freely,
            without intermediary between you and the creators you support.
          </ColumnParagraph>
        </DoubleColumn>
        <Column>
          <ColumnTitle>Ressources</ColumnTitle>
          <ColumnItem>Documentation</ColumnItem>
          <ColumnItem>
            <span>
              <a target="about:blank" href="https://t.me/streamparticles">
                Telegram
              </a>
            </span>
            <TelegramIcon></TelegramIcon>
          </ColumnItem>
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
              <a target="about:blank" href="https://linktr.ee/elrond">
                Elrond Community
              </a>
            </span>
            <TelegramIcon></TelegramIcon>
          </ColumnItem>
          <ColumnItem>
            <span>
              <a target="about:blank" href="https://twitter.com/ElrondNetwork">
                Elrond Network
              </a>
            </span>
            <TwitterIcon></TwitterIcon>
          </ColumnItem>
          <ColumnItem>
            <span>
              <a
                target="about:blank"
                href="https://twitter.com/streamparticles"
              >
                Stream Particles
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
              Stream particles is <Emphasize>Free</Emphasize> and{" "}
              <Emphasize>Open source</Emphasize>.
            </FooterModalParagraph>
            <FooterModalParagraph>
              In spit of this, you have to know that every transaction has a
              cost on the blockchain.
            </FooterModalParagraph>
            <FooterModalParagraph>
              Whereas many blockchains have a prohibitive transaction fee, the
              elrond blockchain which is used by the {maiar} app has a cost of{" "}
              <Emphasize>0.00005 EGLD per transcation</Emphasize> (low
              additionnal fees may be charged based on transaction data length).
              Those fees are used to pay people around the world who are{" "}
              <Emphasize>staking</Emphasize> and{" "}
              <Emphasize>delegating</Emphasize> their ELGD in order to{" "}
              <Emphasize>secure</Emphasize> the elrond blockchain.
            </FooterModalParagraph>
            <FooterModalParagraph>
              Streamparticles will not receive anything from those fees.
            </FooterModalParagraph>
            <StyledUlParagraph>
              To make it more understandable, let’s take the example below:
            </StyledUlParagraph>
            <StyledUl>
              <StyledLi>
                Currently, 1 EGLD is worth{" "}
                <Emphasize>${currentPrice}</Emphasize>
              </StyledLi>
              <StyledLi>
                If you send your favorite streamer <Emphasize>$30</Emphasize> (
                {EGLDPer30Dollars} EGLD)
              </StyledLi>
              <StyledLi>
                The transaction fee will be{" "}
                <Emphasize>${feesInDollars}</Emphasize> (0.00005 EGLD) <br></br>
                <span>
                  (low additionnal fees may be charged based on transaction data
                  length)
                </span>
              </StyledLi>
              <StyledLi>
                They will receive <Emphasize>${receivedDollars}</Emphasize> (
                {receivedEGLD} EGLD)
              </StyledLi>
            </StyledUl>
          </FooterModalContent>
        </Fade>
      </StyledModal>
    </FooterContainer>
  );
};

export default Footer;
