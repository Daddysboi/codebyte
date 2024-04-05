import React from "react";
import ProfileCard from "./ProfileCard";

import settL from "../assets/images/SettL.png";
import bloom from "../assets/images/bloom.png";

const tools = [
  { key: "Frontend", value: ["React", "Next", "React"] },
  {
    key: "Backend",
    value: [
      ["Nodejs", "Express", "MongoDB"],
      "",
      ["Nodejs", "Express", "MongoDB"],
    ],
  },
  { key: "State Management", value: ["Redux", "", "Redux"] },
  { key: "Forms", value: ["Formik", "", "Formik"] },
  {
    key: "CSS",
    value: ["Styled Components", "Styled Components", "Styled Components"],
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

      <h1 data-aos="fade-up" className="project__header">
        <span>Projects</span>
      </h1>
      <p className="project__description">
        ..... checkout a few of my projects
      </p>
      <div className="my__projects">
        <ProfileCard
          img={settL}
          href="https://paysettl.netlify.app"
          name="SettL"
          tools={tools}
          text="SettL is a payment platform and an escrow agent, which is a neutral third party responsible for holding and regulating funds involved in a transaction between a buyer and a seller. It’s role is to ensure that both parties fulfill their obligations before releasing the funds."
        />
        <ProfileCard
          img={bloom}
          href="https://bloom-staging.vercel.app/"
          name="Bloom"
          tools={tools}
          text="With Bloom, you can rent now and pay later. Our innovative platform offers flexible payment options that cater to your financial needs. Say goodbye to the stress of upfront rent payments and hello to a more convenient renting experience. Try bloom today and grow your finance"
        />
        {/* <ProfileCard /> */}
      </div>
    </div>
  );
};

export default project;
