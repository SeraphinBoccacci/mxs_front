import React from "react";
//@ts-ignore
import { withBreakpoints } from "react-breakpoints";

import StandartHeader from "./Header";
import MobileHeader from "./MobileHeader";

type breakpoints = { [key: string]: number };

const Header = ({
  breakpoints,
  currentBreakpoint,
}: {
  breakpoints: breakpoints;
  currentBreakpoint: string;
}) => {
  return breakpoints[currentBreakpoint] > breakpoints.mobileLandscape ? (
    <StandartHeader></StandartHeader>
  ) : (
    <MobileHeader></MobileHeader>
  );
};

export default withBreakpoints(Header);
