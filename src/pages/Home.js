import React from "react";
import Banner from "../components/banner.js";
import Experience from "../components/experience.js";
import Availability from "../components/availability.js";
import Skillset from "../components/skillset.js";
import Testimony from "../components/testimony.js";
import Contact from "../components/contact.js";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Home() {
  return (
    <div className="Home">
      <Banner />
      <Experience />
      <Availability />
      <Skillset />
      {/* <Testimony /> */}
      <Contact />
    </div>
  );
}

export default Home;
