import React from "react";
import PropTypes from "prop-types";
import "./index.css";
import MainModal from "../../../components/Modals/MainModal";
import { Form, FormInput } from "../../../components/Form";
import {
  getUtcDateStingFromLocalDateString,
  getUtcTimeStingFromLocalTimeString,
  getLocalDateStringFromUtcDateString,
  getLocalTimeStringFromUTtcTimeString,
  getDateStringFromObject,
} from "../../../utils";
import CalendarContext from "../../../context/CalendarContext";

const AddEvent = (props) => {
  let eventFormRef = null;

  const { addCalendarEvents, updateCalendarEvents } =
    React.useContext(CalendarContext);

  const [formValues, setFormValues] = React.useState({
    title: "",
    description: "",
    location: "",
    start_date: "",
    start_time: "",
    end_date: "",
    end_time: "",
    remind_before: "",
  });

  React.useEffect(() => {
    if (props.event) {
      let start_date_utc_string = `${props.event.start_date} ${props.event.start_time}`;
      let end_date_utc_string = `${props.event.end_date} ${props.event.end_time}`;
      setFormValues({
        ...props.event,
        start_date: getLocalDateStringFromUtcDateString(start_date_utc_string),
        start_time: getLocalTimeStringFromUTtcTimeString(start_date_utc_string),
        end_date: getLocalDateStringFromUtcDateString(end_date_utc_string),
        end_time: getLocalTimeStringFromUTtcTimeString(end_date_utc_string),
      });
    } else if (props.selectedDate) {
      console.log(
        props.selectedDate,
        props.selectedDate.toLocaleDateString(),
        typeof props.selectedDate
      );
      setFormValues({
        title: "",
        description: "",
        location: "",
        start_date: getDateStringFromObject(props.selectedDate),
        start_time: "",
        end_date: "",
        end_time: "",
        remind_before: "",
      });
    } else {
      setFormValues({
        title: "",
        description: "",
        location: "",
        start_date: "",
        start_time: "",
        end_date: "",
        end_time: "",
        remind_before: "",
      });
    }
  }, [props.event]);

  const handleAddEventFormSubmit = (formValues) => {
    let start_date_string = `${formValues.start_date} ${formValues.start_time}`;
    let end_date_string = `${formValues.end_date} ${formValues.end_time}`;
    let calendar_event = {
      ...formValues,
      start_date: getUtcDateStingFromLocalDateString(start_date_string),
      start_time: getUtcTimeStingFromLocalTimeString(start_date_string),
      end_date: getUtcDateStingFromLocalDateString(end_date_string),
      end_time: getUtcTimeStingFromLocalTimeString(end_date_string),
    };
    if (props.event) {
      updateCalendarEvents(calendar_event);
    } else {
      addCalendarEvents(calendar_event);
    }
    props.onCloseModal();
  };

  const validateAddEventFormFields = (
    formValues,
    { setFieldError, setFieldValue }
  ) => {
    let errors = {};
    if (!formValues.title) {
      errors["title"] = "Required";
    }
    if (!formValues.start_date) {
      errors["start_date"] = "Required";
    }
    if (!formValues.start_time) {
      errors["start_time"] = "Required";
    }
    if (!formValues.end_date) {
      errors["end_date"] = "Required";
    }
    if (!formValues.end_time) {
      errors["end_time"] = "Required";
    }
    if (new Date(formValues.end_date) < new Date(formValues.start_date)) {
      errors["end_date"] = "End date should be greater than start date";
    }
    if (
      new Date(`${formValues.end_date} ${formValues.end_time}`) <
      new Date(`${formValues.start_date} ${formValues.start_time}`)
    ) {
      errors["end_time"] = "End time should be greater than start time";
    }
    return errors;
  };

  return (
    <MainModal
      title={props.event ? "Update Event" : "Add Event"}
      visible={props.open}
      onClose={() => props.onCloseModal()}
      renderFooter={() => (
        <div className="form-actions">
          <button
            className="form-actions-create-btn"
            onClick={() =>
              eventFormRef.dispatchEvent(
                new Event("submit", { cancelable: true, bubbles: true })
              )
            }
          >
            {props.event ? "Save Event" : "Add Event"}
          </button>
          <button
            className="form-actions-cancel-btn"
            onClick={() => props.onCloseModal()}
          >
            Cancel
          </button>
        </div>
      )}
    >
      <div>
        <Form
          name="form"
          formRef={(ref) => (eventFormRef = ref)}
          onSubmit={handleAddEventFormSubmit}
          initialValues={formValues}
          onValidateFields={validateAddEventFormFields}
        >
          {() => (
            <React.Fragment>
              <FormInput field="title" label="Title" />
              <FormInput
                field="description"
                label="Description"
                textArea={true}
              />
              <FormInput field="location" label="Location" />
              <div className="form-multiple-input-container">
                <div className="form-multiple-input">
                  <FormInput
                    field="start_date"
                    label="Start Date"
                    type="date"
                  />
                </div>
                <div className="form-multiple-input">
                  <FormInput
                    field="start_time"
                    label="Start time"
                    type="time"
                  />
                </div>
              </div>
              <div className="form-multiple-input-container">
                <div className="form-multiple-input">
                  <FormInput field="end_date" label="End Date" type="date" />
                </div>
                <div className="form-multiple-input">
                  <FormInput field="end_time" label="End time" type="time" />
                </div>
              </div>
              <div className="form-multiple-input-container">
                <div className="form-multiple-input">
                  <FormInput
                    field="remind_before"
                    label="Remind Before"
                    type="number"
                  />
                </div>
              </div>
            </React.Fragment>
          )}
        </Form>
      </div>
    </MainModal>
  );
};

AddEvent.defaultProps = {
  open: false,
  setOpen: () => {},
  event: null,
};

AddEvent.propTypes = {
  open: PropTypes.bool,
  setOpen: PropTypes.func,
  event: PropTypes.object,
};

export default AddEvent;
