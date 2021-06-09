import { Button } from "@material-ui/core";
import { useContext } from "react";
import React from "react";

import { AuthContext } from "../../../../../components/AuthContext";
import AuthModal from "../../../../../components/AuthModal";
import routes from "../../../../../constants/routes";
import { useHistoryWithQueryString } from "../../../../../hooks/useHistoryWithQuerystring";
import { useQueryString } from "../../../../../hooks/useQueryString";
import { ButtonsContainer } from "./style";

export const HeaderCTAs = () => {
  const { isAuthenticated } = useContext(AuthContext);
  const [pushHistory] = useHistoryWithQueryString();

  const [isConnectModalOpenned, setIsModalOpenned] = useQueryString(
    "isConnectModalOpenned"
  );

  return (
    <ButtonsContainer>
      <Button variant="outlined">
        <a
          target="about:blank"
          href="https://github.com/SeraphinBoccacci/StreamParticles_BACK/blob/main/README.md"
        >
          Docs
        </a>
      </Button>
      {isAuthenticated ? (
        <Button
          variant="contained"
          onClick={() => {
            pushHistory(routes.userAccountSettings);
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
  );
};
