import React from "react";

const VideoCard = ({ heroBanner }) => {
  return (
    <div className="video-banner-container">
      {/* <div className="video-banner"></div> */}
      <div className="video-banner__overlay">
        <iframe
          src="https://www.youtube.com/embed/LjmPl5zX1Yc"
          // title="24/7 LIVE STREAM🔴2 Hours Nonstop Christian Worship Songs ~ Best Hillsong Worship Songs Of All Time"
          frameborder="0"
          allow="accelerometer; encrypted-media; gyroscope"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
};

export default VideoCard;
