const lab = "/lab";

const userAccount = `${lab}/user-account`;
const userAccountSettings = `${userAccount}/settings`;
const userAccountSecurity = `${userAccount}/security`;
const userAccountBranding = `${userAccount}/branding`;

const ifttt = `${lab}/ifttt`;

const overlays = `${lab}/overlays`;

const chatBots = `${lab}/chat-bots`;
const chatBotsTutorials = `${chatBots}/tutorials`;
const chatBotsTwitch = `${chatBots}/twitch`;

const tutorial = `${lab}/tutorial/:tutorialId`;

const overlaysBaseTutorial = `${lab}/tutorial/overlays-base`;
const overlaysCustomTutorial = `${lab}/tutorial/overlays-custom`;
const iftttTutorial = `${lab}/tutorial/ifttt`;
const chatBotsTwitchTutorial = `${lab}/tutorial/chat-bots-twitch`;

const tippingPage = "/creator/:herotag";
const browserSourcePage = "/browser-source/herotag/:herotag/overlay/:overlayId";
const overlayEditorPage = "/editor/overlay/:overlayId";

const routes = {
  home: "/",
  tippingPage,
  lab,
  userAccount,
  userAccountSettings,
  userAccountSecurity,
  userAccountBranding,
  ifttt,
  overlays,
  chatBots,
  chatBotsTwitch,
  tutorial,
  chatBotsTutorials,
  streamElementBaseTutorial: overlaysBaseTutorial,
  overlaysCustomTutorial,
  iftttTutorial,
  chatBotsTwitchTutorial,
  browserSourcePage,
  overlayEditorPage,
};

export default routes;
