import React, { useState } from "react";

const YoutubeVideoWithThumbnail = ({ src }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true); 
  };

  return (
    <div className="youtube-video-container"> 
      <div
        className={`youtube-thumbnail ${isPlaying ? "hidden" : ""}`}
        onClick={handlePlay}
      >
        {!isPlaying && (
          <div className="play-button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="white"
              width="50px"
              height="50px"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        )}
      </div>

      {/* Video */}
      {isPlaying && (
        <iframe
          src={src}
          className="youtube-iframe"
          allow="autoplay; encrypted-media"
          allowFullScreen
          title="YouTube Video"
        ></iframe>
      )}
    </div>
  );
};

export default YoutubeVideoWithThumbnail;
