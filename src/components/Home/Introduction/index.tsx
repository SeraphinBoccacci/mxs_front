import React from "react";

import logoObs from "../../../assets/obsLogo.png";
import logoStreamLabsObs from "../../../assets/streamlabsObsLogo.png";
import logoTwitchStudio from "../../../assets/twitchStudioLogo.png";
import logoXPlit from "../../../assets/xplitLogo.png";
import CallToActions from "./CallToActions";
import {
  CatchPhraseAndImage,
  CatchPhraseContainer,
  InnerContainer,
  LittleDisclaimer,
  MainCatchPhrase,
  Reference,
  ReferencesContainer,
  ReferencesContent,
  ReferencesTitle,
  Section,
  ShortCatchPhraseChip,
  SubMainCatchPhrase,
} from "./style";

const Introduction = ({
  setIsViewer,
}: {
  setIsViewer: (b: boolean) => void;
}) => {
  return (
    <Section id="home">
      <CatchPhraseAndImage>
        <CatchPhraseContainer>
          <ShortCatchPhraseChip
            color="primary"
            size="small"
            label="Fast, inexpensive and interactive donations"
          ></ShortCatchPhraseChip>
          <InnerContainer>
            <MainCatchPhrase>
              The simplest way to support<br></br>your favorite creators
            </MainCatchPhrase>
            <SubMainCatchPhrase>
              Built on{" "}
              <a target="_blank" rel="noreferrer" href="https://maiar.com/">
                Maiar
              </a>{" "}
              and{" "}
              <a target="_blank" rel="noreferrer" href="https://elrond.com/">
                Elrond
              </a>
            </SubMainCatchPhrase>
            <CallToActions setIsViewer={setIsViewer}></CallToActions>
          </InnerContainer>

          <LittleDisclaimer>
            StreamParticles, is a free & open-source project. Feel free to
            donate via erd
          </LittleDisclaimer>
        </CatchPhraseContainer>
      </CatchPhraseAndImage>
      <ReferencesContainer>
        <ReferencesTitle>Works great with</ReferencesTitle>
        <ReferencesContent>
          <Reference
            target="about:blank"
            href="https://obsproject.com/fr"
            logoPath={logoObs}
          >
            OBS
          </Reference>
          <Reference
            target="about:blank"
            href="https://streamlabs.com/streamlabs-obs?l=fr-FR"
            logoPath={logoStreamLabsObs}
          >
            StreamLabs OBS
          </Reference>
          <Reference
            target="about:blank"
            href="https://www.xsplit.com/"
            logoPath={logoXPlit}
          >
            Xsplit
          </Reference>
          <Reference
            target="about:blank"
            href="https://www.twitch.tv/broadcast/studio"
            logoPath={logoTwitchStudio}
          >
            Twitch Studio
          </Reference>
        </ReferencesContent>
      </ReferencesContainer>
    </Section>
  );
};

export default Introduction;
