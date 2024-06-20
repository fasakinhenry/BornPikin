import React from "react";
import { Outlet } from "react-router-dom";

const AuthLayout = () => (
  <div className="flex h-screen">
    <aside className="w-1/2 bg-color-primary flex flex-col items-center justify-center text-white">
      <div className="flex flex-col items-center">
        {/* <img src="logo.png" alt="Pipance Logo" className="w-20 h-20 mb-4" /> */}
        <h1 className="text-4xl font-bold">Pipance</h1>
        <p className="mt-2 text-xl">Recycling just got rewarding!</p>
      </div>
    </aside>
    <main className="w-1/2 flex flex-col items-center justify-center px-10">
      <Outlet />
    </main>
  </div>
);

export default AuthLayout;
