import React from 'react';
import VideoPlayer from './VideoPlayer/VideoPlayer.js';
import VideoDetails from './VideoDetails/VideoDetails.js';
import ChannelDescriptions from './ChannelDescriptions/ChannelDescriptions.js';
import './MainContent.css';

function MainContent() {
  return (
    <div className="main-content">
      <VideoPlayer />
      <VideoDetails />
      <hr className="divider" />
      <ChannelDescriptions />
    </div>
  );
}

export default MainContent;
