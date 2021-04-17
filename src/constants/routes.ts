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

const streamElementBaseTutorial = `${lab}/tutorial/stream-elements-base`;
const streamElementCustomTutorial = `${lab}/tutorial/stream-elements-custom`;
const iftttTutorial = `${lab}/tutorial/ifttt`;
const chatBotsTwitchTutorial = `${lab}/tutorial/chat-bots-twitch`;

const tippingPage = "/creator/:herotag";

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
  streamElementBaseTutorial,
  streamElementCustomTutorial,
  iftttTutorial,
  chatBotsTwitchTutorial,
};

export default routes;
