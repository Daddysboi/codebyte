import React from "react";
import ProfileCard from "./ProfileCard";

import settL from "../assets/images/SettL.png";
import bloom from "../assets/images/bloom.png";
import AndreArmani from "../assets/images/AndreArmani.png";

const projects = [
  {
    img: settL,
    href: "https://paysettl.netlify.app",
    name: "SettL",
    tools: [
      { key: "Frontend", value: ["React"] },
      { key: "Backend", value: ["Nodejs", "Express", "MongoDB"] },
      { key: "State Management", value: ["Redux Toolkit"] },
      { key: "Forms", value: ["Formik"] },
      { key: "CSS", value: ["Styled Components"] },
    ],
    text: "SettL is a payment platform and an escrow agent, which is a neutral third party responsible for holding and regulating funds involved in a transaction between a buyer and a seller. It’s role is to ensure that both parties fulfill their obligations before releasing the funds.",
  },
  {
    img: bloom,
    href: "https://bloom-staging.vercel.app/",
    name: "Bloom",
    tools: [
      { key: "Frontend", value: ["Next"] },
      { key: "Backend", value: [" "] },
      { key: "State Management", value: [""] },
      { key: "Forms", value: [""] },
      { key: "CSS", value: ["Styled Components"] },
    ],
    text: "With Bloom, you can rent now and pay later. Our innovative platform offers flexible payment options that cater to your financial needs. Say goodbye to the stress of upfront rent payments and hello to a more convenient renting experience. Try bloom today and grow your finance",
  },
  {
    img: AndreArmani,
    href: "https://andre-armani.vercel.app",
    name: "Andre Armani",
    tools: [
      { key: "Frontend", value: ["React", "Typescript"] },
      { key: "Backend", value: ["supabase"] },
      { key: "CMS", value: ["Sanity"] },
      { key: "Forms", value: ["Formik"] },
      { key: "CSS", value: ["tailwind css"] },
    ],
    text: "This is an e-commerce web application built for Andre Armani, an artist who sells artistic creations like art drawings and custom wears. The website is developed using the following technologies. Users can browse and explore a wide range of artistic products, including art drawings.",
  },
];
const project = () => {
  return (
    <div id="project">
      <div className="project__subheader__container">
        <div className="line__in"></div>
        <h2 className="project__subheader">MY WORKS</h2>
        <div className="line__out"></div>
      </div>

      <div data-aos="fade-up">
        <h1 className="project__header">
          <span>Projects</span>
        </h1>
        <p className="project__description">
          ..... checkout a few of my projects
        </p>
      </div>
      <div className="my__projects">
        {projects.map((project, i) => (
          <ProfileCard
            key={i}
            img={project.img}
            href={project.href}
            name={project.name}
            tools={project.tools}
            text={project.text}
          />
        ))}
      </div>
    </div>
  );
};

export default project;
