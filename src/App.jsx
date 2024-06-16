import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layouts/LandingLayout";
import Banner from "./components/Banner";
import Header from "./components/Header";
import LandingPage from "./pages/Home";
import Features from "./pages/Functions";

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<LandingPage />} />
        <Route path="/functions" element={<Features />} />
      </Route>
    </Routes>
  </Router>
);

export default App;
