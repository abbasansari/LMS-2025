import React from "react";

import { Login } from "./pages/Login";
import Navbar from "../src/components/ui/Navbar";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Login />
      <Routes>
        <Route path="/" element={<div>Home Page</div>} />
        <Route path="/about" element={<div>About Page</div>} />
        <Route path="/courses" element={<div>Courses Page</div>} />
      </Routes>
    </>
  );
}

export default App;
