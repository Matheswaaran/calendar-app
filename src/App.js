import React from "react";
import { Routes, Route } from "react-router-dom";
import CalendarContext from "./context/CalendarContext";
import Layout from "./Layout";

import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";

import "./App.css";

function App() {
  const [month, setMonth] = React.useState(new Date().getMonth());
  const [year, setYear] = React.useState(new Date().getFullYear());

  return (
    <CalendarContext.Provider
      value={{
        month,
        year,
        setMonth,
        setYear,
      }}
    >
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </CalendarContext.Provider>
  );
}

export default App;
