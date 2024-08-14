import React from "react";

const VideoCard = ({ postBanner }) => {
  const img = postBanner?.metadata?.video?.split("=")[1];
  return (
    <div className="video-banner-container">
      <div className="video-banner__overlay">
        <iframe
          src={`https://www.youtube.com/embed/${img}?autoplay=1`}
          frameborder="0"
          allow="autoplay"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
};

export default VideoCard;
