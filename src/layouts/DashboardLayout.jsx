import React from 'react';
import Sidebar from '../components/Sidebar';

const DashboardLayout = ({ children }) => {
  return (
    <div className='flex'>
      <Sidebar />
      <main className='flex-1 p-8'>{children}</main>
    </div>
  );
};

export default DashboardLayout;
