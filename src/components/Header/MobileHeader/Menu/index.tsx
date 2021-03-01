import { Button } from "@material-ui/core";
import { useContext } from "react";
import React from "react";
import { useHistory } from "react-router-dom";

import { useQueryString } from "../../../../hooks/useQueryString";
import { AuthContext } from "../../../AuthContext";
import ModalConnect from "../../../AuthModal";
import { Anchor } from "../../Header/Anchors/style";
import { MenuBackground, MenuContainer } from "./style";

const Menu = ({
  isMenuOpenned,
  setIsMenuOpenned,
}: {
  isMenuOpenned: boolean;
  setIsMenuOpenned: (b: boolean) => void;
}) => {
  const { isAuthenticated } = useContext(AuthContext);
  const history = useHistory();

  const [isConnectModalOpenned, setIsModalOpenned] = useQueryString(
    "isConnectModalOpenned"
  );
  const [
    isOnPendingVerificationScreen,
    setIsOnPendingVerificationScreen,
  ] = useQueryString("isOnPendingVerificationScreen");

  const scrollTo = (id: string) => {
    setIsMenuOpenned(false);
    const element = document.getElementById(id);

    if (!element) return;

    setTimeout(() => {
      window.scrollTo({
        behavior: "smooth",
        top: element.offsetTop,
      });
    }, 100);
  };

  return (
    <>
      <MenuBackground
        onClick={() => setIsMenuOpenned(false)}
        isMenuOpenned={isMenuOpenned}
      ></MenuBackground>
      <MenuContainer isMenuOpenned={isMenuOpenned}>
        <Anchor onClick={() => scrollTo("home")}>Home</Anchor>
        <Anchor onClick={() => scrollTo("features")}>Features</Anchor>
        <Anchor onClick={() => scrollTo("community")}>Community</Anchor>
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
                setIsMenuOpenned(false);
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
      </MenuContainer>
    </>
  );
};

export default Menu;
