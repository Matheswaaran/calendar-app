import React from "react";
import "./index.css";
import Calendar from "../../components/calendar";
import CalendarContext from "../../context/CalendarContext";
import AddEvent from "./AddEvent";
import { getCalendarEventsFromLocalStorage } from "../../utils";

const Home = (props) => {
  const { month, year } = React.useContext(CalendarContext);
  const [isModalOpen, setModalOpen] = React.useState(false);
  const [selectedEvent, setSelectedEvent] = React.useState(null);
  const [calendarEvents, setCalendarEvents] = React.useState([]);

  React.useEffect(() => {
    setCalendarEvents(getCalendarEventsFromLocalStorage());
  }, []);

  const renderEventsInCalendar = (date) => {
    let events_in_date = [];
    calendarEvents.forEach((calendar_event, i) => {
      let start_date_utc_string = `${calendar_event.start_date} ${calendar_event.start_time} UTC`;
      let end_date_utc_string = `${calendar_event.end_date} ${calendar_event.end_time} UTC`;
      let calendar_event_start_date = new Date(start_date_utc_string);
      let calendar_event_end_date = new Date(end_date_utc_string);
      if (
        date.toLocaleDateString() <=
          calendar_event_end_date.toLocaleDateString() &&
        date.toLocaleDateString() >=
          calendar_event_start_date.toLocaleDateString()
      ) {
        events_in_date.push(calendar_event);
      }
    });
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {events_in_date.map((calendar_event, i) => (
          <div key={i}>{calendar_event.title}</div>
        ))}
      </div>
    );
  };

  return (
    <div className="home-container">
      <Calendar
        month={month}
        year={year}
        renderDateCell={renderEventsInCalendar}
      />
      <button className="add-event-fab-btn" onClick={() => setModalOpen(true)}>
        +
      </button>
      {isModalOpen && (
        <AddEvent
          open={isModalOpen}
          setOpen={setModalOpen}
          event={selectedEvent}
        />
      )}
    </div>
  );
};

export default Home;
