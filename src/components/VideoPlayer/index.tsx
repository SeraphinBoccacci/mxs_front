import React from "react";
import ReactPlayer from "react-player";

import { VideoPlayerContainer, VideoPlayerContent } from "./style";

interface VideoPlayerProps {
  url: string;
}

const VideoPlayer = ({ url }: VideoPlayerProps) => {
  return (
    <VideoPlayerContainer>
      <VideoPlayerContent>
        <ReactPlayer
          style={{
            position: "absolute",
            top: "0",
            left: "0",
          }}
          url={url}
          width="100%"
          height="100%"
        ></ReactPlayer>
      </VideoPlayerContent>
    </VideoPlayerContainer>
  );
};

export default VideoPlayer;
