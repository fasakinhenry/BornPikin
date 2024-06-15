import React from "react";
import Banner from "./Banner";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Banner />
      <Header />
      <main className="flex-grow">{children}</main>
    </div>
  );
};

export default Layout;
