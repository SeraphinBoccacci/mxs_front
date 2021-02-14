import { ButtonsContainer } from "./style";
import { useContext } from "react";
import { AuthContext } from "../../../AuthContext";
import { useHistory } from "react-router-dom";
import ModalConnect from "../../../AuthModal";
import { useQueryString } from "../../../../hooks/useQueryString";
import { Button } from "@material-ui/core";

export const HeaderCTAs = () => {
  const { isAuthenticated } = useContext(AuthContext);
  const history = useHistory();

  const [isConnectModalOpenned, setIsModalOpenned] = useQueryString(
    "isConnectModalOpenned"
  );
  const [
    isOnPendingVerificationScreen,
    setIsOnPendingVerificationScreen,
  ] = useQueryString("isOnPendingVerificationScreen");

  return (
    <>
      <ButtonsContainer>
        <Button variant="outlined" onClick={() => {}}>
          Docs
        </Button>
        {isAuthenticated ? (
          <Button
            variant="contained"
            onClick={() => {
              history.push("/console");
            }}
          >
            Console
          </Button>
        ) : (
          <>
            <Button
              variant="contained"
              onClick={() => {
                setIsModalOpenned(true);
              }}
            >
              Connect
            </Button>
            <ModalConnect
              isConnectModalOpenned={isConnectModalOpenned}
              handleClose={() => setIsModalOpenned(false)}
              isOnPendingVerificationScreen={isOnPendingVerificationScreen}
              setIsOnPendingVerificationScreen={
                setIsOnPendingVerificationScreen
              }
            ></ModalConnect>
          </>
        )}
      </ButtonsContainer>
    </>
  );
};
