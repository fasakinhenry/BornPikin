import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside className='w-64 bg-white h-screen p-4'>
      <div className='flex items-center mb-8'>
        <img src='/logo.svg' alt='MediSync' className='w-8 h-8 mr-2' />
        <h1 className='text-xl font-bold'>MediSync</h1>
      </div>
      <nav>
        <ul>
          <li>
            <Link to='/dashboard' className='block py-2'>
              Dashboard
            </Link>
          </li>
          <li>
            <Link to='/hospitals' className='block py-2'>
              Hospitals
            </Link>
          </li>
          <li>
            <Link to='/appointments' className='block py-2'>
              Appointments
            </Link>
          </li>
          <li>
            <Link to='/medication' className='block py-2'>
              Medication
            </Link>
          </li>
          <li>
            <Link to='/records' className='block py-2'>
              Records
            </Link>
          </li>
          <li>
            <Link to='/consultants' className='block py-2'>
              Consultants
            </Link>
          </li>
          <li>
            <Link to='/blog' className='block py-2'>
              Blog
            </Link>
          </li>
          <li>
            <Link to='/settings' className='block py-2'>
              Settings
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
