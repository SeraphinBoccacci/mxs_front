import React from "react";
import styled from "styled-components";

const Logo = () => {
  const LogoDiv = styled.div`
    background-image: url("logo.png");
    width: 100%;
    height: 100%;

    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
  `;

  const Container = styled.div`
    width: 10rem;
    height: 3rem;

    margin: auto 0;
    padding: 0 0.9rem;

    background-color: #fff;
    border-radius: 0.4rem;

    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.12),
      0 4px 4px rgba(0, 0, 0, 0.12), 0 8px 8px rgba(0, 0, 0, 0.12),
      0 16px 16px rgba(0, 0, 0, 0.12);

    @media (min-width: 700px) {
      width: 10rem;
      height: 3rem;
      padding: 0 0.8rem;
    }

    @media (min-width: 1000px) {
      width: 11rem;
      height: 3rem;
      padding: 0 1rem;
    }
  `;

  return (
    <Container>
      <LogoDiv></LogoDiv>
    </Container>
  );
};

export default Logo;
