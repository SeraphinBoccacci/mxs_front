import { Button } from "@material-ui/core";
import PowerSettingsNewRoundedIcon from "@material-ui/icons/PowerSettingsNewRounded";
import React, { useCallback } from "react";

import BrandingIcon from "../../../assets/icons/labNavIcons/Branding";
import LockIcon from "../../../assets/icons/labNavIcons/Lock";
import SettingsIcon from "../../../assets/icons/labNavIcons/Settings";
import TwitchIcon from "../../../assets/icons/labNavIcons/Twitch";
import routes from "../../../constants/routes";
import { useHistoryWithQueryString } from "../../../hooks/useHistoryWithQuerystring";
import { useAuth } from "../../AuthContext";
import EventTriggerer from "../../EventTriggerer";
import { RightNode, StyledList, StyledNav } from "./style";
import TabItem from "./TabItem";

const sections = [
  {
    title: "User Account",
    id: "user_account",
    route: routes.userAccount,
    subSections: [
      {
        title: "Settings",
        route: routes.userAccountSettings,
        image: <SettingsIcon></SettingsIcon>,
      },
      {
        title: "Security",
        route: routes.userAccountSecurity,
        image: <LockIcon></LockIcon>,
      },
      {
        title: "Branding",
        route: routes.userAccountBranding,
        image: <BrandingIcon></BrandingIcon>,
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
        image: <TwitchIcon></TwitchIcon>,
      },
    ],
  },
];

const LabNav = () => {
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
    <StyledNav>
      <StyledList>
        {sections.map((section) => (
          <TabItem key={section.id} {...section}></TabItem>
        ))}
        <EventTriggerer></EventTriggerer>
      </StyledList>
      <RightNode>
        <Button onClick={handleGoToHome}>Home</Button>
        <Button onClick={handleDisconnect}>
          <PowerSettingsNewRoundedIcon></PowerSettingsNewRoundedIcon>
        </Button>
      </RightNode>
    </StyledNav>
  );
};

export default LabNav;
