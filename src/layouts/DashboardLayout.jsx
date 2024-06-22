// src/layouts/DashboardLayout.jsx
import React, { useState } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import {
  FaThLarge,
  FaHospital,
  FaCalendar,
  FaInbox,
  FaPills,
  FaFileAlt,
  FaUserMd,
  FaBlog,
  FaCog,
  FaSignOutAlt,
  FaBars,
} from 'react-icons/fa';
import profilePic from '../assets/profile.jpg';

const DashboardLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const navLinkClasses = ({ isActive }) =>
    `flex items-center py-2 px-4 ${
      isActive ? 'bg-color-primary text-white' : 'hover:bg-gray-200'
    }`;

  return (
    <div className='flex flex-col h-screen bg-gray-100 md:flex-row'>
      <button
        className='md:hidden fixed top-4 left-4 z-20 bg-color-primary text-white p-2 rounded-md'
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        <FaBars />
      </button>

      <aside
        className={`w-64 bg-white shadow-md flex flex-col fixed inset-y-0 left-0 z-10 transform ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out md:relative md:translate-x-0`}
      >
        <div className='p-4'>
          <h1 className='text-xl font-bold'>BornPikin</h1>
        </div>
        <nav className='flex-1'>
          <NavLink
            to='/dashboard'
            className={navLinkClasses}
            onClick={() => setSidebarOpen(false)}
          >
            <FaThLarge className='mr-3' /> Dashboard
          </NavLink>
          <NavLink
            to='/hospitals'
            className={navLinkClasses}
            onClick={() => setSidebarOpen(false)}
          >
            <FaHospital className='mr-3' /> Hospitals
          </NavLink>
          <NavLink
            to='/appointments'
            className={navLinkClasses}
            onClick={() => setSidebarOpen(false)}
          >
            <FaCalendar className='mr-3' /> Appointments
          </NavLink>
          <NavLink
            to='/messages'
            className={navLinkClasses}
            onClick={() => setSidebarOpen(false)}
          >
            <FaInbox className='mr-3' /> Messages
          </NavLink>
          <NavLink
            to='/medication'
            className={navLinkClasses}
            onClick={() => setSidebarOpen(false)}
          >
            <FaPills className='mr-3' /> Medication
          </NavLink>
          <NavLink
            to='/records'
            className={navLinkClasses}
            onClick={() => setSidebarOpen(false)}
          >
            <FaFileAlt className='mr-3' /> Records
          </NavLink>
          <NavLink
            to='/consultants'
            className={navLinkClasses}
            onClick={() => setSidebarOpen(false)}
          >
            <FaUserMd className='mr-3' /> Consultants
          </NavLink>
          <NavLink
            to='/blog'
            className={navLinkClasses}
            onClick={() => setSidebarOpen(false)}
          >
            <FaBlog className='mr-3' /> Blog
          </NavLink>
          <NavLink
            to='/settings'
            className={navLinkClasses}
            onClick={() => setSidebarOpen(false)}
          >
            <FaCog className='mr-3' /> Settings
          </NavLink>
        </nav>
        <div className='p-4 border-t'>
          <ProfileComponent />
        </div>
      </aside>
      <main className='flex-1 p-4 md:p-8 overflow-y-auto mt-16 md:mt-0'>
        <Outlet />
      </main>
    </div>
  );
};

const ProfileComponent = () => (
  <div className='flex items-center'>
    <img
      src={profilePic}
      alt='Profile'
      className='w-10 h-10 rounded-full mr-3'
    />
    <div>
      <p className='font-semibold'>Henry</p>
      <p className='text-sm text-gray-600'>henry@example.com</p>
    </div>
  </div>
);

export default DashboardLayout;
