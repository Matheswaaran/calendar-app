import { getCalendarEventsFromLocalStorage } from "./index";

const exportCsvFile = () => {
  let calendar_events = getCalendarEventsFromLocalStorage();
  let csv_data = [
    [
      "Event",
      "Start Date",
      "Start Time",
      "End Date",
      "End Time",
      "Description",
      "Location",
    ],
  ];
  calendar_events.forEach((event) => {
    let row = [
      event.title,
      event.start_date,
      event.start_time,
      event.end_date,
      event.end_time,
      event.description,
      event.location,
    ];
    csv_data.push(row);
  });

  let csv_file_base64_data =
    "data:text/csv;charset=utf-8," +
    csv_data.map((row) => row.join(",")).join("\n");

  downloadCsvFile(csv_file_base64_data);
};

const downloadCsvFile = (base64_data) => {
  let encodedUri = encodeURI(base64_data);
  let link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", "my_data.csv");
  document.body.appendChild(link);
  link.click();
};

export { exportCsvFile };
