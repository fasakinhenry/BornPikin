import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
  <header className="bg-white shadow p-4 flex justify-between items-center w-full">
    <div className="text-xl font-bold">Pipance</div>
    <nav className="space-x-4">
      <Link to="/" className="text-blue-600">
        Home
      </Link>
      <Link to="how-it-works" className="hover:text-blue-600">
        How it works
      </Link>
      <Link to="functions" className="hover:text-blue-600">
        Functions
      </Link>
      <Link to="team" className="hover:text-blue-600">
        Team
      </Link>
    </nav>
    <div>
      <Link to="/login" className="bg-gray-200 px-4 py-2 rounded mr-2">
        Signup
      </Link>
      <Link to="/login" className="bg-blue-600 text-white px-4 py-2 rounded">
        Login
      </Link>
    </div>
  </header>
);

export default Header;
