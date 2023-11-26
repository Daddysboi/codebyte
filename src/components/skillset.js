import React, { useState } from "react";
import css from "../assets/images/css.png";
import react from "../assets/images/react.png";
import javascript from "../assets/images/javascript.png";
import tailwind from "../assets/images/tailwind.png";
import typescript from "../assets/images/typescript.png";
import sass from "../assets/images/sass.png";
import git from "../assets/images/git.png";
import wordpress from "../assets/images/wordpress.png";
import sql from "../assets/images/sql.png";
import figma from "../assets/images/figma.png";
import html from "../assets/images/html.png";

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
          <img src={html} alt="html" />
          <img src={css} alt="css" />
          <img src={javascript} alt="js" />
          <img className="fiverr" src={react} alt="react" />
          <img src={tailwind} alt="tailwind" />
          <img src={typescript} alt="typescript" />
          <img src={sass} alt="sass" />
          <img src={figma} alt="figma" />
          <img src={wordpress} alt="wordpress" />
          <img src={sql} alt="sql" />
          <img src={git} alt="git" />
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
            <li>Languages: HTML, CSS3, JavaScript (ES6+)</li>
            <li>CMS: Wordpress</li>
            <li>
              Frameworks/Libraries: React.js,Styles Components, SASS, Bootstrap,
              Tailwind
            </li>
            <li>Next.js for Server-Side Rendering (SSR) </li>
            <li>Version Control: Git/GitHub</li>
            <li>
              Responsive Design: Cross-browser compatibility, Mobile-first
              approach
            </li>
            <li>
              Web Performance Optimization: Efficient code splitting, Lazy
              loading of assets, Minification and compression techniques
            </li>
            <li>API Integration: RESTful APIs, GraphQL</li>
            <li>Package Managers: npm</li>
            <li>Build Tools: Webpack</li>
            <li>Testing: Unit testing with Jest, Integration testing</li>
            <li>Code Quality: ESLint, Prettier</li>
            <li>
              Other Skills: Figma and UI/UX principles, Web accessibility
              (WCAG), Progressive Web App (PWA) development
            </li>
          </ul>
        </div>
        <div
          className={`tab__contents ${
            activeTab === "data__analyst" && "active__tab"
          }`}
        >
          <ul>
            <li>Excel/MS Office/Google Analytics</li>
            <li>Power BI: Expertise in data modeling, & publishing.</li>
            <li>HubSpot: lead management, & sales tracking,</li>
            <li>
              Data Analytics: Strong data visualization, pattern recognition,
              and storytelling
            </li>
            <li>SQL: querying, and managing relational databases</li>
            <li>
              R: Proficiency in statistical computing, analysis, & modeling.
            </li>
          </ul>
        </div>
        <div
          className={`tab__contents ${
            activeTab === "biz__analyst" && "active__tab"
          }`}
        >
          <ul>
            <li>Excel/MS Office/Google Analytics</li>
            <li>Power BI: Expertise in data modeling, & publishing</li>
            <li>Strong data visualization and pattern recognition</li>
            <li>SQL: querying, and managing relational databases</li>
            <li>
              R: Proficiency in statistical computing, analysis, & modeling.
            </li>
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
