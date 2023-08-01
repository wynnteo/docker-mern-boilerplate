import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignIn from "./components/pages/SignIn";
import SignUp from "./components/pages/SignUp";
import Dashboard from "./components/pages/Dashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/signin/" element={<SignIn />} />
        <Route exact path="/signup/" element={<SignUp />} />
        <Route exact path="/" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
