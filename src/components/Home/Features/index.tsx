import {
  Feature,
  FeaturesContainer,
  FeaturesContent,
  FeaturesHeader,
  FeaturesSubContent,
  FeaturesTitle,
  FeaturesSubTitle,
  FeaturePaper,
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
  streamer: [
    {
      title: "1. Bind your stream manager",
      content: "To enable Maiar donation interaction on your live streams",
      key: "features_01",
    },
    {
      title: "2. Connect your IFTTT applets",
      content:
        "Enjoy the universality of IFTTT's applets thanks to our powefull webhook connected to Maiar",
      key: "features_02",
    },
    {
      title: "3. Start Streaming",
      content: "That's it ! Three steps then cut the commissions !",
      key: "features_03",
    },
  ],
  subscriber: [
    {
      title: "1. Create a Maiar wallet",
      content: "All the answers to your question are here",
      key: "features_04",
    },
    {
      title: "2. Deposit a bunch of eGLD",
      content: "To be able to donate them via Maiar",
      key: "features_05",
    },
    {
      title: "3. Support your streamers",
      content: "And enjoy full interaction on its live streaming",
      key: "features_06",
    },
  ],
};

// type Background = { [key: string]: string };

// const backgrounds: Background = {
//   features_01: "red",
//   features_02: "blue",
//   features_03: "green",
//   features_04: "yellow",
//   features_05: "purple",
//   features_06: "gray",
// };

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
  const [
    isSubscriberOptionChecked,
    setIsSubscriberOptionChecked,
  ] = useState<boolean>(true);
  // const [focusedFeatureKey, setFocusedFeatureKey] = useState<string>(
  //   isSubscriberOptionChecked ? "features_04" : "features_01"
  // );

  return (
    <FeaturesContainer>
      <FeaturesHeader>
        <FeaturesTitle>How does it works ?</FeaturesTitle>
        <FeaturesSubTitle>Nothing simpler.</FeaturesSubTitle>
        <Switcher
          isSubscriberOptionChecked={isSubscriberOptionChecked}
          setIsSubscriberOptionChecked={setIsSubscriberOptionChecked}
        ></Switcher>
      </FeaturesHeader>
      <FeaturesContent>
        <FeaturesSubContent>
          {features[isSubscriberOptionChecked ? "subscriber" : "streamer"].map(
            ({ title, content, key }) => {
              const Icon = iconsMapper[key];

              return (
                <FeaturePaper key={key}>
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
        {/* <FeatureScreen TO-DO !
          background={backgrounds[focusedFeatureKey] as string}
        ></FeatureScreen> */}
      </FeaturesContent>
    </FeaturesContainer>
  );
};

export default Features;
