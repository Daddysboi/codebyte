import React from "react";
import SectionHeader from "./SectionHeader";
import ProjectCard from "./ProjectCard";

import settL from "../assets/images/SettL.png";
import bloom from "../assets/images/bloom.png";
import DAce from "../assets/images/DAce.png";

import settLLight from "../assets/images/SettL-light.png";
import bloomLight from "../assets/images/bloom-light.png";
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
            text: "SettL is a payment platform and an escrow agent, which is a neutral third party responsible for holding and regulating funds involved in a transaction between a buyer and a seller. It's role is to ensure that both parties fulfill their obligations before releasing the funds.",
        },
        {
            img: isDarkMode ? bloom : bloomLight,
            href: "https://bloom-staging.vercel.app/",
            name: "Bloom",
            tools: [
                {key: "Frontend", value: ["Next"]},
                {key: "Backend", value: [" "]},
                {key: "State Management", value: [""]},
                {key: "Forms", value: [""]},
                {key: "CSS", value: ["Styled Components"]},
            ],
            text: "With Bloom, you can rent now and pay later. Our innovative platform offers flexible payment options that cater to your financial needs. Say goodbye to the stress of upfront rent payments and hello to a more convenient renting experience. Try bloom today and grow your finance",
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