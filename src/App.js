import React from "react";
import { Routes, Route } from "react-router-dom";
import CalendarContext from "./context/CalendarContext";
import Layout from "./Layout";

import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";

import {
  addCalendarEventToLocalStorage,
  getCalendarEventsFromLocalStorage,
  removeCalendarEventsFromLocalStorage,
  updateCalendarEventsInLocalStorage,
} from "./utils";

import "./App.css";

function App() {
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
      }}
    >
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </CalendarContext.Provider>
  );
}

export default App;
