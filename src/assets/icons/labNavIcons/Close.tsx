import React from "react";

import { IconProps } from "./interface";
import { Svg } from "./style";

const CloseIcon = ({ color, width }: IconProps) => {
  return (
    <Svg width={width} viewBox="0 0 17 17">
      <g
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
        strokeLinecap="round"
      >
        <g
          transform="translate(-364.000000, -124.000000)"
          stroke={color || "#000000"}
        >
          <g transform="translate(360.000000, 120.000000)">
            <g>
              <g transform="translate(5.000000, 5.000000)" strokeWidth="2">
                <path d="M0,0 L14.1421356,14.1421356" id="Line"></path>
                <path d="M14,0 L1.77635684e-15,14" id="Line"></path>
              </g>
            </g>
          </g>
        </g>
      </g>
    </Svg>
  );
};

export default CloseIcon;
