import React from "react";
import "./index.css";
import SettingsIcon from "../assets/img/header/settings-icon.png";
import AppIcon from "../assets/img/header/app-icon.webp";
import LeftArrowIcon from "../assets/img/header/left-arrow.png";
import RightArrowIcon from "../assets/img/header/right-arrow.png";
import {
  getMonthText,
  getPreviousMonthAndYear,
  getNextMonthAndYear,
} from "../components/calendar/utils";
import CalendarContext from "../context/CalendarContext";

const Layout = (props) => {
  const { month, setMonth, year, setYear } = React.useContext(CalendarContext);

  const goToPreviousMonth = () => {
    const { month: previous_month, year: previous_year } =
      getPreviousMonthAndYear(month, year);
    setMonth(previous_month);
    setYear(previous_year);
  };

  const goToNextMonth = () => {
    const { month: next_month, year: next_year } = getNextMonthAndYear(
      month,
      year
    );
    setMonth(next_month);
    setYear(next_year);
  };

  return (
    <div className="layout-container">
      <div className="layout-topbar">
        <div className="app-name-container">
          <img src={AppIcon} alt="Calendar App" className="app-icon" />
          Calendar App
        </div>
        <div className="topbar-content">
          <img
            src={LeftArrowIcon}
            alt="Settings"
            className="left-arrow-icon"
            onClick={goToPreviousMonth}
          />
          {getMonthText(month)?.full} {year}
          <img
            src={RightArrowIcon}
            alt="Settings"
            className="right-arrow-icon"
            onClick={goToNextMonth}
          />
        </div>
        <div className="topbar-actions">
          <img src={SettingsIcon} alt="Settings" className="settings-icon" />
        </div>
      </div>
      <div className="layout-content">{props.children}</div>
    </div>
  );
};

export default Layout;
