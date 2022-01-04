import React from "react";
import "./index.css";
import { getCalenderDates, renderDaysOfWeek } from "./utils";

const Calendar = (props) => {
  const dates = getCalenderDates(0, 2022);

  return (
    <div className="calendar-container">
      {dates.map((date, i) => (
        <div className="date-container" key={i}>
          <span className="day-of-week">
            {renderDaysOfWeek(date.day_of_week)}
          </span>
          <span>{date.date}</span>
        </div>
      ))}
    </div>
  );
};

export default Calendar;
