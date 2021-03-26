import React from "react";
import ReactPlayer from "react-player";

import { Container, Title } from "./style";

const VideoSection = () => {
  return (
    <Container>
      <Title>Discover StreamParticles</Title>
      <ReactPlayer url="https://www.youtube.com/watch?v=yMB6Nn3w8Ls&t=0s"></ReactPlayer>
    </Container>
  );
};

export default VideoSection;
