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
import logo from "../../../assets/twitch_logo.png";

const Introduction = () => {
  return (
    <Section>
      <CatchPhraseAndImage>
        <CatchPhraseContainer>
          <ShortCatchPhraseChip
            color="primary"
            size="small"
            label="Fast, inexpensive and interactive donations"
          ></ShortCatchPhraseChip>
          <InnerContainer>
            <MainCatchPhrase>
              The simplest way to support<br></br>your favorite streamers
            </MainCatchPhrase>
            <SubMainCatchPhrase>
              Use Maiar, we alert the streamers
            </SubMainCatchPhrase>
            <CallToActions></CallToActions>
          </InnerContainer>

          <LittleDisclaimer>
            MaiarXstreaM, is a free & open-source project. Feel free to donate
            via erd
          </LittleDisclaimer>
        </CatchPhraseContainer>
        {/* <Image src="maquette.png"></Image> TO-DO */}
      </CatchPhraseAndImage>
      <ReferencesContainer>
        <ReferencesTitle>Active on those great platforms</ReferencesTitle>
        <ReferencesContent>
          <Reference logoPath={logo}>Twitch</Reference>
        </ReferencesContent>
      </ReferencesContainer>
    </Section>
  );
};

export default Introduction;
