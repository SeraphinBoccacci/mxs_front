import { useCallback, useEffect, useState } from "react";
import React from "react";

import ActivationSwitch from "../../components/ActivationSwitch";
import { useAuth } from "../../components/AuthContext";
import LabLayout from "../../components/LabLayout";
import { toggleStreamingActivation } from "../../services/user";
import { Paragraph } from "../../styles/global";
import { ContentContainer } from "../../styles/global";
import MinimumEgoldAmountForm from "./MinimumEgoldAmountForm";
import { AccountContainer } from "./style";

const Account = () => {
  const { user } = useAuth();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isStreamActive, setIsStreamActive] = useState(false);

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

  return (
    <LabLayout>
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
      </AccountContainer>
    </LabLayout>
  );
};

export default Account;
