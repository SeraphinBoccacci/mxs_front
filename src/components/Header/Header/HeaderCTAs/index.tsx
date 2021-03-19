import { Button } from "@material-ui/core";
import { useContext } from "react";
import React from "react";
import { useHistory } from "react-router-dom";

import { useQueryString } from "../../../../hooks/useQueryString";
import { AuthContext } from "../../../AuthContext";
import AuthModal from "../../../AuthModal";
import { ButtonsContainer } from "./style";

export const HeaderCTAs = () => {
  const { isAuthenticated } = useContext(AuthContext);
  const history = useHistory();

  const [isConnectModalOpenned, setIsModalOpenned] = useQueryString(
    "isConnectModalOpenned"
  );

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
              history.push("/lab");
            }}
          >
            Lab
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
            <AuthModal
              isConnectModalOpenned={isConnectModalOpenned}
              handleClose={() => setIsModalOpenned(false)}
            ></AuthModal>
          </>
        )}
      </ButtonsContainer>
    </>
  );
};
