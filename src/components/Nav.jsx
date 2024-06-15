import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className="flex space-x-4">
      <NavLink to="/" exact activeClassName="text-[#287bff]" className="hover:text-[#287bff]">Home</NavLink>
      <NavLink to="/how-it-works" activeClassName="text-[#287bff]" className="hover:text-[#287bff]">How it works</NavLink>
      <NavLink to="/functions" activeClassName="text-[#287bff]" className="hover:text-[#287bff]">Functions</NavLink>
      <NavLink to="/team" activeClassName="text-[#287bff]" className="hover:text-[#287bff]">Team</NavLink>
    </nav>
  );
};

export default Nav;
