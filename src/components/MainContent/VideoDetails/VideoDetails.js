import React from "react";
import "./VideoDetails.css";
import likeIkon from "../../../assets/svgs/like.svg";
import dislikeIkon from "../../../assets/svgs/dislike.svg";
import arrowIkon from "../../../assets/svgs/arrow.svg";
import dotsIcon from "../../../assets/svgs/more-dots.svg";

function VideoDetails() {
  return (
    <div className="video-details">
      <h3 className="video-title">Dude You Re Getting A Telescope</h3>
      <div className="video-stats">
        <p className="video-views">123k views</p>
        <div className="video-actions">
          <button className="video-action-btn">
            <img src={likeIkon} alt="Like Icon" />
            <span>123k</span>
          </button>
          <button className="video-action-btn">
            <img src={dislikeIkon} alt="Dislike Icon" />
            <span>435k</span>
          </button>
          <button className="video-action-btn">
            <img src={arrowIkon} alt="arrowIkon Icon" />
            <span>Share</span>
          </button>
          <div className="video-action-btn video-action-dots">
            <img src={dotsIcon} alt="arrowIkon Icon" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoDetails;
