import CallToActions from "./CallToActions";
import {
  CatchPhraseAndImage,
  CatchPhraseContainer,
  MainCatchPhrase,
  Section,
  ShortCatchPhraseChip,
  SubMainCatchPhrase,
  LittleDisclaimer,
  InnerContainer,
  ReferencesContainer,
  ReferencesTitle,
  ReferencesContent,
  Reference,
} from "./style";
import logoTwitch from "../../../assets/twitch_logo.png";
import logoYoutube from "../../../assets/youtube.png";
import logoFacebook from "../../../assets/facebook.png";

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
              Use Maiar, we notify the xxx
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
        <ReferencesTitle>Active on those great platforms</ReferencesTitle>
        <ReferencesContent>
          <Reference logoPath={logoTwitch}>Twitch</Reference>
          <Reference logoPath={logoYoutube}>Youtube</Reference>
          <Reference logoPath={logoFacebook}>Facebook</Reference>
        </ReferencesContent>
      </ReferencesContainer>
    </Section>
  );
};

export default Introduction;
