import { useState } from "react";
import React from "react";

import LabLayout from "../../components/LabLayout";
import BannersCaroussel from "./BannersCaroussel";
import ChatBotGenerator from "./ChatBotGenerator";
import { AccountContainer } from "./style";
import ViewersOnboardingForm from "./ViewersOnboardingForm";

const Account = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  return (
    <LabLayout>
      <AccountContainer>
        <BannersCaroussel></BannersCaroussel>

        <ViewersOnboardingForm
          setIsSubmitting={setIsSubmitting}
          isSubmitting={isSubmitting}
        ></ViewersOnboardingForm>

        <ChatBotGenerator></ChatBotGenerator>
      </AccountContainer>
    </LabLayout>
  );
};

export default Account;
