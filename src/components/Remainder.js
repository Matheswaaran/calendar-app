import React from "react";
import CalendarContext from "../context/CalendarContext";
import { getRemainingTimeInMicroSeconds } from "../utils";

const Remainder = (props) => {
  const { calendarEvents } = React.useContext(CalendarContext);

  const [timeOutIds, setTimeoutIds] = React.useState([]);

  React.useEffect(() => {
    timeOutIds.forEach((id) => clearTimeout(id));
    let new_timeOutIds = [];
    calendarEvents.forEach((event) => {
      let start_time_string = `${event.start_date} ${event.start_time}`;
      let remind_time = getRemainingTimeInMicroSeconds(
        start_time_string,
        event.remind_before
      );
      console.log(remind_time);
      if (remind_time > 0) {
        let timeOutId = setTimeout(() => {
          alert(`${event.title} is starting in ${event.remind_before} minutes`);
        }, remind_time);
        new_timeOutIds.push(timeOutId);
      }
    });
    setTimeoutIds(new_timeOutIds);
  }, [calendarEvents]);

  return null;
};

export default Remainder;
