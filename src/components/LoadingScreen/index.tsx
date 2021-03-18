import CircularProgress from "@material-ui/core/CircularProgress";
import React from "react";

import { Screen } from "./style";

const LoadingScreen = () => {
  return (
    <Screen>
      <CircularProgress size="4rem" color="secondary"></CircularProgress>
    </Screen>
  );
};

export default LoadingScreen;
