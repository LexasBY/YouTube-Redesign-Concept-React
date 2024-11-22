import React from 'react';
import './SidebarHeader.css';

function SidebarHeader() {
  return (
    <div className="sidebar-header">
      <h3 className="sidebar-header__title">Next</h3>
      <div className="sidebar-header__autoplay">
        <span>AUTOPLAY</span>
        <label className="switch">
          <input type="checkbox" defaultChecked />
          <span className="slider"></span>
        </label>
      </div>
    </div>
  );
}

export default SidebarHeader;
