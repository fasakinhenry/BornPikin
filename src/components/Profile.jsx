import React from 'react';
import ProfileImage from "../assets/profile.jpg"

const Profile = () => {
  return (
    <div className='max-w-4xl mx-auto p-8'>
      <div className='flex flex-col items-center mb-6'>
        <img
          src={ProfileImage}
          alt='Profile'
          className='w-24 h-24 rounded-full mb-4'
        />
        <button className='px-4 py-2 bg-blue-500 text-white rounded-lg'>
          Change Picture
        </button>
      </div>

      <div className='bg-white p-4 rounded-lg shadow mb-6'>
        <h2 className='font-semibold mb-4'>Account Details</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          <div>
            <label className='block font-medium text-gray-700'>Name</label>
            <p className='text-gray-600'>Mama Angel</p>
          </div>
          <div>
            <label className='block font-medium text-gray-700'>Email</label>
            <p className='text-gray-600'>angel@example.com</p>
          </div>
          <div>
            <label className='block font-medium text-gray-700'>Phone</label>
            <p className='text-gray-600'>+1234567890</p>
          </div>
          <div>
            <label className='block font-medium text-gray-700'>Address</label>
            <p className='text-gray-600'>123 Street Name, City, Country</p>
          </div>
        </div>
      </div>

      <div className='bg-white p-4 rounded-lg shadow mb-6'>
        <h2 className='font-semibold mb-4'>Health Information</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          <div>
            <label className='block font-medium text-gray-700'>
              Blood Group
            </label>
            <p className='text-gray-600'>O+</p>
          </div>
          <div>
            <label className='block font-medium text-gray-700'>Allergies</label>
            <p className='text-gray-600'>None</p>
          </div>
          <div>
            <label className='block font-medium text-gray-700'>
              Medical Conditions
            </label>
            <p className='text-gray-600'>None</p>
          </div>
          <div>
            <label className='block font-medium text-gray-700'>
              Medications
            </label>
            <p className='text-gray-600'>None</p>
          </div>
        </div>
      </div>

      <div className='flex justify-between items-center'>
        <button className='px-4 py-2 bg-gray-300 text-gray-800 rounded-lg'>
          Settings
        </button>
        <button className='px-4 py-2 bg-red-600 text-white rounded-lg'>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Profile;
