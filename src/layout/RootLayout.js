import React from "react";
import Header from "../components/header.js";
import Footer from "../components/footer.js";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default RootLayout;
