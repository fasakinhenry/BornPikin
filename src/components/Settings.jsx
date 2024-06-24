import React, { useState } from 'react';

const Settings = () => {
  const [name, setName] = useState('Mama Angel');
  const [email, setEmail] = useState('angel@example.com');
  const [phone, setPhone] = useState('+1234567890');
  const [address, setAddress] = useState('123 Street Name, City, Country');
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [theme, setTheme] = useState('light');
  const [language, setLanguage] = useState('English');

  const handleSaveChanges = () => {
    // Add functionality to save changes
    console.log('Changes saved');
  };

  const handleChangePassword = () => {
    // Add functionality to change password
    console.log('Password changed');
  };

  const handleThemeChange = (event) => {
    setTheme(event.target.value);
    // Add functionality to apply theme
    console.log(`Theme changed to ${event.target.value}`);
  };

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
    // Add functionality to apply language
    console.log(`Language changed to ${event.target.value}`);
  };

  return (
    <div className='max-w-4xl mx-auto p-8'>
      <div className='bg-white p-4 rounded-lg shadow mb-6'>
        <h2 className='font-semibold mb-4'>Personal Information</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          <div>
            <label className='block font-medium text-gray-700'>Name</label>
            <input
              type='text'
              value={name}
              onChange={(e) => setName(e.target.value)}
              className='w-full px-3 py-2 border rounded-lg'
            />
          </div>
          <div>
            <label className='block font-medium text-gray-700'>Email</label>
            <input
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className='w-full px-3 py-2 border rounded-lg'
            />
          </div>
          <div>
            <label className='block font-medium text-gray-700'>Phone</label>
            <input
              type='tel'
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className='w-full px-3 py-2 border rounded-lg'
            />
          </div>
          <div>
            <label className='block font-medium text-gray-700'>Address</label>
            <input
              type='text'
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className='w-full px-3 py-2 border rounded-lg'
            />
          </div>
        </div>
        <div className='mt-4'>
          <button
            onClick={handleSaveChanges}
            className='px-4 py-2 bg-blue-500 text-white rounded-lg'
          >
            Save Changes
          </button>
        </div>
      </div>

      <div className='bg-white p-4 rounded-lg shadow mb-6'>
        <h2 className='font-semibold mb-4'>Change Password</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          <div>
            <label className='block font-medium text-gray-700'>Current Password</label>
            <input
              type='password'
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              className='w-full px-3 py-2 border rounded-lg'
            />
          </div>
          <div>
            <label className='block font-medium text-gray-700'>New Password</label>
            <input
              type='password'
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className='w-full px-3 py-2 border rounded-lg'
            />
          </div>
          <div>
            <label className='block font-medium text-gray-700'>Confirm Password</label>
            <input
              type='password'
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className='w-full px-3 py-2 border rounded-lg'
            />
          </div>
        </div>
        <div className='mt-4'>
          <button
            onClick={handleChangePassword}
            className='px-4 py-2 bg-blue-500 text-white rounded-lg'
          >
            Change Password
          </button>
        </div>
      </div>

      <div className='bg-white p-4 rounded-lg shadow mb-6'>
        <h2 className='font-semibold mb-4'>Preferences</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          <div>
            <label className='block font-medium text-gray-700'>Theme</label>
            <select
              value={theme}
              onChange={handleThemeChange}
              className='w-full px-3 py-2 border rounded-lg'
            >
              <option value='light'>Light</option>
              <option value='dark'>Dark</option>
              <option value='system'>System Default</option>
            </select>
          </div>
          <div>
            <label className='block font-medium text-gray-700'>Language</label>
            <select
              value={language}
              onChange={handleLanguageChange}
              className='w-full px-3 py-2 border rounded-lg'
            >
              <option value='English'>English</option>
              <option value='Spanish'>Spanish</option>
              <option value='French'>French</option>
              <option value='German'>German</option>
              <option value='Chinese'>Chinese</option>
              {/* Add more languages as needed */}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
