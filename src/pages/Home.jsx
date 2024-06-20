import React from 'react';
import gridLines from '../assets/grid_lines.png';
import heroImage from '../assets/hero_image.png';
import '../index.css';

const LandingPage = () => (
  <div
    className='relative w-full mt-5 bg-repeat min-h-screen'
    style={{ backgroundImage: `url(${gridLines})` }}
  >
    <section className='relative px-10 py-12 flex flex-row justify-center items-center'>
      <div className='md:w-1/2 mb-8 md:mb-0 flex flex-col w-full'>
        <h1 className='text-4xl md:text-5xl font-bold mb-4'>
          Take <span className='text-purple-600'>Care of Yourself</span>
          <br />
          and <span className='text-purple-600'>Pikin wella</span>
        </h1>
        <img
          src={heroImage}
          alt='Mother and child hands'
          className='rounded-full h-90 w-90 mx-auto'
        />
      </div>
      <div className='md:w-1/2'>
        <p className='text-gray-600 mb-6'>
          "We believe Maternal Health to be Universal Right, Not a Privilege"
        </p>
        <p className='text-gray-600 mb-6'>
          The strong connection between mama and her pikin is special. We dey
          support mama with everything wey dem need to build better families and
          brighter futures.
        </p>
        <button className='bg-purple-600 text-white px-6 py-3 rounded-full hover:bg-purple-700 transition duration-300'>
          Get Started
        </button>
      </div>
    </section>

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
