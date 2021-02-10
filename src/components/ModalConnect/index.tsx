import { useState } from "react";
import { ModalContainer, ModalContent } from "./style";
import { Snackbar } from "./Snackbar";
import { PendingVerificationScreen } from "./PendingVerificationScreen";
import { ConnectionScreen } from "./ConnectionScreen";

interface ModalConnectProps {
  handleClose: () => void;
  isConnectModalOpenned: boolean;
  isOnPendingVerificationScreen: boolean;
  setIsOnPendingVerificationScreen: (s: boolean) => void;
}

const ModalConnect = ({
  handleClose,
  isConnectModalOpenned,
  isOnPendingVerificationScreen,
  setIsOnPendingVerificationScreen,
}: ModalConnectProps) => {
  const [snackbarData, setSnackBarData] = useState<{} | null>(null);

  return (
    <>
      <ModalContainer open={!!isConnectModalOpenned} onClose={handleClose}>
        <ModalContent>
          {isOnPendingVerificationScreen ? (
            <PendingVerificationScreen
              setIsOnPendingVerificationScreen={
                setIsOnPendingVerificationScreen
              }
            ></PendingVerificationScreen>
          ) : (
            <ConnectionScreen
              setIsOnPendingVerificationScreen={
                setIsOnPendingVerificationScreen
              }
              handleClose={handleClose}
            ></ConnectionScreen>
          )}
        </ModalContent>
      </ModalContainer>
      <Snackbar
        snackbarData={snackbarData}
        setSnackBarData={setSnackBarData}
      ></Snackbar>
    </>
  );
};

export default ModalConnect;
