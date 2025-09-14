import React, { useEffect, Suspense, lazy } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Banner from "../components/banner";
import ProfessionalSummary from "../components/professionalSummary";
import Experience from "../components/experience";
import Projects from "../components/projects";
import Skillset from "../components/skillset";
import Testimony from "../components/testimony";
import Contact from "../components/contact";
import Loading from "../components/Loading";

function Home({ isDarkMode }) {

  return (
    <>
      <Suspense fallback={<Loading />}>
        <Banner />
        <ProfessionalSummary />
        <Experience />
        <Projects isDarkMode={isDarkMode} />
        <Skillset />
        <Testimony />
        <Contact />
      </Suspense>
    </>
  );
}

export default Home;
