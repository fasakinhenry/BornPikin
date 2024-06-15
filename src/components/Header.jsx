import React from 'react';

const Header = () => (
  <header className="bg-white shadow p-4 flex justify-between items-center">
    <div className="text-xl font-bold">Pipance</div>
    <nav className="space-x-4">
      <a href="/" className="text-blue-600">Home</a>
      <a href="#how-it-works" className="hover:text-blue-600">How it works</a>
      <a href="#functions" className="hover:text-blue-600">Functions</a>
      <a href="#team" className="hover:text-blue-600">Team</a>
    </nav>
    <div>
      <button className="bg-gray-200 px-4 py-2 rounded mr-2">Signup</button>
      <button className="bg-blue-600 text-white px-4 py-2 rounded">Login</button>
    </div>
  </header>
);

export default Header;
