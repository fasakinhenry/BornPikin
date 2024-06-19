import React from "react";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => (
  <div>
    <aside>Sidebar</aside>
    <main>
      <Outlet />
    </main>
  </div>
);

export default DashboardLayout;
