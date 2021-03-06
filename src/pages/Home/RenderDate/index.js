import React from "react";
import PropTypes from "prop-types";
import EventsList from "./EventsList";
import "./index.css";

const RenderDate = (props) => {
  const [openEventsList, setOpenEventsList] = React.useState(false);

  return (
    <div className="calendar-event-container">
      {props.eventsInDate.map((calendar_event, i) => (
        <React.Fragment key={i}>
          {i < 2 && (
            <div
              onClick={() => props.openEvent(calendar_event)}
              className={`calendar-event ${calendar_event.color}`}
              title={calendar_event.title}
            >
              {calendar_event.title}
            </div>
          )}
        </React.Fragment>
      ))}
      {props.eventsInDate.length > 2 && (
        <span
          className="more-events-button"
          onClick={() => setOpenEventsList(true)}
        >
          more
        </span>
      )}
      {openEventsList && (
        <EventsList
          eventsInDate={props.eventsInDate}
          open={openEventsList}
          setOpen={setOpenEventsList}
          openEvent={props.openEvent}
          date={props.date}
        />
      )}
    </div>
  );
};

RenderDate.defaultProps = {
  openEvent: () => {},
  eventsInDate: [],
  date: 0,
};

RenderDate.propTypes = {
  openEvent: PropTypes.func.isRequired,
  eventsInDate: PropTypes.array.isRequired,
  date: PropTypes.number.isRequired,
};

export default RenderDate;
