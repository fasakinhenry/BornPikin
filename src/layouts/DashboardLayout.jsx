// src/layouts/DashboardLayout.jsx
import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';

const DashboardLayout = () => {
  const navLinkClasses = ({ isActive }) =>
    `block py-2 px-4 ${
      isActive ? 'bg-green-500 text-white' : 'hover:bg-gray-200'
    }`;

  return (
    <div className='flex h-screen bg-gray-100'>
      <aside className='w-64 bg-white shadow-md'>
        <div className='p-4'>
          <h1 className='text-xl font-bold'>MediSync</h1>
        </div>
        <nav className='mt-4'>
          <NavLink to='/dashboard' className={navLinkClasses}>
            Dashboard
          </NavLink>
          <NavLink to='/hospitals' className={navLinkClasses}>
            Hospitals
          </NavLink>
          <NavLink to='/appointments' className={navLinkClasses}>
            Appointments
          </NavLink>
          <NavLink to='/medication' className={navLinkClasses}>
            Medication
          </NavLink>
          <NavLink to='/records' className={navLinkClasses}>
            Records
          </NavLink>
          <NavLink to='/consultants' className={navLinkClasses}>
            Consultants
          </NavLink>
          <NavLink to='/blog' className={navLinkClasses}>
            Blog
          </NavLink>
          <NavLink to='/settings' className={navLinkClasses}>
            Settings
          </NavLink>
        </nav>
      </aside>
      <main className='flex-1 p-8 overflow-y-auto'>
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
