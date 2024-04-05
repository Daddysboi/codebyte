import React, { useEffect, Suspense, lazy } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Banner = lazy(() => import("../components/banner"));
const ProfessionalSummary = lazy(() =>
  import("../components/professionalSummary")
);
const Experience = lazy(() => import("../components/experience"));
const Projects = lazy(() => import("../components/projects"));
const Skillset = lazy(() => import("../components/skillset"));
const Testimony = lazy(() => import("../components/testimony"));
const Contact = lazy(() => import("../components/contact"));
import Loading from "../components/Loading";

function Home() {
  useEffect(() => {
    Aos.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-out",
      delay: 100,
    });
  }, []);

  return (
    <>
      <Suspense fallback={<Loading />}>
        <Banner />
        <ProfessionalSummary />
        <Experience />
        <Projects />
        <Skillset />
        <Testimony />
        <Contact />
      </Suspense>
    </>
  );
}

export default Home;
