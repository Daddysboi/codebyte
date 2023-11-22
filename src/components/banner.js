import React, { useEffect } from "react";
import "../css/style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

// import banner from "../assets/images/banner.png";

const SophisticatedBanner = () => {
  useEffect(() => {
    const banner = document.getElementById("banner");

    function createBubble(color) {
      const bubble = document.createElement("div");
      bubble.classList.add("bubble");
      bubble.style.background = color;

      const randomX = Math.random() * window.innerWidth * 0.3; // Adjust the range
      const randomY = Math.random() * window.innerHeight * 0.3; // Adjust the range

      bubble.style.left = `${randomX}px`;
      bubble.style.top = `${randomY}px`;

      banner.appendChild(bubble);
    }

    // Create sun reflection
    const sunReflection = document.createElement("div");
    sunReflection.classList.add("sun-reflection");
    banner.appendChild(sunReflection);

    // Create bubbles within the sun reflection
    for (let i = 0; i < 30; i++) {
      createBubble("white"); // White bubbles
      createBubble("blue"); // Blue bubbles
    }
  }, []);

  return null; // No need to render anything
};

const Banner = () => {
  return (
    <div id="banner">
      {/* <div class="firefly"></div>
      <div class="bubble"></div> */}
      <div>
        <h1 className="banner__header">
          Hire and get<span> a top</span> <br />
          developer on your team
        </h1>
        <p>
          ...Innovate, illuminate, inspire, the future starts with a good dev
        </p>
        <div className="button-container">
          <button className="button-hire-left">Hire Now</button>
          <button className="button-hire-right">
            MY CV
            <FontAwesomeIcon className="download__icon" icon={faDownload} />
          </button>
        </div>
      </div>

      {/* <SophisticatedBanner /> */}
    </div>
  );
};

export default Banner;
