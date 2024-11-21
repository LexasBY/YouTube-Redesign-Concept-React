import React from "react";
import "./VideoDetails.css";

function VideoDetails() {
  return (
    <div className="video-details">
      <h1 className="video-title">Dude You're Getting A Telescope</h1>
      <p className="video-stats">123k views 14 Jun 2019</p>
      <div className="video-actions">
        <button>👍 Like</button>
        <button>👎 Dislike</button>
        <button>🔗 Share</button>
      </div>
    </div>
  );
}

export default VideoDetails;
