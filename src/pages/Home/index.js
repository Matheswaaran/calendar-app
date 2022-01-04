import React from "react";
import "./index.css";
import Calendar from "../../components/calendar";
import CalendarContext from "../../context/CalendarContext";

const Home = (props) => {
  const { month, year } = React.useContext(CalendarContext);

  return (
    <div className="home-container">
      <Calendar month={month} year={year} />
    </div>
  );
};

export default Home;
