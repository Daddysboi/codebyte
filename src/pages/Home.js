import React, { useEffect, Suspense, lazy } from "react";
import { TailSpin as Loader } from "react-loader-spinner";
import Aos from "aos";
import "aos/dist/aos.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Banner = lazy(() => import("../components/banner"));
const Experience = lazy(() => import("../components/experience"));
const Availability = lazy(() => import("../components/availability"));
const Skillset = lazy(() => import("../components/skillset"));
const Testimony = lazy(() => import("../components/testimony"));
const Contact = lazy(() => import("../components/contact"));

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
    <div className="Home">
      <Suspense
        fallback={
          <Loader
            type="TailSpin"
            color="#093577"
            height={60}
            width={60}
            style={{ margin: "auto" }}
          />
        }
      >
        <Banner />
        <Experience />
        <Availability />
        <Skillset />
        <Testimony />
        <Contact />
      </Suspense>
    </div>
  );
}

export default Home;
