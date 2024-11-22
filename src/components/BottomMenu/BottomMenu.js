import React from "react";
import "./BottomMenu.css"; // стили для нижнего меню
import homeIcon from "../../assets/svgs/home.svg";
import trendingIcon from "../../assets/svgs/trending.svg";
import subscriptionIcon from "../../assets/svgs/subscription.svg";
import libraryIcon from "../../assets/svgs/library.svg";

function BottomMenu() {
  return (
    <div className="bottom-menu">
    <nav className="bottom-menu__nav">
      <button
        className="bottom-menu__nav-link bottom-menu__nav-link--active"
        onClick={() => console.log("Navigate to Home")}
      >
        <img src={homeIcon} alt="Home" className="bottom-menu__nav-icon" />
        <span className="bottom-menu__nav-text">Home</span>
      </button>
      <button
        className="bottom-menu__nav-link"
        onClick={() => console.log("Navigate to Trending")}
      >
        <img src={trendingIcon} alt="Trending" className="bottom-menu__nav-icon" />
        <span className="bottom-menu__nav-text">Trending</span>
      </button>
      <button
        className="bottom-menu__nav-link"
        onClick={() => console.log("Navigate to Subscriptions")}
      >
        <img
          src={subscriptionIcon}
          alt="Subscriptions"
          className="bottom-menu__nav-icon"
        />
        <span className="bottom-menu__nav-text">Subscriptions</span>
      </button>
      <button
        className="bottom-menu__nav-link"
        onClick={() => console.log("Navigate to Library")}
      >
        <img src={libraryIcon} alt="Library" className="bottom-menu__nav-icon" />
        <span className="bottom-menu__nav-text">Library</span>
      </button>
    </nav>
  </div>
  
  );
}

export default BottomMenu;
