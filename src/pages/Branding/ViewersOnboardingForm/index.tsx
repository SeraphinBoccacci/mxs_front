import React, { useCallback, useContext, useEffect } from "react";

import { useAuth } from "../../../components/AuthContext";
import { ErrorHandlingContext } from "../../../components/ErrorHandlingContext";
import Input from "../../../components/Input";
import Upload from "../../../components/Upload";
import { useForm } from "../../../hooks/useForm";
import { useHistoryWithQueryString } from "../../../hooks/useHistoryWithQuerystring";
import { updateViewerOnboardingData } from "../../../services/user";
import { ContentContainer, FlexRow } from "../../../styles/global";
import { Comment, Form, OnboardingTitle } from "../style";
import { Button, FormContent, HowTo } from "./style";

interface MinimumEgoldAmountFormProps {
  setIsSubmitting: (isSubmitting: boolean) => void;
  isSubmitting: boolean;
}

const MinimumEgoldAmountForm = ({
  setIsSubmitting,
  isSubmitting,
}: MinimumEgoldAmountFormProps) => {
  const { user } = useAuth();
  const { handleError } = useContext(ErrorHandlingContext);
  const [pushHistory] = useHistoryWithQueryString();

  const [formData, setFormData] = useForm<{
    referralLink?: string;
    herotagQrCodePath?: string;
  }>({});

  useEffect(() => {
    setFormData({
      value: {
        ...(user?.referralLink && { referralLink: user?.referralLink }),
        ...(user?.herotagQrCodePath && {
          herotagQrCodePath: user?.herotagQrCodePath,
        }),
      },
    });
  }, [setFormData, user]);

  const handleOnChange = useCallback(
    (data) => {
      setFormData(data);
    },
    [setFormData]
  );

  const handleSubmit = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      try {
        setIsSubmitting(true);
        if (user?.herotag)
          await updateViewerOnboardingData(
            user.herotag,
            formData.referralLink,
            formData.herotagQrCodePath
          );

        setIsSubmitting(false);
        return;
      } catch (error) {
        handleError(error.message);
      }
    },
    [
      formData.referralLink,
      formData.herotagQrCodePath,
      user,
      handleError,
      setIsSubmitting,
    ]
  );

  const goToOnBoardingPage = useCallback(() => {
    if (user?.herotag) pushHistory(`/creator/${user?.herotag}`);
  }, [pushHistory, user?.herotag]);

  return (
    <ContentContainer>
      <OnboardingTitle>Your custom tipping page</OnboardingTitle>
      <Form onSubmit={handleSubmit}>
        <FormContent>
          <Input
            isDisabled={isSubmitting}
            inputName="referralLink"
            inputLabel="Your maiar referral link"
            value={formData.referralLink}
            onChange={handleOnChange}
            tooltipText="Past your referral link here"
            centered
          ></Input>
          <Upload
            inputName="herotagQrCodePath"
            inputLabel="Herotag QR Code"
            value={formData.herotagQrCodePath}
            onChange={handleOnChange}
          ></Upload>
          <div>
            <Comment>
              Upload your herotag QR Code to easily let your viewers support
              you.
            </Comment>
            <HowTo tabIndex={0}>
              <span>How to find my herotag QR Code?</span>
              <img src="/qrcodeScreenShot.gif"></img>
            </HowTo>
          </div>
        </FormContent>
        <FlexRow>
          <Button variant="contained" color="primary" type="submit">
            Submit
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            type="button"
            onClick={goToOnBoardingPage}
          >
            My tipping page
          </Button>
        </FlexRow>
      </Form>
    </ContentContainer>
  );
};

export default MinimumEgoldAmountForm;
