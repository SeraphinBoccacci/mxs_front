import { useCallback, useState } from "react";
import React from "react";
import { useHistory } from "react-router";

import { useAuth } from "../../components/AuthContext";
import AuthModal, { ModalKinds } from "../../components/AuthModal";
import LabLayout from "../../components/LabLayout";
import routes from "../../constants/routes";
import { ContentContainer } from "../../styles/global";
import { AccountContainer, Button } from "./style";

const Account = () => {
  const { setTokenData, setHerotag } = useAuth();
  const history = useHistory();

  const [isAuthModalOpen, setIsAuthModalOpened] = useState(false);

  const handleModalOpen = useCallback(() => {
    setIsAuthModalOpened(true);
  }, [setIsAuthModalOpened]);

  const handleModalClose = useCallback(() => {
    setIsAuthModalOpened(false);
  }, [setIsAuthModalOpened]);

  const handleDisconnect = useCallback(() => {
    setTokenData(null);
    setHerotag("");

    history.push(routes.home);
  }, [setTokenData, setHerotag, history]);

  return (
    <LabLayout>
      <AccountContainer>
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
    </LabLayout>
  );
};

export default Account;
