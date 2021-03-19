import React from "react";
import { Helmet } from "react-helmet";

import StyledLab from "../components/Lab";

const Lab = () => {
  return (
    <>
      <Helmet>
        <title>Lab</title>
      </Helmet>
      <StyledLab></StyledLab>
    </>
  );
};

export default Lab;
