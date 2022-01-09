import React from "react";
import "./index.css";
import PropTypes from "prop-types";
import MainModal from "../../../components/Modals/MainModal";
import {
  getLocalDateStringFromUtcDateString,
  getLocalTimeStringFromUTtcTimeString,
} from "../../../utils";
import DeleteModal from "../DeleteEvent";
import CalendarContext from "../../../context/CalendarContext";

const ViewEvent = (props) => {
  const { deleteCalendarEvents } = React.useContext(CalendarContext);

  const [isDeleteModalOpen, setDeleteModalOpen] = React.useState(false);

  const deleteCalendarEvent = () => {
    deleteCalendarEvents(props.event);
    setDeleteModalOpen(false);
    props.onCloseModal();
  };

  let start_date_utc_string = `${props.event.start_date} ${props.event.start_time}`;
  let end_date_utc_string = `${props.event.end_date} ${props.event.end_time}`;

  return (
    <React.Fragment>
      <MainModal
        title="View Event"
        visible={props.open}
        onClose={() => props.onCloseModal()}
        renderFooter={() => (
          <div className="form-actions">
            <button
              className="form-actions-create-btn"
              onClick={() => props.onEditEvent(false)}
            >
              Edit
            </button>
            <button
              className="form-actions-delete-btn"
              onClick={() => setDeleteModalOpen(true)}
            >
              Delete
            </button>
          </div>
        )}
      >
        <div className="view-field-group">
          <div className="label">Title</div>
          <div className="value">{props.event.title}</div>
        </div>
        {props.event.description && (
          <div className="view-field-group">
            <div className="label">Description</div>
            <div className="value">{props.event.description}</div>
          </div>
        )}
        {props.event.location && (
          <div className="view-field-group">
            <div className="label">Location</div>
            <div className="value">{props.event.location}</div>
          </div>
        )}
        <div className="multiple-value-container">
          <div className="view-field-group">
            <div className="label">Start date</div>
            <div className="value">
              {getLocalDateStringFromUtcDateString(start_date_utc_string)}
            </div>
          </div>
          <div className="view-field-group">
            <div className="label">Start time</div>
            <div className="value">
              {getLocalTimeStringFromUTtcTimeString(start_date_utc_string)}
            </div>
          </div>
        </div>
        <div className="multiple-value-container">
          <div className="view-field-group">
            <div className="label">End date</div>
            <div className="value">
              {getLocalDateStringFromUtcDateString(end_date_utc_string)}
            </div>
          </div>
          <div className="view-field-group">
            <div className="label">End time</div>
            <div className="value">
              {getLocalTimeStringFromUTtcTimeString(end_date_utc_string)}
            </div>
          </div>
        </div>
        {props.event.remind_before && (
          <div className="view-field-group">
            <div className="label">Remind Before</div>
            <div className="value">{props.event.remind_before} mins</div>
          </div>
        )}
      </MainModal>
      {isDeleteModalOpen && (
        <DeleteModal
          open={isDeleteModalOpen}
          setOpen={setDeleteModalOpen}
          deleteCalendarEvent={deleteCalendarEvent}
        />
      )}
    </React.Fragment>
  );
};

ViewEvent.defaultProps = {
  open: false,
  setOpen: () => {},
  event: null,
};

ViewEvent.propTypes = {
  open: PropTypes.bool,
  setOpen: PropTypes.func,
  event: PropTypes.object,
};

export default ViewEvent;
