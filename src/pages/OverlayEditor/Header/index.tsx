import { Button } from "@material-ui/core";
import KeyboardBackspaceRoundedIcon from "@material-ui/icons/KeyboardBackspaceRounded";
import React, { useCallback, useState } from "react";

import config from "../../../config/config";
import routes from "../../../constants/routes";
import { useHistoryWithQueryString } from "../../../hooks/useHistoryWithQuerystring";
import { useQueryString } from "../../../hooks/useQueryString";
import { useEditorContext } from "../Context";
import { Buttons, Container } from "./style";

const Header = () => {
  const [hasJustCopied, setHasJustCopied] = useState(false);
  const [herotag] = useQueryString("herotag");
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
        <Button
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
        </Button>
        <Button disabled={!browserSource} variant="outlined" color="secondary">
          {browserSource ? (
            <a href={browserSource} target="about:blank">
              Preview
            </a>
          ) : (
            "Preview"
          )}
        </Button>
        <Button variant="contained" color="secondary">
          Save
        </Button>
      </Buttons>
    </Container>
  );
};

export default Header;
