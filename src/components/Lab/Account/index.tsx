import { useCallback, useEffect, useState } from "react";
import React from "react";
import { useHistory } from "react-router";

import { toggleStreamingActivation } from "../../../services/user";
import { ContentContainer } from "../../../styles/global";
import { useAuth } from "../../AuthContext";
import AuthModal, { ModalKinds } from "../../AuthModal";
import ActivationSwitch from "../ActivationSwitch";
import { Paragraph } from "../TabPanel/style";
import BannersCaroussel from "./BannersCaroussel";
import ChatBotGenerator from "./ChatBotGenerator";
import MinimumEgoldAmountForm from "./MinimumEgoldAmountForm";
import { AccountContainer, Button } from "./style";
import ViewersOnboardingForm from "./ViewersOnboardingForm";

const Account = () => {
  const { user, setTokenData, setHerotag } = useAuth();
  const history = useHistory();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isStreamActive, setIsStreamActive] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpened] = useState(false);

  useEffect(() => {
    setIsStreamActive(user?.isStreaming || false);
  }, [setIsStreamActive, user]);

  const handleSwitchChange = useCallback(async () => {
    setIsSubmitting(true);

    if (user && user.herotag)
      await toggleStreamingActivation(user?.herotag, !isStreamActive);

    setIsStreamActive(!isStreamActive);
    setIsSubmitting(false);
  }, [setIsSubmitting, user, isStreamActive, setIsStreamActive]);

  const handleModalOpen = useCallback(() => {
    setIsAuthModalOpened(true);
  }, [setIsAuthModalOpened]);

  const handleModalClose = useCallback(() => {
    setIsAuthModalOpened(false);
  }, [setIsAuthModalOpened]);

  const handleDisconnect = useCallback(() => {
    setTokenData(null);
    setHerotag("");

    history.push("/");
  }, [setTokenData, setHerotag, history]);

  return (
    <>
      <AccountContainer>
        <ContentContainer>
          <Paragraph>
            Activate particles in your streaming content by switching on the
            toggle below.
          </Paragraph>
          <ActivationSwitch
            label="Start Streaming"
            isSubmitting={isSubmitting}
            isActive={isStreamActive}
            onChange={handleSwitchChange}
          ></ActivationSwitch>
        </ContentContainer>
        <MinimumEgoldAmountForm
          setIsSubmitting={setIsSubmitting}
          isSubmitting={isSubmitting}
        ></MinimumEgoldAmountForm>

        <BannersCaroussel></BannersCaroussel>

        <ViewersOnboardingForm
          setIsSubmitting={setIsSubmitting}
          isSubmitting={isSubmitting}
        ></ViewersOnboardingForm>

        <ChatBotGenerator></ChatBotGenerator>

        <ContentContainer>
          <Button
            variant="outlined"
            color="secondary"
            onClick={handleModalOpen}
          >
            Modify Password
          </Button>
          <Button
            color="primary"
            variant="contained"
            onClick={handleDisconnect}
          >
            Disconnect
          </Button>
        </ContentContainer>
      </AccountContainer>
      <AuthModal
        isConnectModalOpenned={isAuthModalOpen}
        handleClose={handleModalClose}
        defaultModalKind={ModalKinds.PasswordEdit}
        isOnlyPasswordEdit
      ></AuthModal>
    </>
  );
};

export default Account;
