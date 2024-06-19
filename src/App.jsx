import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingLayout from "./layouts/LandingLayout";
import LandingPage from "./pages/Home";
import Features from "./pages/Functions";

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<LandingLayout />}>
        <Route index element={<LandingPage />} />
        <Route path="/functions" element={<Features />} />
      </Route>
    </Routes>
  </Router>
);

export default App;
