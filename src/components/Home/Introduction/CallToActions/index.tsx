import { Button } from "@material-ui/core";
import React from "react";

import { CallsToActionsContainer } from "./style";

const CallToActions = ({
  setIsViewer,
}: {
  setIsViewer: (b: boolean) => void;
}) => {
  const scrollToFeatures = () => {
    const element = document.getElementById("features");

    if (!element) return;

    setTimeout(() => {
      window.scrollTo({
        behavior: "smooth",
        top: element.offsetTop,
      });
    }, 100);
  };
  return (
    <CallsToActionsContainer>
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          setIsViewer(false);
          scrollToFeatures();
        }}
      >
        I&rsquo;m a creator
      </Button>
      <Button
        variant="outlined"
        color="secondary"
        onClick={() => {
          setIsViewer(true);
          scrollToFeatures();
        }}
      >
        I&rsquo;m a viewer
      </Button>
    </CallsToActionsContainer>
  );
};

export default CallToActions;
