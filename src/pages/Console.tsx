import React from "react";
import { Helmet } from "react-helmet";

import StyledConsole from "../components/Console";

const Console = () => {
  return (
    <>
      <Helmet>
        <title>Console</title>
      </Helmet>
      <StyledConsole></StyledConsole>
    </>
  );
};

export default Console;
