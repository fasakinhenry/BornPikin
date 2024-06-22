import React from 'react';
import { FaSearch } from 'react-icons/fa';

const Dashboard = () => {
  return (
    <div className='max-w-4xl mx-auto'>
      <h1 className='text-2xl font-bold mb-4'>Welcome Mama Angel, how are you?</h1>

      <div className='mb-6'>
        <div className='relative'>
          <input
            type='text'
            placeholder='Search for midwives near you'
            className='w-full pl-10 pr-4 py-2 border rounded-lg'
          />
          <FaSearch className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400' />
        </div>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mb-6'>
        {['How to say no', 'How to make', 'How to do'].map((title, index) => (
          <div key={index} className='bg-white p-4 rounded-lg shadow'>
            <h3 className='font-semibold mb-2'>{title}</h3>
            <p className='text-sm text-gray-600'>
              Lorem ipsum dolor sit amet...
            </p>
          </div>
        ))}
      </div>

      <div className='bg-white p-4 rounded-lg shadow mb-6'>
        <h2 className='font-semibold mb-2'>Educational Gallery</h2>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-2'>
          {[1, 2, 3, 4].map((_, index) => (
            <div key={index} className='bg-gray-200 h-24 rounded'></div>
          ))}
        </div>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        <div className='bg-white p-4 rounded-lg shadow'>
          <h2 className='font-semibold mb-2'>MBFIS</h2>
          <p className='text-sm text-gray-600'>Content for MBFIS...</p>
        </div>
        <div className='bg-white p-4 rounded-lg shadow'>
          <h2 className='font-semibold mb-2'>Prenatal Care</h2>
          <p className='text-sm text-gray-600'>Content for Prenatal Care...</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
