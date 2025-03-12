import React from "react";
import StudentPage from "./pages/StudentPage"
import HomePage from "./pages/HomePage";
import { Routes, Route } from "react-router-dom";

const App = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="students/:id" element={<StudentPage />} />
  </Routes>
);

export default App;
