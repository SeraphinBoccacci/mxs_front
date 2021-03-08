import { Fade } from "@material-ui/core";
import TelegramIcon from "@material-ui/icons/Telegram";
import TwitterIcon from "@material-ui/icons/Twitter";
import axios from "axios";
import React, { useEffect, useState } from "react";

import Logo from "../../assets/icons/StreamParticlesLogo";
import config from "../../config/config";
import { Emphasize, LogoContainer } from "../../styles/global";
import Switch from "../Switch";
import CreatorPart from "./CreatorPart";
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
  StyledModal,
} from "./style";
import ViewerPart from "./ViewerPart";

const maiar = (
  <Emphasize>
    <a target="about:blank" href="https://maiar.com/">
      Maiar
    </a>
  </Emphasize>
);

const Footer = () => {
  const [isOnViewerPart, setIsOnViewerPart] = useState(false);
  const [isPricingModalOpenned, setIsPricingModalOpenned] = useState(false);
  const [currentPrice, setCurrentPrice] = useState(150);

  useEffect(() => {
    axios.get(`${config.apiUrl}/egld-price`).then((response) => {
      if (!response) return;

      setCurrentPrice(response.data.price);
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
                StreamParticles
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
            <Switch
              onLabel="viewer"
              offLabel="creator"
              isActive={isOnViewerPart}
              setIsActive={setIsOnViewerPart}
              variant="inverted"
            ></Switch>
            {isOnViewerPart ? (
              <ViewerPart currentPrice={currentPrice}></ViewerPart>
            ) : (
              <CreatorPart></CreatorPart>
            )}
          </FooterModalContent>
        </Fade>
      </StyledModal>
    </FooterContainer>
  );
};

export default Footer;
