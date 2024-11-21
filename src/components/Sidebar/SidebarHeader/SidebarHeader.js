import React from 'react';
import './SidebarHeader.css';

function SidebarHeader() {
  return (
    <div className="sidebar-header">
      <h2 className="sidebar-header__title">Next</h2>
      <div className="sidebar-header__autoplay">
        <span>Autoplay</span>
        <label className="switch">
          <input type="checkbox" defaultChecked />
          <span className="slider"></span>
        </label>
      </div>
    </div>
  );
}

export default SidebarHeader;
