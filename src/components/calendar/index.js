import React from "react";
import PropTypes from "prop-types";
import "./index.css";
import { getCalenderDates, getDayOfWeekText } from "./utils";

const Calendar = (props) => {
  const [dates, setDates] = React.useState([]);

  React.useEffect(() => {
    setDates(getCalenderDates(props.month, props.year));
  }, [props]);

  return (
    <div className="calendar-container">
      {dates.map((date, i) => (
        <div className="date-container" key={i}>
          <span className="day-of-week">
            {getDayOfWeekText(date.day_of_week).small}
          </span>
          <span>{date.date}</span>
        </div>
      ))}
    </div>
  );
};

Calendar.defaultProps = {
  month: new Date().getMonth(),
  year: new Date().getFullYear(),
};

Calendar.propTypes = {
  month: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
};

export default Calendar;
