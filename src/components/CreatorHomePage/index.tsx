import React, { useContext, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";

import config from "../../config/config";
import { submitHerotag } from "../../services/auth";
import { getViewerOnboardingData } from "../../services/user";
import { FlexColumn, FlexRow } from "../../styles/global";
import { ErrorHandlingContext } from "../ErrorHandlingContext";
import {
  Arobase,
  Box,
  Container,
  Content,
  Herotag,
  HerotagBox,
  MaiarImage,
  QrCode,
  StepNumber,
  StepTitle,
} from "./style";

const StreamerHomePage = () => {
  const [referralLink, setReferralLink] = useState<string>();
  const [herotagQrCodePath, setHerotagQrCodePath] = useState<string>();

  const { handleError } = useContext(ErrorHandlingContext);
  const { herotag } = useParams<{ herotag: string }>();
  const history = useHistory();

  useEffect(() => {
    submitHerotag(herotag).catch(() => {
      history.replace("/");
    });
  }, [herotag, history]);

  useEffect(() => {
    getViewerOnboardingData(herotag)
      .then((data) => {
        setReferralLink(data.referralLink);
        setHerotagQrCodePath(data.herotagQrCodePath);
      })
      .catch((error) => handleError(error.message));
  }, [herotag, history, setReferralLink, setHerotagQrCodePath, handleError]);

  return (
    <Container>
      <Content>
        <FlexColumn>
          <StepTitle>Download Maiar App</StepTitle>
          <Box>
            <a
              href={referralLink || "https://get.maiar.com/referral/6vcqxt658e"}
              target="about:blank"
            >
              <MaiarImage src="/maiar.png"></MaiarImage>
            </a>
            <StepNumber>1.</StepNumber>
          </Box>
        </FlexColumn>

        <Box>
          <StepTitle>Get EGLD</StepTitle>
          <StepNumber>2.</StepNumber>
        </Box>

        {!!herotagQrCodePath ? (
          <HerotagBox>
            <FlexRow>
              <StepTitle className="blurrable">
                Donate to my herotag : <br></br>
                <Herotag>
                  <Arobase>@</Arobase>
                  {herotag.replace("@", "").replace(".elrond", "")}
                </Herotag>
              </StepTitle>
              <StepNumber>3.</StepNumber>
            </FlexRow>
            <QrCode src={`${config.url}/images/${herotagQrCodePath}`}></QrCode>
          </HerotagBox>
        ) : (
          <Box>
            <StepTitle>
              Donate to my herotag : <br></br>
              <Herotag>
                <Arobase>@</Arobase>
                {herotag.replace("@", "").replace(".elrond", "")}
              </Herotag>
            </StepTitle>
            <StepNumber>3.</StepNumber>
          </Box>
        )}
      </Content>
    </Container>
  );
};

export default StreamerHomePage;
