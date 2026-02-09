import React from "react";
import SectionHeader from "./SectionHeader";
import ProjectCard from "./ProjectCard";

import settL from "../assets/images/SettL.png";
import southward from "../assets/images/southward.png";
import DAce from "../assets/images/DAce.png";

import settLLight from "../assets/images/SettL-light.png";
import southwardLight from "../assets/images/southward-light.png";
import DAceLight from "../assets/images/DAce-light.png";

const Projects = ({ isDarkMode }) => {
    const projects = [
        {
            img: isDarkMode ? DAce : DAceLight,
            href: "https://daceacademy.co.uk/",
            name: "D Ace Academy",
            tools: [
                {key: "Frontend", value: ["NextJs", "Typescript"]},
                {key: "Backend", value: ["ExpressJs"]},
                {key: "State Management", value: ["Redux"]},
                {key: "Forms", value: ["Formik"]},
                {key: "CSS", value: ["tailwind css"]},
            ],
            text:
                "A platform dedicated to empowering International Medical Graduates through elite programs designed to accelerate their success in the UK healthcare system",
        },
        {
            img: isDarkMode ? settL : settLLight,
            href: "https://paysettl.netlify.app",
            name: "SettL",
            tools: [
                {key: "Frontend", value: ["React"]},
                {key: "Backend", value: ["Nodejs", "Express", "MongoDB"]},
                {key: "State Management", value: ["Redux Toolkit"]},
                {key: "Forms", value: ["Formik"]},
                {key: "CSS", value: ["Styled Components"]},
            ],
            text: "SettL is an escrow agent, which is responsible for holding and regulating funds involved in a transaction between 2 or more parties. .",
        },
        {
            img: isDarkMode ? southward : southwardLight,
            href: "https://https://southward-frontend.vercel.app/",
            name: "Southward Hospital",
            tools: [
                {key: "Frontend", value: ["Next"]},
                {key: "Backend", value: ["Node", "Express"]},
                {key: "State Management", value: ["Redux", "Context API"]},
                {key: "Forms", value: ["Yup", "Formik"]},
                {key: "CSS", value: ["Tailwind"]},
            ],
            text: "Experience the future of healthcare with your health in focus",
        }
    ];

    return (
        <section id="projects" className="section-padding">
            <div className="container">
                <SectionHeader
                    subheader="MY WORKS"
                    header="Projects"
                    description="Check out a few of my featured projects"
                    gradient="purple"
                />

                <div className="projects-grid">
                    {projects.map((project, i) => (
                        <ProjectCard
                            key={i}
                            img={project.img}
                            href={project.href}
                            name={project.name}
                            tools={project.tools}
                            text={project.text}
                        />
                    ))}
                </div>

                <div className="projects-cta">
                    <p>Want to see more of my work?</p>
                    <button
                        className="button-primary"
                        onClick={() => {
                            document
                                .getElementById("contact__form")
                                .scrollIntoView({behavior: "smooth"});
                        }}
                    >
                        Get In Touch
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Projects;