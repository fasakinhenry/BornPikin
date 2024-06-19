import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingLayout from "./layouts/LandingLayout";
import AuthLayout from "./layouts/AuthLayout";
import DashboardLayout from "./layouts/DashboardLayout";
import LandingPage from "./pages/Home";
import Features from "./pages/Functions";
import LoginPage from "./pages/LoginPage";
import Dashboard from "./pages/Dashboard";

const App = () => (
  <Router>
    <Routes>
      {/* Landing page Layout */}
      <Route path="/" element={<LandingLayout />}>
        <Route index element={<LandingPage />} />
        <Route path="/functions" element={<Features />} />
      </Route>
      {/* Signin and Signup page layout */}
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<LoginPage />} />
      </Route>
      {/* Main application or dashboard layout */}
      <Route element={<DashboardLayout />}>
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>
    </Routes>
  </Router>
);

export default App;
