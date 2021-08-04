import React, { useState } from "react";

function VideoPlay({ videoUrl, txt1, txt2 }) {
  const [video, setVideo] = useState(false);
  return (
    <div className="home-bg-wrapp">
      {video ? (
        <iframe
          className="video_frame"
          style={{ height: "405px" }}
          src={`${videoUrl}?&loop=1&playlist=${videoUrl.substring(30, 41)}`}
          allowFullScreen
        ></iframe>
      ) : (
        <div className="video_bg" style={{ height: "405px" }}>
          <div className="video_img-02"></div>
          <span>{txt1}</span>
          <span className="play-video" onClick={() => setVideo(true)}>
            Play Video
          </span>
          <span>{txt2}</span>
        </div>
      )}
    </div>
  );
}

export default VideoPlay;
