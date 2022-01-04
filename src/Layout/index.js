import React from "react";
import "./index.css";
import SettingsIcon from "../assets/img/header/settings-icon.png";
import AppIcon from "../assets/img/header/app-icon.webp";

const Layout = (props) => {
  return (
    <div className="layout-container">
      <div className="layout-topbar">
        <div className="app-name-container">
          <img src={AppIcon} alt="Calendar App" className="app-icon" />
          Calendar App
        </div>
        <img src={SettingsIcon} alt="Settings" className="settings-icon" />
      </div>
      <div className="layout-content">{props.children}</div>
    </div>
  );
};

export default Layout;
