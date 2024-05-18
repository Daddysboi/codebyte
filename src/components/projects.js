import React from "react";
import ProfileCard from "./ProfileCard";

import settL from "../assets/images/SettL.png";
import bloom from "../assets/images/bloom.png";
import maids from "../assets/images/maids-cc.png";

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
    img: maids,
    href: "https://maids-cc.vercel.app/",
    name: "Maids.cc",
    tools: [
      { key: "Frontend", value: ["React Vite"] },
      { key: "Backend", value: ["Nodejs", "Express", "MongoDB"] },
      { key: "State Management", value: ["Redux Toolkit"] },
      { key: "Forms", value: ["Formik"] },
      { key: "CSS", value: ["Styled Components"] },
    ],
    text: "A demo of  platform for securing maids and processing visa for clients maids to come stay with them in Dubai. I was asked to build this for the platform so i played around with the project, implementing certain dashboard features",
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

      <h1
        data-aos="fade-up"
        data-aos-duration="500"
        data-aos-delay="300"
        data-aos-offset="200"
        className="project__header"
      >
        <span>Projects</span>
      </h1>
      <p className="project__description">
        ..... checkout a few of my projects
      </p>
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
