import React from 'react';
import './VideoPlayer.css';
import mainVideo from '../../../assets/imgs/mainVideo.jpg'; 
import PlayerControls from '../VideoPlayer/PlayerControls/PlayerControls.js';

function VideoPlayer() {
  return (
    <div className="player">

      <img src={mainVideo} alt="Main Video" className="player__screen" />
      <PlayerControls />
    </div>
  );
}

export default VideoPlayer;
