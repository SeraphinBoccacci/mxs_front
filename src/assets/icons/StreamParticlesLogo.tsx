import React from "react";
import styled from "styled-components";

const Logo = ({ width = "185.4" }: { width?: string }) => {
  const LogoDiv = styled.div`
    background-image: url("logo.png");
    background-color: #fff;
    margin: auto 0;
    width: ${width}px;
    height: ${Number(width) / 60}rem;

    padding: 0.6rem;

    border-radius: ${Number(width) / 264}rem;

    background-position: center center;
    background-size: contain;
    background-repeat: no-repeat;

    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.12),
      0 4px 4px rgba(0, 0, 0, 0.12), 0 8px 8px rgba(0, 0, 0, 0.12),
      0 16px 16px rgba(0, 0, 0, 0.12);
  `;

  return <LogoDiv></LogoDiv>;
};

export default Logo;
