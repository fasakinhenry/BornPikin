import React from "react";
import { Outlet } from "react-router-dom";

const AuthLayout = () => (
  <div className="flex h-screen">
    <aside className="w-1/2 bg-color-primary flex items-center justify-center text-4xl font-bold text-white">
      Pipance
    </aside>
    <main className="w-1/2 flex flex-col items-center justify-center px-10">
      <Outlet />
    </main>
  </div>
);

export default AuthLayout;
