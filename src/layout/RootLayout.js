import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import { Outlet } from "react-router-dom";

const RootLayout = ({ isDarkMode, setIsDarkMode }) => {
  return (
    <div className="main-content-wrapper">
      <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <Outlet />
      <Footer />
    </div>
  );
};

export default RootLayout;
