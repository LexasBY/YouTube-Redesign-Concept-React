import React from "react";
import "./PlayerControls.css";

import pauseButton from "../../../../assets/svgs/pause.svg";
import nextButton from "../../../../assets/svgs/next.svg";
import muteButton from "../../../../assets/svgs/volume.svg";
import subtitlesButton from "../../../../assets/svgs/subtitles.svg";
import settingsButton from "../../../../assets/svgs/settings.svg";
import theatherButton from "../../../../assets/svgs/size.svg";
import fullscreenButton from "../../../../assets/svgs/full-screen.svg";

function PlayerControls() {
  return (
    <div className="player__menu">
      <div className="player__time">
        <time className="player__time-passed">1:34</time>
        <time className="player__time-left">19:00</time>
      </div>

      <div className="progress">
        <div className="progress__bar" style={{ width: "20%" }}></div>
      </div>

      <div className="player__controls">
        <div className="player__btn-group player__btn-group_left">
          <button className="btn btn_pause">
            <img src={pauseButton} alt="Pause Icon" />
          </button>
          <button className="btn btn_next">
            <img src={nextButton} alt="Next Video Icon" />
          </button>
          <button className="btn btn_mute">
            <img src={muteButton} alt="Mute Icon" />
          </button>
          <div className="progress_small">
            <div className="progress__bar" style={{ width: "50%" }}></div>
          </div>
        </div>

        <div className="player__btn-group player__btn-group_right">
          <button className="btn btn_subtitles">
            <img src={subtitlesButton} alt="Subtitles Icon" />
          </button>
          <button className="btn btn_settings">
            <img src={settingsButton} alt="Settings Icon" />
          </button>
          <button className="btn btn_theather">
            <img src={theatherButton} alt="Theater Mode Icon" />
          </button>
          <button className="btn btn_fullscreen">
            <img src={fullscreenButton} alt="Full Screen Icon" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default PlayerControls;
