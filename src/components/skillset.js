import React, { useState } from "react";
import styled from "styled-components";

import nodejs from "../assets/images/nodejs.png";
import react from "../assets/images/react.png";
import javascript from "../assets/images/javascript.png";
import tailwind from "../assets/images/tailwind.png";
import typescript from "../assets/images/typescript.png";
import git from "../assets/images/git.png";
import wordpress from "../assets/images/wordpress.png";
import figma from "../assets/images/figma.png";
import mongoDb from "../assets/images/mongo-db.png";
import expressjs from "../assets/images/expressjs.png";
import nextJs from "../assets/images/nextjs.jpeg";

const Skillset = () => {
  const [activeTab, setActiveTab] = useState("frontend");

  const openTab = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div id="skillset">
      <div className="skillset__subheader__container">
        <div className="line__in"></div>
        <h2 className="skillset__subheader">SKILLS AT A GLANCE</h2>
        <div className="line__out"></div>
      </div>

      <div data-aos="fade-up">
        <h1 className="skillset__header">
          <span>Skillset</span>
        </h1>
        <p className="skillset__description">
          .....well vast across diverse modern technologies and development
          tools
        </p>
      </div>
      <div className="my__skillset">
        <div>
          <img src={javascript} alt="js" />
          <img className="fiverr" src={react} alt="react" />
          <img src={nextJs} alt="nextJs" />
          <img src={nodejs} alt="nodejs" />
          <img src={expressjs} alt="expressjs" />
          <img src={mongoDb} alt="html" />
          <img src={typescript} alt="typescript" />
          <img src={tailwind} alt="tailwind" />
          <img src={figma} alt="figma" />
          <img src={wordpress} alt="wordpress" />
          <img src={git} alt="git" />
        </div>
        <div className="my__skillset__tabs">
          <p
            className={`tab__links ${
              activeTab === "frontend" ? "active__link" : ""
            }`}
            onClick={() => openTab("frontend")}
          >
            FRONTEND DEV
          </p>
          <p
            className={`tab__links ${
              activeTab === "backend" ? "active__link" : ""
            }`}
            onClick={() => openTab("backend")}
          >
            BACKEND DEV
          </p>
          <p
            className={`tab__links ${
              activeTab === "data__analyst" ? "active__link" : ""
            }`}
            onClick={() => openTab("data__analyst")}
          >
            MOBILE DEV
          </p>
          <p
            className={`tab__links ${
              activeTab === "cyber__sec" ? "active__link" : ""
            }`}
            onClick={() => openTab("cyber__sec")}
          >
            CYBER SECURITY
          </p>
        </div>
        <div
          className={`tab__contents ${
            activeTab === "frontend" && "active__tab"
          }`}
        >
          <ul>
            <li>
              Frameworks/Libraries: React.js, Nextjs, Redux, Styled-Components,
              SASS, Tailwind, Typescript, SASS, Bootstrap, Tailwind
            </li>
            <li>State management: Redux. Context API </li>
            <li>Languages: HTML, CSS3, JavaScript (ES6+)</li>
            <li>CMS: Wordpress</li>
            <li>Version Control: Git/GitHub</li>
            <li>
              Responsive Design: Cross-browser compatibility, Mobile-first
              approach
            </li>
            <li>
              Web Performance Optimization: Efficient code splitting, Lazy
              loading of assets, Minification and compression techniques
            </li>
            <li>API Integration: RESTful APIs</li>
            <li>
              Other Skills: Figma and UI/UX principles, Web accessibility
              (WCAG), Progressive Web App (PWA) development
            </li>
          </ul>
        </div>
        <div
          className={`tab__contents ${
            activeTab === "backend" && "active__tab"
          }`}
        >
          <ul>
            <li>Nodejs</li>
            <li>Expressjs</li>
            <li>Database: NoSQL i.e MongoDB and SQL database</li>
            <li>RestAPI and Socket IO</li>
            <li>BAAS: Firebase and Superbase</li>
          </ul>
        </div>
        <div
          className={`tab__contents ${
            activeTab === "data__analyst" && "active__tab"
          }`}
        >
          <ul>
            <li>React Native</li>
            <li>Platforms: iOS, Android</li>
            <li>State Management: Redux, Context API,</li>
            <li>Development Tools: Xcode Visual Studio, Android Studio</li>
            <li>Cross-Platform Development: Expo</li>
            <li>Deployment: App Store, Google Play</li>
            <li>Other Skills: Push Notifications, Offline Storage, Firebase</li>
          </ul>
        </div>
        <div
          className={`tab__contents ${
            activeTab === "cyber__sec" && "active__tab"
          }`}
        >
          <ul>
            <li>Understanding of network protocols and firewall </li>
            <li>Knowledge of conducting security assessments </li>
            <li>
              Incident Response: Ability in handling security incidents,
              investigate breaches, and implementing measures to minimize
              impact.
            </li>
            <li>Google Chronicle</li>
            <li>Knowledge of secure coding practices</li>
            <li>Packet Snippet</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skillset;
