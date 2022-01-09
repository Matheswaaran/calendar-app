import React from "react";
import {
  addCalendarEventToLocalStorage,
  getCalendarEventsFromLocalStorage,
  removeCalendarEventsFromLocalStorage,
  updateCalendarEventsInLocalStorage,
} from "../utils";

const CalendarContext = React.createContext();

const CalendarProvider = (props) => {
  const [month, setMonth] = React.useState(new Date().getMonth());
  const [year, setYear] = React.useState(new Date().getFullYear());
  const [calendarEvents, setCalendarEvents] = React.useState([]);

  React.useEffect(() => {
    setCalendarEvents(getCalendarEventsFromLocalStorage());
  }, []);

  const addCalendarEvents = (calendar_event) => {
    let calendar_events = addCalendarEventToLocalStorage(calendar_event);
    setCalendarEvents(calendar_events);
  };

  const updateCalendarEvents = (calendar_event) => {
    let calendar_events = updateCalendarEventsInLocalStorage(calendar_event);
    setCalendarEvents(calendar_events);
  };

  const deleteCalendarEvents = (calendar_event) => {
    let calendar_events = removeCalendarEventsFromLocalStorage(calendar_event);
    setCalendarEvents(calendar_events);
  };

  const resetToToday = () => {
    setMonth(new Date().getMonth());
    setYear(new Date().getFullYear());
  };

  return (
    <CalendarContext.Provider
      value={{
        month,
        year,
        setMonth,
        setYear,
        calendarEvents,
        addCalendarEvents,
        updateCalendarEvents,
        deleteCalendarEvents,
        resetToToday,
      }}
    >
      {props.children}
    </CalendarContext.Provider>
  );
};

export { CalendarProvider };

export default CalendarContext;
