import { Button } from "@material-ui/core";
import { useCallback, useContext, useEffect, useState } from "react";
import React from "react";

import { toggleStreamingActivation } from "../../../services/user";
import { ContentContainer } from "../../../styles/global";
import { AuthContext } from "../../AuthContext";
import AuthModal, { ModalKinds } from "../../AuthModal";
import { Paragraph } from "../style";
import { AccountContainer, ActivateIntegration, ActivateSwitch } from "./style";

export const Account = () => {
  const { user } = useContext(AuthContext);

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

  return (
    <>
      <AccountContainer>
        <ContentContainer>
          <Paragraph>
            Activate particles in your streaming content by switching on the
            toggle below.
          </Paragraph>
        </ContentContainer>
        <ContentContainer>
          <ActivateIntegration>
            Start Streaming
            <ActivateSwitch
              disabled={isSubmitting}
              checked={isStreamActive}
              onChange={handleSwitchChange}
              color="secondary"
            ></ActivateSwitch>
          </ActivateIntegration>
        </ContentContainer>
        <ContentContainer>
          <Button color="secondary" onClick={handleModalOpen}>
            Modify Password
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
