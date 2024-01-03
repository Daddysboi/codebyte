import React from "react";
import Banner from "../components/banner";
import Experience from "../components/experience";
import Availability from "../components/availability";
import Skillset from "../components/skillset";
import Testimony from "../components/testimony";
import Contact from "../components/contact";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Home() {
  return (
    <div className="Home">
      <Banner />
      <Experience />
      <Availability />
      <Skillset />
      <Testimony />
      <Contact />
    </div>
  );
}

export default Home;
