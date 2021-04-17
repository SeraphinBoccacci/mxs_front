import React, { ReactNode } from "react";
//@ts-ignore
import { withBreakpoints } from "react-breakpoints";

import LabNav from "./LabNav";
import MobileLabNav from "./MobileLabNav";
import { StyledLabLayoutContainer, StyledLabLayoutContent } from "./style";

type breakpoints = { [key: string]: number };
interface LabLayoutProps {
  children?: ReactNode;
  breakpoints: breakpoints;
  currentBreakpoint: string;
}

const LabLayout = ({
  children,
  breakpoints,
  currentBreakpoint,
}: LabLayoutProps) => {
  const Nav =
    breakpoints[currentBreakpoint] > breakpoints.tablet ? LabNav : MobileLabNav;
  return (
    <StyledLabLayoutContainer>
      <Nav></Nav>
      <StyledLabLayoutContent>{children}</StyledLabLayoutContent>
    </StyledLabLayoutContainer>
  );
};

export default withBreakpoints(LabLayout);
