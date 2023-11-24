import React from "react";
import world from "../assets/images/world.png";

const Availability = () => {
  return (
    <div id="availability">
      <div className="availability__subheader__container">
        <div className="line__in"></div>
        <h2 className="availability__subheader">LOCATION</h2>
        <div className="line__out"></div>
      </div>

      <h1 className="availability__header">
        <span>Availability </span>{" "}
      </h1>
      <p className="availability__description">
        .....available to work physically and remotely in any part of the world
      </p>
      <div className="my__availability">
        <img src={world} alt="upwork" />
        <div>
          <p>
            Prepared to commit and add value to your project or organisation,
            both on-site or remotely. As your vision resonates globally, lets
            join forces to create without boundaries and transform possibilities
            to achievements
          </p>
          <button>Hire Me</button>
        </div>
      </div>
    </div>
  );
};

export default Availability;
