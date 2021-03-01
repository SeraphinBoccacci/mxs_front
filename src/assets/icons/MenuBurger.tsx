import React from "react";
import styled from "styled-components";

import { colors } from "../../constants";

const Path = styled.path`
  fill: ${colors.secondary};
`;
const TopPath = styled(Path)<{ isActive: boolean }>`
  transition: 0.2s;

  transform: ${({ isActive }) =>
    isActive ? "translateY(25%)" : "translateY(0px)"};
  opacity: ${({ isActive }) => (isActive ? "0" : "1")};
`;
const MiddlePathOne = styled(Path)<{ isActive: boolean }>`
  transform-origin: center;
  transition: 0.4s;

  transform: ${({ isActive }) => (isActive ? "rotate(45deg)" : "rotate(0deg)")};
`;
const MiddlePathTwo = styled(Path)<{ isActive: boolean }>`
  transform-origin: center;
  transition: transform 0.4s;
  opacity: 0;

  transform: ${({ isActive }) =>
    isActive ? "rotate(-45deg)" : "rotate(0deg)"};
  opacity: ${({ isActive }) => (isActive ? "1" : "0")};
`;
const BottomPath = styled(Path)<{ isActive: boolean }>`
  transition: 0.2s;

  transform: ${({ isActive }) =>
    isActive ? "translateY(-25%)" : "translateY(0px)"};
  opacity: ${({ isActive }) => (isActive ? "0" : "1")};
`;

const MenuBurger = ({
  isActive,
  width,
  onClick,
}: {
  width: string;
  isActive: boolean;
  onClick: () => void;
}) => {
  return (
    <svg onClick={onClick} width={width} viewBox="0 0 32 32">
      <g>
        <TopPath
          isActive={isActive}
          d="M28,10H4A1,1,0,0,1,4,8H28a1,1,0,0,1,0,2Z"
        />
        <MiddlePathOne
          isActive={isActive}
          d="M28,17H4a1,1,0,0,1,0-2H28a1,1,0,0,1,0,2Z"
        />
        <MiddlePathTwo
          isActive={isActive}
          d="M28,17H4a1,1,0,0,1,0-2H28a1,1,0,0,1,0,2Z"
        />
        <BottomPath
          isActive={isActive}
          d="M28,24H4a1,1,0,0,1,0-2H28a1,1,0,0,1,0,2Z"
        />
      </g>
    </svg>
  );
};

export default MenuBurger;
