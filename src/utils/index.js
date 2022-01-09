const addCalendarEventToLocalStorage = (calendar_event) => {
  let calendar_events = getCalendarEventsFromLocalStorage();
  let new_calendar_event_id =
    (calendar_events[calendar_events.length - 1]?.id || 0) + 1;
  calendar_events = [
    ...calendar_events,
    { id: new_calendar_event_id, ...calendar_event },
  ];
  setCalendarEventsToLocalStorage(calendar_events);
  return calendar_events;
};

const getCalendarEventsFromLocalStorage = () => {
  let calendar_events = localStorage.getItem("calendarEvents");
  if (calendar_events) {
    return JSON.parse(calendar_events);
  } else {
    return [];
  }
};

const setCalendarEventsToLocalStorage = (calendar_events) => {
  localStorage.setItem("calendarEvents", JSON.stringify(calendar_events));
};

const updateCalendarEventsInLocalStorage = (calendar_event) => {
  let calendar_events = getCalendarEventsFromLocalStorage();
  let index_of_event = calendar_events.findIndex(
    (event) => event.id === calendar_event.id
  );
  calendar_events[index_of_event] = { ...calendar_event };
  setCalendarEventsToLocalStorage(calendar_events);
  return calendar_events;
};

const removeCalendarEventsFromLocalStorage = (calendar_event) => {
  let calendar_events = getCalendarEventsFromLocalStorage();
  let index_of_event = calendar_events.findIndex(
    (event) => event.id === calendar_event.id
  );
  calendar_events.splice(index_of_event, 1);
  setCalendarEventsToLocalStorage(calendar_events);
  return calendar_events;
};

const getUtcDateStingFromLocalDateString = (datetime_string) => {
  let js_date_object = new Date(datetime_string);
  let utc_year = js_date_object.getUTCFullYear();
  let utc_month = `${js_date_object.getUTCMonth() + 1}`.padStart(2, "0");
  let utc_date = `${js_date_object.getUTCDate()}`.padStart(2, "0");
  return [utc_year, utc_month, utc_date].join("-");
};

const getUtcTimeStingFromLocalTimeString = (time_string) => {
  let js_date_object = new Date(time_string);
  let utc_hours = `${js_date_object.getUTCHours()}`.padStart(2, "0");
  let utc_minutes = `${js_date_object.getUTCMinutes() + 1}`.padStart(2, "0");
  let utc_seconds = `${js_date_object.getUTCSeconds()}`.padStart(2, "0");
  return [utc_hours, utc_minutes, utc_seconds].join(":");
};

const getLocalDateStringFromUtcDateString = (datetime_string) => {
  let utc_date_object = new Date(`${datetime_string} UTC`);
  let year = utc_date_object.getFullYear();
  let month = `${utc_date_object.getMonth() + 1}`.padStart(2, "0");
  let date = `${utc_date_object.getDate()}`.padStart(2, "0");
  return [year, month, date].join("-");
};

const getLocalTimeStringFromUTtcTimeString = (datetime_string) => {
  let utc_date_object = new Date(`${datetime_string} UTC`);
  let hours = `${utc_date_object.getHours()}`.padStart(2, "0");
  let minutes = `${utc_date_object.getMinutes() + 1}`.padStart(2, "0");
  let seconds = `${utc_date_object.getSeconds()}`.padStart(2, "0");
  return [hours, minutes, seconds].join(":");
};

export {
  addCalendarEventToLocalStorage,
  getCalendarEventsFromLocalStorage,
  updateCalendarEventsInLocalStorage,
  setCalendarEventsToLocalStorage,
  getUtcTimeStingFromLocalTimeString,
  getUtcDateStingFromLocalDateString,
  getLocalDateStringFromUtcDateString,
  getLocalTimeStringFromUTtcTimeString,
  removeCalendarEventsFromLocalStorage,
};
