import React from "react";

import { Anchor, AnchorsContainer } from "./style";

const scrollTo = (id: string) => {
  const element = document.getElementById(id);

  if (!element) return;

  setTimeout(() => {
    window.scrollTo({
      behavior: "smooth",
      top: element.offsetTop,
    });
  }, 100);
};

const Anchors = () => {
  return (
    <AnchorsContainer>
      <Anchor onClick={() => scrollTo("home")}>Home</Anchor>
      <Anchor onClick={() => scrollTo("features")}>Features</Anchor>
      <Anchor onClick={() => scrollTo("community")}>FAQ</Anchor>
    </AnchorsContainer>
  );
};

export default Anchors;
