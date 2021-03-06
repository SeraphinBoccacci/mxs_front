import { Button } from "@material-ui/core";
import { useContext } from "react";
import React from "react";

import { AuthContext } from "../../../../../components/AuthContext";
import ModalConnect from "../../../../../components/AuthModal";
import routes from "../../../../../constants/routes";
import { useHistoryWithQueryString } from "../../../../../hooks/useHistoryWithQuerystring";
import { useQueryString } from "../../../../../hooks/useQueryString";
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
  const [pushHistory] = useHistoryWithQueryString();

  const [isConnectModalOpenned, setIsModalOpenned] = useQueryString(
    "isConnectModalOpenned"
  );

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
        <Anchor onClick={() => scrollTo("community")}>FAQ</Anchor>
        <Button variant="outlined" onClick={() => {}}>
          Docs
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
                setIsMenuOpenned(false);
                setIsModalOpenned(true);
              }}
            >
              Connect
            </Button>
            <ModalConnect
              isConnectModalOpenned={isConnectModalOpenned}
              handleClose={() => setIsModalOpenned(false)}
            ></ModalConnect>
          </>
        )}
      </MenuContainer>
    </>
  );
};

export default Menu;
