import React from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import { Outlet } from "react-router-dom";
const LandingLayout = () => {
  return (
    <div className="overflow-hidden">
      <Banner />
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default LandingLayout;
