import React from "react";
import "./index.css";
import ExportIcon from "../assets/img/header/export.svg";
import LeftArrowIcon from "../assets/img/header/left-arrow.svg";
import RightArrowIcon from "../assets/img/header/right-arrow.svg";
import {
  getMonthText,
  getPreviousMonthAndYear,
  getNextMonthAndYear,
} from "../components/calendar/utils";
import CalendarContext from "../context/CalendarContext";
import { exportCsvFile } from "../utils/csv";

const Layout = (props) => {
  const { month, setMonth, year, setYear, resetToToday } =
    React.useContext(CalendarContext);

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
          <button className="calendar-today-btn" onClick={() => resetToToday()}>
            Today
          </button>
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
          <button className="calendar-add-event-btn">Add Event</button>
          <button
            className="calendar-export-btn"
            onClick={() => exportCsvFile()}
          >
            <img
              src={ExportIcon}
              alt="Settings"
              className="left-arrow-icon"
              onClick={goToPreviousMonth}
            />
            Export
          </button>
        </div>
      </div>
      <div className="layout-content">{props.children}</div>
    </div>
  );
};

export default Layout;
