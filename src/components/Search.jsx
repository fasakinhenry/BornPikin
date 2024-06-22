import React from 'react';
import { FaSearch, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';

const Search = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Search for Midwives</h1>
      
      <div className="flex flex-col md:flex-row items-center mb-6 space-y-4 md:space-y-0 md:space-x-4">
        <div className="relative w-full md:w-auto md:flex-1">
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search midwives"
            className="w-full pl-10 pr-4 py-2 border rounded-lg"
          />
        </div>
        <select className="w-full md:w-auto px-4 py-2 border rounded-lg">
          <option>All locations</option>
        </select>
        <button className="w-full md:w-auto px-6 py-2 bg-color-primary text-white rounded-lg">Search</button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[1, 2, 3, 4, 5, 6].map((_, index) => (
          <MidwifeCard key={index} />
        ))}
      </div>
    </div>
  );
};

const MidwifeCard = () => (
  <div className="bg-white p-4 rounded-lg shadow-md">
    <img src="/path-to-midwife-image.jpg" alt="Midwife" className="w-full h-32 object-cover rounded-lg mb-4" />
    <h3 className="font-semibold text-lg mb-2">Jane Doe</h3>
    <p className="flex items-center text-sm text-gray-600 mb-2">
      <FaMapMarkerAlt className="mr-2 flex-shrink-0" />
      <span>123 Midwife St, City</span>
    </p>
    <p className="flex items-center text-sm text-gray-600 mb-4">
      <FaPhone className="mr-2 flex-shrink-0" />
      <span>+1 234 567 8901</span>
    </p>
    <button className="w-full px-3 py-2 bg-color-primary text-white rounded-lg text-sm">Message</button>
  </div>
);

export default Search;
