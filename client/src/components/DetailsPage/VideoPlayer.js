import React from "react";
import ReactPlayer from "react-player";

const VideoPlayer = props => {
  return (
    <ReactPlayer
      url={props.video}
      playing={true}
      width={650}
      height={250}
      loop={true}
    />
  );
};

export default VideoPlayer;
