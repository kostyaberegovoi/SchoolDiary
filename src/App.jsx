import React from "react";
import SubjectsPage from "./pages/SubjectsPage"
import HomePage from "./pages/HomePage";
import { Routes, Route } from "react-router-dom";

const App = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="students/:id" element={<SubjectsPage />} />
  </Routes>
);

export default App;
