import React from 'react';

const HospitalCard = ({ name, address, phone }) => (
  <div className='bg-white rounded-lg shadow p-4 mb-4'>
    <h3 className='text-lg font-semibold'>{name}</h3>
    <p className='text-sm text-gray-600'>{address}</p>
    <p className='text-sm'>{phone}</p>
    <div className='mt-4'>
      <button className='bg-gray-200 text-gray-800 px-3 py-1 rounded mr-2'>
        Reschedule
      </button>
      <button className='bg-green-500 text-white px-3 py-1 rounded'>
        Details
      </button>
    </div>
  </div>
);

const Hospitals = () => {
  return (
    <div>
      <h2 className='text-2xl font-bold mb-4'>Explore hospitals and clinics</h2>
      <div className='mb-4'>
        <input
          type='text'
          placeholder='Search hospitals'
          className='p-2 border rounded'
        />
        <select className='p-2 border rounded ml-2'>
          <option>All states</option>
        </select>
        <select className='p-2 border rounded ml-2'>
          <option>All Hospitals</option>
        </select>
        <button className='bg-green-500 text-white px-4 py-2 rounded ml-2'>
          Search
        </button>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        <HospitalCard
          name='Paelon Memorial Clinic- Ikeja'
          address='9, Ajao Road Off Adeniyi Jones, Ikeja'
          phone='09161371780'
        />
        {/* Add more HospitalCard components as needed */}
      </div>
    </div>
  );
};

export default Hospitals;
