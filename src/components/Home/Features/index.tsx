import { SvgIconTypeMap } from "@material-ui/core";
import { OverridableComponent } from "@material-ui/core/OverridableComponent";
import AccountBalanceWalletRoundedIcon from "@material-ui/icons/AccountBalanceWalletRounded";
import CreditCardRoundedIcon from "@material-ui/icons/CreditCardRounded";
import DonutSmallRoundedIcon from "@material-ui/icons/DonutSmallRounded";
import HighlightRoundedIcon from "@material-ui/icons/HighlightRounded";
import MovieCreationRoundedIcon from "@material-ui/icons/MovieCreationRounded";
import VideoCallRoundedIcon from "@material-ui/icons/VideoCallRounded";
import { useCallback, useEffect, useMemo, useState } from "react";
import React from "react";

import { Link } from "../../../styles/global";
import Switch from "../../Switch";
import {
  Feature,
  FeaturePaper,
  FeatureParagraph,
  FeaturesContainer,
  FeaturesContent,
  FeatureScreen,
  FeaturesHeader,
  FeaturesSubContent,
  FeaturesSubTitle,
  FeaturesTitle,
} from "./style";

const features = {
  creator: [
    {
      title: "1. Create your accounts",
      content: (
        <FeatureParagraph>
          You just need to create your Maiar wallet and your account on
          StreamParticles. It&rsquo;s totally free.
        </FeatureParagraph>
      ),
      key: "features_01",
    },
    {
      title: "2. Set your alerts",
      content: (
        <FeatureParagraph>
          Upload your own GIFs, your own Audios. Configure all the variations
          you need. Create a fully customized interaction with your donators.
        </FeatureParagraph>
      ),
      key: "features_02",
    },
    {
      title: "3. Start Streaming!",
      content: (
        <FeatureParagraph>
          Share your herotag to your community and let them support your
          content.
        </FeatureParagraph>
      ),
      key: "features_03",
    },
  ],
  viewer: [
    {
      title: "1. Create a Maiar wallet, it's free",
      content: (
        <FeatureParagraph>
          Maiar only requires your phone number and let’s you own some
          cryptocurrencies. More documentation{" "}
          <Link target="_blank" rel="noreferrer" href="https://maiar.com/">
            here
          </Link>
          .
        </FeatureParagraph>
      ),
      key: "features_04",
    },
    {
      title: "2. Buy or deposit EGLDs",
      content: (
        <FeatureParagraph>
          It is as easy as buying Bits on Twitch!<br></br>A list of ¤EGLD
          brokers is available{" "}
          <Link
            target="_blank"
            rel="noreferrer"
            href="https://buy.elrond.com/fr"
          >
            here
          </Link>
          .
        </FeatureParagraph>
      ),
      key: "features_05",
    },
    {
      title: "3. Support your favorite creators",
      content: (
        <FeatureParagraph>
          And enjoy full interaction on their livestreams. They get 100% of what
          you send them.
        </FeatureParagraph>
      ),
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

const Features = ({
  isViewer,
  setIsViewer,
}: {
  isViewer: boolean;
  setIsViewer: (b: boolean) => void;
}) => {
  const [focusedFeatureKey, setFocusedFeatureKey] = useState<string>(
    isViewer ? "features_04" : "features_01"
  );

  useEffect(() => {
    setFocusedFeatureKey(isViewer ? "features_04" : "features_01");
  }, [isViewer, setFocusedFeatureKey]);

  const handleSwitch = useCallback(
    (isChecked) => {
      setIsViewer(isChecked);
      setFocusedFeatureKey(isChecked ? "features_04" : "features_01");
    },
    [setIsViewer, setFocusedFeatureKey]
  );

  const featuresContent = useMemo(
    () =>
      features[isViewer ? "viewer" : "creator"].map(
        ({ title, content, key }) => {
          const Icon = iconsMapper[key];

          return (
            <FeaturePaper
              key={key}
              onMouseEnter={() => setFocusedFeatureKey(key)}
            >
              <Icon fontSize={false ? "large" : "small"}></Icon>
              <Feature>
                <h3>{title}</h3>
                {content}
              </Feature>
            </FeaturePaper>
          );
        }
      ),
    [isViewer]
  );

  return (
    <FeaturesContainer id="features">
      <FeaturesHeader>
        <FeaturesTitle>How does it work?</FeaturesTitle>
        <FeaturesSubTitle>Nothing simpler.</FeaturesSubTitle>
        <Switch
          isActive={isViewer}
          setIsActive={handleSwitch}
          offLabel="Creator"
          onLabel="Viewer"
        ></Switch>
      </FeaturesHeader>
      <FeaturesContent isRowReverse={!isViewer}>
        <FeaturesSubContent>{featuresContent}</FeaturesSubContent>
        <FeatureScreen
          key={`backgrounds-${focusedFeatureKey}`}
          background={backgrounds[focusedFeatureKey] as string}
        ></FeatureScreen>
      </FeaturesContent>
    </FeaturesContainer>
  );
};

export default Features;
