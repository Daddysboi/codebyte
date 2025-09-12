import React from "react";
import world from "../assets/images/world.png";
import SectionHeader from "./SectionHeader";

const ProfessionalSummary = () => {
  return (
      <section id="availability" className="section-padding">
        <div className="container">
          <SectionHeader
              subheader="GET TO KNOW ME"
              header="Professional Summary"
              description="Read about me and my availability below"
              gradient="green"
          />

          <div className="availability-content">
            <div className="availability-image">
              <img src={world} alt="World map illustration" />
            </div>

            <div className="availability-text">
              <p className="summary-text">
                Experienced software engineer with a proven track record in designing and implementing scalable
                enterprise solutions.
                Adept at mentoring junior developers and fostering a collaborative team environment.
                Possesses strong coding and testing skills, with a commitment to delivering high-quality applications
                that improve organizational efficiency and productivity.
                Holds a BSc in Mathematics and is continuously dedicated to learning and exploring emerging technologies
                to stay at the forefront of the evolving software development landscape.
              </p>

              <button
                  className="button-primary"
                  onClick={() => {
                    document
                        .getElementById("contact__form")
                        .scrollIntoView({ behavior: "smooth" });
                  }}
              >
                Contact Me
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>
  );
};

export default ProfessionalSummary;