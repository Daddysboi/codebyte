import React, { useState } from "react";
import SectionHeader from "./SectionHeader";

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

  const skillsData = {
    frontend: {
      title: "Frontend Development",
      skills: [
        { category: "Languages", items: ["TypeScript", "JavaScript"] },
        { category: "Frameworks & Libraries", items: ["Angular", "React.js", "Next.js"] },
        { category: "State Management", items: ["Redux", "Context API", "RxJS"] },
        { category: "Testing & QA", items: ["Jasmine", "Karma", "Jest"] }
      ]
    },
    backend: {
      title: "Backend Development",
      skills: [
        { category: "Languages", items: ["Java", "JavaScript", "TypeScript"] },
        { category: "Frameworks & Libraries", items: ["Express.js", "Spring Boot", "Spring MVC", "Spring Security", "Hibernate/JPA"] },
        { category: "Databases", items: ["PostgreSQL", "MySQL", "MongoDB"] },
        { category: "Tools & Platforms", items: ["Docker", "Nginx", "Tomcat", "Termius", "Heroku", "Swagger", "Flyway"] },
        { category: "DevOps & Deployment", items: ["CI/CD", "Shell Scripting", "Remote Server Management (via SSH)", "Nginx Configuration"] },
        { category: "BaaS & Cloud Services", items: ["Firebase", "Supabase"] },
        { category: "Testing & QA", items: ["JUnit", "Mockito", "JaCoCo"] }
      ]
    }
  };

  const techIcons = [
    { src: javascript, name: "JavaScript" },
    { src: react, name: "React" },
    { src: nextJs, name: "Next.js" },
    { src: nodejs, name: "Node.js" },
    { src: expressjs, name: "Express.js" },
    { src: mongoDb, name: "MongoDB" },
    { src: typescript, name: "TypeScript" },
    { src: tailwind, name: "Tailwind CSS" },
    { src: figma, name: "Figma" },
    { src: wordpress, name: "WordPress" },
    { src: git, name: "Git" }
  ];

  return (
      <section id="skillset" className="section-padding">
        <div className="container">
          <SectionHeader
              subheader="SKILLS AT A GLANCE"
              header="Skillset"
              description="Well-versed across diverse modern technologies and development tools"
              gradient="pink"
          />

          <div className="skills-content">
            {/* Tech Stack Icons */}
            <div className="tech-stack">
              <div className="tech-icons-grid">
                {techIcons.map((tech, index) => (
                    <div key={index} className="tech-icon-item">
                      <img src={tech.src} alt={tech.name} />
                    </div>
                ))}
              </div>
            </div>

            {/* Skills Tabs */}
            <div className="skills-tabs-container">
              <div className="skills-tabs-header">
                <button
                    className={`skills-tab ${activeTab === "frontend" ? "active" : ""}`}
                    onClick={() => openTab("frontend")}
                >
                  Frontend Development
                </button>
                <button
                    className={`skills-tab ${activeTab === "backend" ? "active" : ""}`}
                    onClick={() => openTab("backend")}
                >
                  Backend Development
                </button>
              </div>

              <div className="skills-tab-content">
                <div className="skills-grid">
                  {skillsData[activeTab].skills.map((skillCategory, index) => (
                      <div key={index} className="skill-category">
                        <h4 className="skill-category-name">{skillCategory.category}</h4>
                        <div className="skill-items">
                          {skillCategory.items.map((skill, skillIndex) => (
                              <span key={skillIndex} className="skill-tag">
                          {skill}
                        </span>
                          ))}
                        </div>
                      </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};

export default Skillset;