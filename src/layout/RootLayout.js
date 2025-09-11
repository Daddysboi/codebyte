import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div className="main-content-wrapper">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default RootLayout;
