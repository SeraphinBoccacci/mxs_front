import {
  Feature,
  FeaturesContainer,
  FeaturesContent,
  FeaturesHeader,
  FeaturesSubContent,
  FeaturesTitle,
  FeaturesSubTitle,
  FeaturePaper,
  FeatureScreen,
} from "./style";

import MovieCreationRoundedIcon from "@material-ui/icons/MovieCreationRounded";
import HighlightRoundedIcon from "@material-ui/icons/HighlightRounded";
import VideoCallRoundedIcon from "@material-ui/icons/VideoCallRounded";
import AccountBalanceWalletRoundedIcon from "@material-ui/icons/AccountBalanceWalletRounded";
import CreditCardRoundedIcon from "@material-ui/icons/CreditCardRounded";
import DonutSmallRoundedIcon from "@material-ui/icons/DonutSmallRounded";

import { useState } from "react";
import Switcher from "./Switche";
import { OverridableComponent } from "@material-ui/core/OverridableComponent";
import { SvgIconTypeMap } from "@material-ui/core";

const features = {
  creator: [
    {
      title: "1. Create your account",
      content:
        "It's totally free. A herotag, a password and your integration settings are the only informations we store.",
      key: "features_01",
    },
    {
      title: "2. Use our integration console",
      content:
        "Our powerfull webhook connected to Maiar, combined with our console, let you customize the interaction with Maiar donators",
      key: "features_02",
    },
    {
      title: "3. Start Streaming !",
      content: "That's it ! Three steps then cut the commissions !",
      key: "features_03",
    },
  ],
  viewer: [
    {
      title: "1. Create a Maiar wallet, it's free",
      content:
        "Maiar requires only your phone number and let you own some crypto-currencies on your phone. More documentations here.",
      key: "features_04",
    },
    {
      title: "2. Deposit a bunch of eGLD",
      content:
        "To be able to send them via Maiar. A list of ¤eGLD brokers is available here.",
      key: "features_05",
    },
    {
      title: "3. Support your favorite creators",
      content:
        "And enjoy full interaction on their live streams. They get 100% of what you send them.",
      key: "features_06",
    },
  ],
};

type Background = { [key: string]: string };

const backgrounds: Background = {
  features_01: "url('/mockup_account_creation.png')",
  features_02: "url('/mockups_integration.png')",
  features_03: "url('/mockup_tv.png')",
  features_04: "url('/mockup_wallet.png')",
  features_05: "url('/mockup_wallet_buy_egld.png')",
  features_06: "url('/mockup_wallet_send_egld.png')",
};

type Icon = { [key: string]: OverridableComponent<SvgIconTypeMap<{}, "svg">> };

const iconsMapper: Icon = {
  features_01: MovieCreationRoundedIcon,
  features_02: HighlightRoundedIcon,
  features_03: VideoCallRoundedIcon,
  features_04: AccountBalanceWalletRoundedIcon,
  features_05: CreditCardRoundedIcon,
  features_06: DonutSmallRoundedIcon,
};

const Features = () => {
  const [isViewerOptionChecked, setIsViewerOptionChecked] = useState<boolean>(
    true
  );
  const [focusedFeatureKey, setFocusedFeatureKey] = useState<string>(
    isViewerOptionChecked ? "features_04" : "features_01"
  );

  return (
    <FeaturesContainer>
      <FeaturesHeader>
        <FeaturesTitle>How does it works ?</FeaturesTitle>
        <FeaturesSubTitle>Nothing simpler.</FeaturesSubTitle>
        <Switcher
          isViewerOptionChecked={isViewerOptionChecked}
          setIsViewerOptionChecked={(isChecked) => {
            setIsViewerOptionChecked(isChecked);
            setFocusedFeatureKey(isChecked ? "features_04" : "features_01");
          }}
        ></Switcher>
      </FeaturesHeader>
      <FeaturesContent isRowReverse={!isViewerOptionChecked}>
        <FeaturesSubContent>
          {features[isViewerOptionChecked ? "viewer" : "creator"].map(
            ({ title, content, key }) => {
              const Icon = iconsMapper[key];

              return (
                <FeaturePaper
                  key={key}
                  onMouseEnter={() => setFocusedFeatureKey(key)}
                >
                  <Icon fontSize="large"></Icon>
                  <Feature>
                    <h3>{title}</h3>
                    <p>{content}</p>
                  </Feature>
                </FeaturePaper>
              );
            }
          )}
        </FeaturesSubContent>
        <FeatureScreen
          background={backgrounds[focusedFeatureKey] as string}
        ></FeatureScreen>
      </FeaturesContent>
    </FeaturesContainer>
  );
};

export default Features;
