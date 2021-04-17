import React from "react";

import { IconProps } from "./interface";
import { Svg } from "./style";
const props = {
  strokeWidth: 50,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  stroke: "#231",
} as React.SVGProps<SVGPathElement>;

const ParticlesFallIcon = ({ width }: IconProps) => {
  return (
    <Svg width={width} viewBox="0 0 1920 1920">
      <path {...props} d="M410.5 1035.9s-39.3-184.9-1.1-257.1" />
      <path {...props} d="M499 1035.9c3-9 18-154.3-6-271.3" />
      <path {...props} d="M589 737.5s-21 244.3 0 298.3" />
      <path {...props} d="M670 1035.9s30-198 6-288" />
      <path {...props} d="M763 795.8c0 39-3 225 15 240" />
      <path {...props} d="M835 1035.9c0-12 30-153 9-234" />
      <path {...props} d="M922 780.8s-12 237 9 255" />
      <path {...props} d="M1006 1035.9s39-156 15-258" />
      <path {...props} d="M1111 798.8c0 9-18 210 15 237" />
      <path {...props} d="M1201.1 762.8s24 219 0 273" />
      <path {...props} d="M1276.1 789.8c3 12 9 231 39 246" />
      <path {...props} d="M1372.1 818.5c-6 33-9 202.3 12 217.3" />
      <path {...props} d="M1444.1 1035.9s3-135-6-264" />
      <path {...props} d="M1511.5 1035.9c1.5-6 28.5-160.5 6-265.5" />
      <path {...props} d="M1604.5 773.4c1.5 4.5-9 252 0 262.5" />
      <path {...props} d="M303.5 1035.9c3-6 25.5-100.5 12-196.5" />
      <path {...props} d="M239 1035.9c0-4.5-10.5-129 15-222" />
      <path {...props} d="M1671.9 1035.9c0-6 37.5-147 3-196.5" />
    </Svg>
  );
};

export default ParticlesFallIcon;
