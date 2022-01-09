import React from "react";
import { Routes, Route } from "react-router-dom";
import { CalendarProvider } from "./context/CalendarContext";
import Layout from "./Layout";

import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";

import "./App.css";

function App() {
  return (
    <CalendarProvider>
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
    </CalendarProvider>
  );
}

export default App;
