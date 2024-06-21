// src/layouts/DashboardLayout.jsx
import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const DashboardLayout = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      <aside className="w-64 bg-white shadow-md">
        <div className="p-4">
          <h1 className="text-xl font-bold">MediSync</h1>
        </div>
        <nav className="mt-4">
          <Link to="/dashboard" className="block py-2 px-4 hover:bg-gray-200">Dashboard</Link>
          <Link to="/hospitals" className="block py-2 px-4 hover:bg-gray-200">Hospitals</Link>
          <Link to="/appointments" className="block py-2 px-4 hover:bg-gray-200">Appointments</Link>
          <Link to="/medication" className="block py-2 px-4 hover:bg-gray-200">Medication</Link>
          <Link to="/records" className="block py-2 px-4 hover:bg-gray-200">Records</Link>
          <Link to="/consultants" className="block py-2 px-4 hover:bg-gray-200">Consultants</Link>
          <Link to="/blog" className="block py-2 px-4 hover:bg-gray-200">Blog</Link>
          <Link to="/settings" className="block py-2 px-4 hover:bg-gray-200">Settings</Link>
        </nav>
      </aside>
      <main className="flex-1 p-8 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
