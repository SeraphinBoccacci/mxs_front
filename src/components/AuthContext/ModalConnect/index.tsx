import { useState, useContext } from "react";
import { AuthContext } from "..";
import { ModalContainer, ModalContent } from "./style";
import { Snackbar } from "./Snackbar";
import { PendingVerificationScreen } from "./PendingVerificationScreen";
import { ConnectionScreen } from "./ConnectionScreen";

interface ModalConnectProps {
  open: boolean;
  handleClose: () => void;
}

const ModalConnect = ({ open, handleClose }: ModalConnectProps) => {
  const [snackbarData, setSnackBarData] = useState<{} | null>(null);
  const { isOnPendingVerificationScreen } = useContext(AuthContext);

  return (
    <>
      <ModalContainer open={open} onClose={handleClose}>
        <ModalContent>
          {isOnPendingVerificationScreen ? (
            <PendingVerificationScreen
              handleClose={handleClose}
            ></PendingVerificationScreen>
          ) : (
            <ConnectionScreen handleClose={handleClose}></ConnectionScreen>
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
