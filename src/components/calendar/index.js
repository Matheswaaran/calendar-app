import React from "react";
import PropTypes from "prop-types";
import "./index.css";
import { getCalenderDates, getDayOfWeekText } from "./utils";

const Calendar = (props) => {
  const [dates, setDates] = React.useState([]);

  React.useEffect(() => {
    setDates(getCalenderDates(props.month, props.year));
  }, [props]);

  const isDateToday = (date) => {
    const today = new Date();
    return (
      date.date === today.getDate() &&
      date.month === today.getMonth() &&
      date.year === today.getFullYear()
    );
  };

  return (
    <div className="calendar-container">
      {dates.map((date, i) => (
        <div
          className={`date-container ${date.disabled ? "date-disabled" : ""}`}
          key={i}
        >
          <span className="day-of-week">
            {getDayOfWeekText(date.day_of_week).small}
          </span>
          <div className={`date ${isDateToday(date) ? "today" : ""}`}>
            {props.addEventOnDate && (
              <button
                className="add-event-btn"
                onClick={() =>
                  props.addEventOnDate(
                    new Date(date.year, date.month, date.date)
                  )
                }
              >
                +
              </button>
            )}
            <span>{date.date}</span>
          </div>
          <div className="date-render-container">
            {props.renderDateCell
              ? props.renderDateCell(new Date(date.year, date.month, date.date))
              : null}
          </div>
        </div>
      ))}
    </div>
  );
};

Calendar.defaultProps = {
  month: new Date().getMonth(),
  year: new Date().getFullYear(),
  renderDateCell: undefined,
  addEventOnDate: undefined,
};

Calendar.propTypes = {
  month: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  renderDateCell: PropTypes.func,
  addEventOnDate: PropTypes.func,
};

export default Calendar;
