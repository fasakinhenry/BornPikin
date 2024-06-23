import React from 'react';
import { FaSearch, FaBell, FaHeartbeat } from 'react-icons/fa';

const Dashboard = () => {
  return (
    <div className='max-w-4xl mx-auto p-4 md:p-8'>
      <h1 className='text-2xl font-bold mb-4'>
        Welcome Mama Angel, how are you?
      </h1>

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

      <div className='flex justify-between items-center mb-6'>
        <button className='px-4 py-2 bg-red-600 text-white rounded-lg'>
          Emergency
        </button>
        <button className='px-4 py-2 bg-yellow-500 text-white rounded-lg'>
          SOS
        </button>
      </div>

      <div className='bg-white p-4 rounded-lg shadow mb-6'>
        <h2 className='font-semibold mb-2'>Analytics</h2>
        <p className='text-sm text-gray-600 mb-4'>
          Various statistics and data related to your pregnancy journey.
        </p>
        <button className='px-4 py-2 bg-blue-600 text-white rounded-lg'>
          Do Checkup
        </button>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-6'>
        <div className='bg-white p-4 rounded-lg shadow'>
          <h2 className='font-semibold mb-2'>Notifications</h2>
          <p className='text-sm text-gray-600'>You have 3 new notifications.</p>
        </div>
        <div className='bg-white p-4 rounded-lg shadow'>
          <h2 className='font-semibold mb-2'>Prenatal Care</h2>
          <p className='text-sm text-gray-600'>
            Here are the latest updates on your prenatal care.
          </p>
        </div>
      </div>

      <div className='bg-white p-4 rounded-lg shadow mb-6'>
        <h2 className='font-semibold mb-2'>Educational Content</h2>
        <div className='grid grid-cols-1 gap-4'>
          {[
            {
              thumbnail: '/path/to/image1.jpg',
              title: 'Healthy Eating',
              date: 'June 20, 2024',
            },
            {
              thumbnail: '/path/to/image2.jpg',
              title: 'Exercise During Pregnancy',
              date: 'June 18, 2024',
            },
            {
              thumbnail: '/path/to/image3.jpg',
              title: 'Warning Signs',
              date: 'June 15, 2024',
            },
            {
              thumbnail: '/path/to/image4.jpg',
              title: 'Birth Plans',
              date: 'June 10, 2024',
            },
          ].map((item, index) => (
            <div key={index} className='flex items-center'>
              <img
                src={item.thumbnail}
                alt={item.title}
                className='w-16 h-16 rounded mr-4'
              />
              <div>
                <h3 className='font-semibold'>{item.title}</h3>
                <p className='text-sm text-gray-600'>{item.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
