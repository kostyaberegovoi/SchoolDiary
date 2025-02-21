import React from "react";
import StudentPage from "./pages/StudentPage"
import HomePage from "./pages/HomePage";
import { Routes, Route } from "react-router-dom";

function App() {

  return (
    <Routes>
      <Route path="/" element={<HomePage></HomePage>}></Route>
      <Route path="students/:id" element={<StudentPage></StudentPage>}></Route>
    </Routes>
  )
}

export default App;
