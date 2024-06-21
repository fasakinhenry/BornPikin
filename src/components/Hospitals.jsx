// src/components/Hospitals.jsx
import React from 'react';
import { FaSearch, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import hospitalImage from '../assets/hospital_pic.png';

const Hospitals = () => {
  return (
    <div className='p-4 md:p-6'>
      <h1 className='text-2xl md:text-3xl font-bold mb-6'>
        Explore hospitals and clinics
      </h1>

      <div className='flex flex-col md:flex-row items-center mb-6 space-y-4 md:space-y-0 md:space-x-4'>
        <div className='relative w-full md:w-auto md:flex-1'>
          <FaSearch className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400' />
          <input
            type='text'
            placeholder='Search hospitals'
            className='w-full pl-10 pr-4 py-2 border rounded-lg'
          />
        </div>
        <select className='w-full md:w-auto px-4 py-2 border rounded-lg'>
          <option>All states</option>
        </select>
        <select className='w-full md:w-auto px-4 py-2 border rounded-lg'>
          <option>All Hospitals</option>
        </select>
        <button className='w-full md:w-auto px-6 py-2 bg-green-500 text-white rounded-lg'>
          Search
        </button>
      </div>

      <p className='text-gray-600 mb-6'>
        Showing results for 2500 providers in all states and all providers
      </p>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6'>
        {[1, 2, 3, 4, 5, 6].map((_, index) => (
          <HospitalCard key={index} />
        ))}
      </div>
    </div>
  );
};

const HospitalCard = () => (
  <div className='bg-white p-4 rounded-lg shadow-md'>
    <img
      src={hospitalImage}
      alt='Hospital'
      className='w-full h-32 object-cover rounded-lg mb-4'
    />
    <h3 className='font-semibold text-lg mb-2'>
      Paelon Memorial Clinic - Ikeja
    </h3>
    <p className='flex items-center text-sm text-gray-600 mb-2'>
      <FaMapMarkerAlt className='mr-2 flex-shrink-0' />
      <span>9, Ajao Road Off Adeniyi Jones, Ikeja</span>
    </p>
    <p className='flex items-center text-sm text-gray-600 mb-4'>
      <FaPhone className='mr-2 flex-shrink-0' />
      <span>09161371780</span>
    </p>
    <div className='flex space-x-2'>
      <button className='flex-1 px-3 py-1 bg-gray-200 rounded-lg text-sm'>
        Reschedule
      </button>
      <button className='flex-1 px-3 py-1 bg-green-500 text-white rounded-lg text-sm'>
        Details
      </button>
    </div>
  </div>
);

export default Hospitals;
