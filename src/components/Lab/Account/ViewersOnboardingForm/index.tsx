import React, { useCallback, useContext, useEffect } from "react";
import { useHistory } from "react-router";

import { useForm } from "../../../../hooks/useForm";
import { updateViewerOnboardingData } from "../../../../services/user";
import { ContentContainer, FlexRow } from "../../../../styles/global";
import { useAuth } from "../../../AuthContext";
import { ErrorHandlingContext } from "../../../ErrorHandlingContext";
import Input from "../../../Input";
import Upload from "../../../Upload";
import { Comment, Form } from "../style";
import { Button, FormContent } from "./style";

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
  const history = useHistory();

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
    if (user?.herotag) history.push(`/creator/${user?.herotag}`);
  }, [history, user?.herotag]);

  return (
    <ContentContainer>
      <Form onSubmit={handleSubmit}>
        <FormContent>
          <Input
            isDisabled={isSubmitting}
            inputName="referralLink"
            inputLabel="Referral Link"
            value={formData.referralLink}
            onChange={handleOnChange}
          ></Input>
          <Upload
            inputName="herotagQrCodePath"
            inputLabel="Herotag QR Code"
            value={formData.herotagQrCodePath}
            onChange={handleOnChange}
          ></Upload>
          <Comment>
            Upload your herotag QR Code to easily let your viewers support you.
          </Comment>
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
            My onboarding page
          </Button>
        </FlexRow>
      </Form>
    </ContentContainer>
  );
};

export default MinimumEgoldAmountForm;
