import React from 'react';
import './Header.css';
import ytlogo from '../../assets/svgs/ytlogo.svg'
import searchIcon from '../../assets/svgs/search.svg'
import cameraIcon from '../../assets/svgs/camera.svg'
import dotsIcon from '../../assets/svgs/dots.svg'
import bellIcon from '../../assets/svgs/bell.svg'
import headerUserPic from '../../assets/imgs/userpic.png'

function Header() {
  return (
    <header className="header">
      <div className="wrapper">
        {/* Left Section */}
        <div className="header__left">
          {/* Hamburger Menu */}
          <div className="header__hamburger">
            <div className="header__hamburger-line"></div>
            <div className="header__hamburger-line"></div>
            <div className="header__hamburger-line"></div>
          </div>
          {/* Logo */}
          <img
            src={ytlogo}
            alt="YouTube logo icon"
            className="header__logo"
          />
          {/* Search Input */}
          <div className="header__search-input">
            <input
              type="text"
              className="header__search-input__field"
              placeholder="Search"
            />
            <img
              src={searchIcon}
              alt="Search icon"
              className="header__search-icon"
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="header__right">
          {/* Controls */}
          <div className="header__controls">
            {/* Camera */}
            <div className="header__control header__camera">
              <img
                src={cameraIcon}
                className="header__camera-icon"
                alt="Camera icon"
              />
            </div>
            {/* Sections */}
            <div className="header__control header__sections">
              <img
                src={dotsIcon}
                className="header__sections-icon"
                alt="Sections icon"
              />
            </div>
            {/* Notifications */}
            <div className="header__control header__notifications">
              <img
                src={bellIcon}
                className="header__notifications-icon"
                alt="Notifications icon"
              />
              <span className="header__notifications-count">3</span>
            </div>
          </div>
          {/* Profile */}
          <div className="header__profile">
            <img
              src={headerUserPic}
              className="header__profile-icon"
              alt="Profile icon"
            />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
