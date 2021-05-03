import { Button } from "@material-ui/core";
import KeyboardBackspaceRoundedIcon from "@material-ui/icons/KeyboardBackspaceRounded";
import React, { useCallback, useState } from "react";

import { useAuth } from "../../../components/AuthContext";
import EventTriggerer from "../../../components/EventTriggerer";
import config from "../../../config/config";
import routes from "../../../constants/routes";
import { useHistoryWithQueryString } from "../../../hooks/useHistoryWithQuerystring";
import { useEditorContext } from "../Context";
import { Buttons, Container, CopyButton } from "./style";

const Header = () => {
  const [hasJustCopied, setHasJustCopied] = useState(false);
  const { herotag } = useAuth();
  const { overlay } = useEditorContext();
  const [pushHistory] = useHistoryWithQueryString();

  const browserSource =
    !!overlay &&
    `${config.frontUrl}/browser-source/herotag/${herotag}/overlay/${overlay.generatedLink}`;

  const handleGoToMyOverlays = useCallback(() => {
    pushHistory(routes.overlays);
  }, [pushHistory]);

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(browserSource as string);
    setHasJustCopied(true);
    setTimeout(() => {
      setHasJustCopied(false);
    }, 1300);
  }, [setHasJustCopied, browserSource]);

  return (
    <Container>
      <Button>
        <KeyboardBackspaceRoundedIcon
          onClick={handleGoToMyOverlays}
          fontSize="large"
        ></KeyboardBackspaceRoundedIcon>
      </Button>

      <Buttons>
        <EventTriggerer variant="outlined" color="secondary"></EventTriggerer>
        <CopyButton
          disabled={!browserSource}
          onClick={handleCopy}
          variant="outlined"
          color="secondary"
        >
          {hasJustCopied ? (
            "Copied"
          ) : (
            <div>
              <span>Copy</span>
              <br></br>
              <span>Browser-source</span>
            </div>
          )}
        </CopyButton>
        <Button disabled={!browserSource} variant="contained" color="secondary">
          {browserSource ? (
            <a href={browserSource} target="about:blank">
              Preview
            </a>
          ) : (
            "Preview"
          )}
        </Button>
      </Buttons>
    </Container>
  );
};

export default Header;
