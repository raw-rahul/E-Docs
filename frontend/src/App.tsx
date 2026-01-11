import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ProcessExam from "./pages/ProcessExam";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/process/:examName" element={<ProcessExam />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
