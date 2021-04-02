import React, { useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";

import { submitHerotag } from "../../services/auth";
import { FlexColumn } from "../../styles/global";
import {
  Box,
  Container,
  Content,
  Herotag,
  MaiarImage,
  StepNumber,
  StepTitle,
} from "./styled";

const StreamerHomePage = () => {
  const { herotag } = useParams<{ herotag: string }>();
  const history = useHistory();

  useEffect(() => {
    submitHerotag(herotag).catch(() => {
      history.replace("/");
    });
  }, [herotag, history]);

  return (
    <Container>
      <Content>
        <FlexColumn>
          <StepTitle>Download Maiar App</StepTitle>
          <Box>
            <a
              href="https://get.maiar.com/referral/6vcqxt658e"
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
        <Box>
          <StepTitle>
            Donate to my herotag : <br></br>
            <Herotag>@{herotag}</Herotag>
          </StepTitle>
          <StepNumber>3.</StepNumber>
        </Box>
      </Content>
    </Container>
  );
};

export default StreamerHomePage;
