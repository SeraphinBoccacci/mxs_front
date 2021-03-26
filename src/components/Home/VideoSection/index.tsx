import React from "react";

import VideoPlayer from "../../VideoPlayer";
import { Container, Title } from "./style";

const VideoSection = () => {
  return (
    <Container>
      <Title>Discover StreamParticles</Title>
      <VideoPlayer url="https://www.youtube.com/watch?v=yMB6Nn3w8Ls&t=0s"></VideoPlayer>
    </Container>
  );
};

export default VideoSection;
