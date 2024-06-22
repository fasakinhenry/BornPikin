import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingLayout from './layouts/LandingLayout';
import AuthLayout from './layouts/AuthLayout';
import DashboardLayout from './layouts/DashboardLayout';
import LandingPage from './pages/Home';
import Features from './pages/Functions';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import Dashboard from './components/Dashboard';
import Search from './components/Search';
import Messages from './components/Messages';
import PrenatalCare from './components/PrenatalCare';
import Payment from './components/Payment';
import Profile from './components/Profile';
import Records from './components/Records';
import Consultants from './components/Consultants';
import Blog from './components/Blog';
import Settings from './components/Settings';

const App = () => (
  <Router>
    <Routes>
      {/* Landing page Layout */}
      <Route path='/' element={<LandingLayout />}>
        <Route index element={<LandingPage />} />
        <Route path='/functions' element={<Features />} />
      </Route>

      {/* Signin and Signup page layout */}
      <Route element={<AuthLayout />}>
        <Route path='/login' element={<LoginPage />} />
        <Route path='/signup' element={<SignupPage />} />
      </Route>

      {/* Main application or dashboard layout */}
      <Route element={<DashboardLayout />}>
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/search' element={<Search />} />
        <Route path='/messages' element={<Messages />} />
        <Route path='/prenatal-care' element={<PrenatalCare />} />
        <Route path='/prenatal-care' element={<PrenatalCare />} />
        <Route path='/payment' element={<Payment />} />
        <Route path='/records' element={<Records />} />
        <Route path='/consultants' element={<Consultants />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/settings' element={<Settings />} />
      </Route>
    </Routes>
  </Router>
);

export default App;
