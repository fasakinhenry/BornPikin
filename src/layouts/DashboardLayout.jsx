// src/layouts/DashboardLayout.jsx
import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import {
  FaThLarge,
  FaHospital,
  FaCalendar,
  FaPills,
  FaFileAlt,
  FaUserMd,
  FaBlog,
  FaCog,
  FaSignOutAlt,
} from 'react-icons/fa';

const DashboardLayout = () => {
  const navLinkClasses = ({ isActive }) =>
    `flex items-center py-2 px-4 ${
      isActive ? 'bg-green-500 text-white' : 'hover:bg-gray-200'
    }`;

  return (
    <div className='flex h-screen bg-gray-100'>
      <aside className='w-64 bg-white shadow-md flex flex-col'>
        <div className='p-4'>
          <h1 className='text-xl font-bold'>MediSync</h1>
        </div>
        <nav className='flex-1'>
          <NavLink to='/dashboard' className={navLinkClasses}>
            <FaThLarge className='mr-3' /> Dashboard
          </NavLink>
          <NavLink to='/hospitals' className={navLinkClasses}>
            <FaHospital className='mr-3' /> Hospitals
          </NavLink>
          <NavLink to='/appointments' className={navLinkClasses}>
            <FaCalendar className='mr-3' /> Appointments
          </NavLink>
          <NavLink to='/medication' className={navLinkClasses}>
            <FaPills className='mr-3' /> Medication
          </NavLink>
          <NavLink to='/records' className={navLinkClasses}>
            <FaFileAlt className='mr-3' /> Records
          </NavLink>
          <NavLink to='/consultants' className={navLinkClasses}>
            <FaUserMd className='mr-3' /> Consultants
          </NavLink>
          <NavLink to='/blog' className={navLinkClasses}>
            <FaBlog className='mr-3' /> Blog
          </NavLink>
          <NavLink to='/settings' className={navLinkClasses}>
            <FaCog className='mr-3' /> Settings
          </NavLink>
        </nav>
        <div className='p-4 border-t'>
          <ProfileComponent />
        </div>
      </aside>
      <main className='flex-1 p-8 overflow-y-auto'>
        <Outlet />
      </main>
    </div>
  );
};

const ProfileComponent = () => (
  <div className='flex items-center'>
    <img
      src='/path-to-profile-image.jpg'
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
