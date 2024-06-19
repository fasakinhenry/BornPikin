import React from "react";
import { Outlet } from "react-router-dom";

const AuthLayout = () => (
  <div>
    <header>Auth Header</header>
    <main>
      <Outlet />
    </main>
  </div>
);

export default AuthLayout;
