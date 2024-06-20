import React from 'react';
import gridLines from '../assets/grid_lines.png';
import '../index.css';

const LandingPage = () => (
  <div
    className='relative text-center py-10 flex flex-col items-center w-full m-0 mt-5 bg-repeat h-[100vh]'
    style={{ backgroundImage: `url(${gridLines})`, backgroundSize: 'cover' }}
  >
    <div className='w-full'></div>
    <div className=' absolute top-20 mt-10'>
      <h1 className='text-6xl font-black mt-10'>
        Take <span className='text-blue-600'>Care</span> of{' '}
        <span className='text-blue-600'>Yourself</span> and{' '}
        <span className='text-blue-600'>Pikin</span> wella
      </h1>
    </div>

    {/* <div className="mt-10">
      <img
        src={landingImage}
        alt="Landing"
        className="mx-auto w-full max-w-4xl"
      />
    </div> */}
  </div>
);

export default LandingPage;
