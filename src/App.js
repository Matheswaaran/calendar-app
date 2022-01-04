import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";

import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";

import "./App.css";

function App() {
  return (
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
  );
}

export default App;
