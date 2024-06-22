import React, { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import {
  FaHome,
  FaSearch,
  FaEnvelope,
  FaUser,
  FaBaby,
  FaMoneyBill,
  FaToolbox,
  FaSignOutAlt,
} from 'react-icons/fa';

const DashboardLayout = () => {
  const [showLogoutDialog, setShowLogoutDialog] = useState(false);

  const navItems = [
    { icon: FaHome, text: 'Dashboard', to: '/dashboard' },
    { icon: FaSearch, text: 'Search', to: '/search' },
    { icon: FaEnvelope, text: 'Messages', to: '/messages' },
    { icon: FaBaby, text: 'Prenatal Care', to: '/prenatal-care' },
    { icon: FaMoneyBill, text: 'Payment', to: '/payment' },
    { icon: FaUser, text: 'Profile', to: '/profile' },
    { icon: FaToolbox, text: 'Settings', to: '/settings' },
  ];

  const handleLogout = () => {
    setShowLogoutDialog(true);
  };

  return (
    <div className='flex h-screen bg-gray-100'>
      {/* Sidebar for desktop */}
      <aside className='hidden md:flex flex-col w-64 bg-white shadow-md'>
        <div className='p-4'>
          <h1 className='text-xl font-bold'>BornPikin</h1>
        </div>
        <nav className='flex-1'>
          {navItems.map((item, index) => (
            <NavLink
              key={index}
              to={item.to}
              className={({ isActive }) =>
                `flex items-center py-2 px-4 ${
                  isActive ? 'bg-color-primary text-white' : 'hover:bg-gray-200'
                }`
              }
            >
              <item.icon className='mr-3' />
              {item.text}
            </NavLink>
          ))}
        </nav>
        <button
          onClick={handleLogout}
          className='flex items-center py-2 px-4 hover:bg-gray-200'
        >
          <FaSignOutAlt className='mr-3' />
          Logout
        </button>
      </aside>

      {/* Main content */}
      <main className='flex-1 p-4 md:p-8 overflow-y-auto'>
        <Outlet />
      </main>

      {/* Bottom navigation for mobile */}
      <nav className='md:hidden fixed bottom-0 left-0 right-0 bg-white shadow-md'>
        <ul className='flex justify-around'>
          {navItems.map((item, index) => (
            <li key={index}>
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  `flex flex-col items-center py-2 ${
                    isActive ? 'text-color-primary' : 'text-gray-600'
                  }`
                }
              >
                <item.icon className='text-xl mb-1' />
                <span className='text-xs'>{item.text}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {/* Logout confirmation dialog */}
      {showLogoutDialog && (
        <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center'>
          <div className='bg-white p-4 rounded-lg'>
            <p className='mb-4'>Are you sure you want to logout?</p>
            <div className='flex justify-end'>
              <button
                onClick={() => setShowLogoutDialog(false)}
                className='mr-2 px-4 py-2 bg-gray-200 rounded'
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  // Perform logout action here
                  setShowLogoutDialog(false);
                }}
                className='px-4 py-2 bg-color-primary text-white rounded'
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DashboardLayout;
