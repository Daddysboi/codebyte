import React, { useState } from "react";
import "../css/style.css";
import css from "../assets/images/css.png";
import react from "../assets/images/react.png";
import javascript from "../assets/images/javascript.png";
import tailwind from "../assets/images/tailwind.png";
import typescript from "../assets/images/typescript.png";
import sass from "../assets/images/sass.png";

const Skillset = () => {
  const [activeTab, setActiveTab] = useState("web__dev");

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

      <h1 className="skillset__header">
        <span>Skillset</span>
      </h1>
      <p className="skillset__description">
        .....well vast across diverse modern technologies and development tools
      </p>
      <div className="my__skillset">
        <div>
          <img src={css} alt="css" />
          <img src={javascript} alt="js" />
          <img className="fiverr" src={react} alt="react" />
          <img src={tailwind} alt="tailwind" />
          <img src={typescript} alt="typescript" />
          <img src={sass} alt="sass" />
          {/* <img src={worspress} alt="" /> */}
        </div>
        <div className="my__skillset__tabs">
          <p
            className={`tab__links ${
              activeTab === "web__dev" ? "active__link" : ""
            }`}
            onClick={() => openTab("web__dev")}
          >
            WEB DEVELOPMENT
          </p>
          <p
            className={`tab__links ${
              activeTab === "data__analyst" ? "active__link" : ""
            }`}
            onClick={() => openTab("data__analyst")}
          >
            DATA ANALYTICS
          </p>
          <p
            className={`tab__links ${
              activeTab === "biz__analyst" ? "active__link" : ""
            }`}
            onClick={() => openTab("biz__analyst")}
          >
            BUSINESS ANALYTICS
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
            activeTab === "web__dev" && "active__tab"
          }`}
        >
          <ul>
            <li>
              Ability to design fully responsive and interactive HTML/Wordpress
              websites of any magnitude
            </li>
            <li>
              Ability to use maintainable CSS styling like Sass, Tailwind,
              Bootstrap
            </li>
            <li>
              Ability to add interactivity using JavaScript, Reactjs, Typescript
            </li>
            <li>Debuging and website testing</li>
            <li>Frontend speacialist</li>
          </ul>
        </div>
        <div
          className={`tab__contents ${
            activeTab === "data__analyst" && "active__tab"
          }`}
        >
          <ul>
            <li>Power BI</li>
            <li>R</li>
            <li>Excel/Google spreadsheets</li>
            <li>SQL</li>
          </ul>
        </div>
        <div
          className={`tab__contents ${
            activeTab === "biz__analyst" && "active__tab"
          }`}
        >
          <ul>
            <li>Excel</li>
            <li>Power BI</li>
            <li>SQL</li>
            <li>R</li>
          </ul>
        </div>
        <div
          className={`tab__contents ${
            activeTab === "cyber__sec" && "active__tab"
          }`}
        >
          <ul>
            <li>Linux</li>
            <li>Python</li>
            <li>SQL</li>
            <li>Google Chronicle</li>
            <li>Play Book</li>
            <li>Packet Snippet</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skillset;
