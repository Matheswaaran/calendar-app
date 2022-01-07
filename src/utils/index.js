const addCalendarEventToLocalStorage = (calendar_event) => {
  let calendar_events = getCalendarEventsFromLocalStorage();
  let new_calendar_event_id =
    (calendar_events[calendar_events.length - 1]?.id || 0) + 1;
  calendar_events = [
    ...calendar_events,
    { id: new_calendar_event_id, ...calendar_event },
  ];
  setCalendarEventsToLocalStorage(calendar_events);
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

const updateCalendarEventsInLocalStorage = (calendar_events) => {};

const getUtcDateStingFromLocalDateString = (datetime_string) => {
  let js_date_object = new Date(datetime_string);
  return `${js_date_object.getUTCFullYear()}-${
    js_date_object.getUTCMonth() + 1
  }-${js_date_object.getUTCDate()}`;
};

const getUtcTimeStingFromLocalTimeString = (datetime_string) => {
  let js_date_object = new Date(datetime_string);
  return `${js_date_object.getUTCHours()}:${js_date_object.getUTCMinutes()}:${js_date_object.getUTCSeconds()}`;
};

export {
  addCalendarEventToLocalStorage,
  getCalendarEventsFromLocalStorage,
  updateCalendarEventsInLocalStorage,
  setCalendarEventsToLocalStorage,
  getUtcTimeStingFromLocalTimeString,
  getUtcDateStingFromLocalDateString,
};
