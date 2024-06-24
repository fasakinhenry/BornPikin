import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigateTo = useNavigate();

  return (
    <div className='w-full h-screen flex flex-col justify-center items-center'>
      <div className='box'>
        <div class='text-5xl font-bold block mb-4 text-center'>Error 404</div>
        <div class='text-2xl font-bold block text-center'>Page not found</div>
      </div>
    </div>
  );
};

export default NotFound;
