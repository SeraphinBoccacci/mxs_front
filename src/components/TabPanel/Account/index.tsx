import { useContext, useEffect, useState } from "react";
import { toggleStreamingActivation } from "../../../services/user";
import { AuthContext } from "../../AuthContext";

import { ActivateIntegration, AccountContainer, ActivateSwitch } from "./style";

export const Account = () => {
  const { user } = useContext(AuthContext);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isStreamActive, setIsStreamActive] = useState(false);

  useEffect(() => {
    setIsStreamActive(user?.isStreaming || false);
  }, [setIsStreamActive, user]);

  const handleSwitchChange = async () => {
    setIsSubmitting(true);

    if (user && user.herotag)
      await toggleStreamingActivation(user?.herotag, !isStreamActive);

    setIsStreamActive(!isStreamActive);
    setIsSubmitting(false);
  };

  return (
    <AccountContainer>
      <ActivateIntegration>
        Start Streaming
        <ActivateSwitch
          disabled={isSubmitting}
          checked={isStreamActive}
          onChange={handleSwitchChange}
          color="primary"
        ></ActivateSwitch>
      </ActivateIntegration>
    </AccountContainer>
  );
};
