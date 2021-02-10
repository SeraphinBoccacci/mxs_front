import { ButtonsContainer } from "./style";
import { Button } from "../../Button";
import { useContext } from "react";
import { AuthContext } from "../../AuthContext";
import { useHistory } from "react-router-dom";
import ModalConnect from "../../ModalConnect";
import { useQueryString } from "../../../hooks/useQueryString";

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
        <Button onClick={() => {}} type="outlined">
          Docs
        </Button>
        {isAuthenticated ? (
          <Button
            onClick={() => {
              history.push("/console");
            }}
          >
            Console
          </Button>
        ) : (
          <>
            <Button
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
