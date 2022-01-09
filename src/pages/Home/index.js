import React from "react";
import "./index.css";
import Calendar from "../../components/calendar";
import CalendarContext from "../../context/CalendarContext";
import AddEvent from "./AddEvent";
import ViewEvent from "./ViewEvent";
import Remainder from "../../components/Remainder";
import { getRandomColor } from "../../utils/colors";

const Home = (props) => {
  const { month, year, calendarEvents } = React.useContext(CalendarContext);
  const [isModalOpen, setModalOpen] = React.useState(false);
  const [isViewModalOpen, setViewModalOpen] = React.useState(false);
  const [selectedEvent, setSelectedEvent] = React.useState(null);

  const openViewCalendarEventModal = (calendar_event) => {
    setSelectedEvent(calendar_event);
    setViewModalOpen(true);
  };

  const onEditEvent = () => {
    setViewModalOpen(false);
    setModalOpen(true);
  };

  const onCloseModal = () => {
    setViewModalOpen(false);
    setModalOpen(false);
    setSelectedEvent(null);
  };

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
      <div className="calendar-event-container">
        {events_in_date.map((calendar_event, i) => (
          <div
            key={i}
            onClick={() => openViewCalendarEventModal(calendar_event)}
            className={`calendar-event ${getRandomColor()}`}
          >
            {calendar_event.title}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="home-container">
      <Remainder />
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
          onCloseModal={onCloseModal}
          event={selectedEvent}
        />
      )}
      {isViewModalOpen && (
        <ViewEvent
          open={isViewModalOpen}
          setOpen={setViewModalOpen}
          event={selectedEvent}
          onCloseModal={onCloseModal}
          onEditEvent={() => onEditEvent()}
        />
      )}
    </div>
  );
};

export default Home;
