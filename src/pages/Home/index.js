import React from "react";
import "./index.css";
import Calendar from "../../components/calendar";
import CalendarContext from "../../context/CalendarContext";
import AddEvent from "./AddEvent";

const Home = (props) => {
  const { month, year } = React.useContext(CalendarContext);
  const [isModalOpen, setModalOpen] = React.useState(false);
  const [selectedEvent, setSelectedEvent] = React.useState(null);

  return (
    <div className="home-container">
      <Calendar month={month} year={year} />
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
