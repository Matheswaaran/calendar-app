import React from "react";
import PropTypes from "prop-types";
import CloseIcon from "../../../assets/img/close.svg";

const EventsList = (props) => {
  return (
    <div className="events-list-container">
      <div className="header-container">
        <span>{props.date}</span>
        <img
          src={CloseIcon}
          alt="close modal"
          onClick={() => props.setOpen(false)}
        />
      </div>
      {props.eventsInDate.map((calendar_event, i) => (
        <div
          onClick={() => props.openEvent(calendar_event)}
          className={`calendar-event ${calendar_event.color}`}
          title={calendar_event.title}
        >
          {calendar_event.title}
        </div>
      ))}
    </div>
  );
};

EventsList.defaultProps = {
  openEvent: () => {},
  eventsInDate: [],
  open: false,
  setOpen: () => {},
  date: 0,
};

EventsList.propTypes = {
  openEvent: PropTypes.func.isRequired,
  eventsInDate: PropTypes.array.isRequired,
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
  date: PropTypes.number.isRequired,
};

export default EventsList;
