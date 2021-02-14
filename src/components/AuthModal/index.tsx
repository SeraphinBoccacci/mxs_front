import { ModalContainer, ModalContent } from "./style";
import { PendingVerificationScreen } from "./PendingVerificationScreen";
import { ConnectionScreen } from "./ConnectionScreen";
import { Fade } from "@material-ui/core";

interface ModalConnectProps {
  handleClose: () => void;
  isConnectModalOpenned: boolean;
  isOnPendingVerificationScreen: boolean;
  setIsOnPendingVerificationScreen: (s: boolean) => void;
}

const AuthModal = ({
  handleClose,
  isConnectModalOpenned,
  isOnPendingVerificationScreen,
  setIsOnPendingVerificationScreen,
}: ModalConnectProps) => {
  return (
    <>
      <ModalContainer open={!!isConnectModalOpenned} onClose={handleClose}>
        <Fade in={!!isConnectModalOpenned}>
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
        </Fade>
      </ModalContainer>
    </>
  );
};

export default AuthModal;
