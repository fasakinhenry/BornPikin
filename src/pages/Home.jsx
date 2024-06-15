import React from 'react';
import landingImage from '../assets/landing.png'; // Adjust the path as needed

const LandingPage = () => (
  <div className="text-center py-10">
    <p className="text-gray-700">Health and safety is just a dream if you don’t recycle</p>
    <h1 className="text-5xl font-bold my-4">
      Turn <span className="text-blue-600">Waste</span> into Worth with Pipance
    </h1>
    <div className="mt-10">
      <img src={landingImage} alt="Landing" className="mx-auto w-full max-w-4xl" />
    </div>
  </div>
);

export default LandingPage;
