import { Button } from "@material-ui/core";
import PowerSettingsNewRoundedIcon from "@material-ui/icons/PowerSettingsNewRounded";
import React, { useCallback, useState } from "react";

import BrandingIcon from "../../../assets/icons/labNavIcons/Branding";
import LockIcon from "../../../assets/icons/labNavIcons/Lock";
import SettingsIcon from "../../../assets/icons/labNavIcons/Settings";
import TwitchIcon from "../../../assets/icons/labNavIcons/Twitch";
import routes from "../../../constants/routes";
import { useHistoryWithQueryString } from "../../../hooks/useHistoryWithQuerystring";
import { useAuth } from "../../AuthContext";
import MenuBurger from "../../MenuBurger";
import {
  BottomNode,
  Container,
  Content,
  MenuButton,
  StreamParticlesLogo,
  StyledList,
  StyledListItem,
  StyledListItemTitle,
  StyledNav,
} from "./style";
import SubSections from "./SubSections";

const sections = [
  {
    title: "User Account",
    id: "user_account",
    route: routes.userAccount,
    subSections: [
      {
        title: "Settings",
        route: routes.userAccountSettings,
        image: <SettingsIcon width="30px"></SettingsIcon>,
      },
      {
        title: "Security",
        route: routes.userAccountSecurity,
        image: <LockIcon width="30px"></LockIcon>,
      },
      {
        title: "Branding",
        route: routes.userAccountBranding,
        image: <BrandingIcon width="30px"></BrandingIcon>,
      },
    ],
  },
  {
    title: "IFTTT",
    id: "ifttt",
    route: routes.ifttt,
  },
  {
    title: "Overlays",
    id: "overlays",
    route: routes.overlays,
  },
  {
    title: "ChatBots",
    id: "chat_bots",
    route: routes.chatBots,
    subSections: [
      {
        title: "Twitch",
        route: routes.chatBotsTwitch,
        image: <TwitchIcon width="20px"></TwitchIcon>,
      },
    ],
  },
];

const MobileLabNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [pushHistory, history] = useHistoryWithQueryString();
  const { setTokenData, setHerotag } = useAuth();

  const handleDisconnect = useCallback(() => {
    setTokenData(null);
    setHerotag("");

    history.push(routes.home);
  }, [setTokenData, setHerotag, history]);

  const handleGoToHome = useCallback(() => {
    pushHistory(routes.home);
  }, [pushHistory]);

  return (
    <StyledNav isOpen={isMenuOpen}>
      <MenuButton isMenuOpen={isMenuOpen}>
        <MenuBurger open={isMenuOpen} setOpen={setIsMenuOpen}></MenuBurger>
      </MenuButton>
      <Container>
        <Content>
          <StreamParticlesLogo></StreamParticlesLogo>
          <StyledList>
            {sections.map((section) => (
              <StyledListItem
                className={section.subSections?.length ? "hoverable" : ""}
                onClick={() => {
                  if (!section.subSections?.length) pushHistory(section.route);
                }}
                key={section.id}
                {...section}
              >
                <StyledListItemTitle
                  className={
                    history.location.pathname.includes(section.route)
                      ? "highlighted"
                      : ""
                  }
                >
                  {section.title}
                </StyledListItemTitle>
                {section.subSections?.length && (
                  <SubSections subSections={section.subSections}></SubSections>
                )}
              </StyledListItem>
            ))}
          </StyledList>
          <BottomNode>
            <Button size="large" onClick={handleGoToHome}>
              Home
            </Button>
            <Button onClick={handleDisconnect}>
              <PowerSettingsNewRoundedIcon fontSize="large"></PowerSettingsNewRoundedIcon>
            </Button>
          </BottomNode>
        </Content>
      </Container>
    </StyledNav>
  );
};

export default MobileLabNav;
