import React from "react"; // Import React
import { FaExternalLinkAlt } from "react-icons/fa";

const ProfileCard = ({ img, href, name, tools, text }) => {
  return (
    <div className="profile-card-container">
      <div className="profile-card-top">
        <img className="profile-card-img" src={img} alt="userimage" />
      </div>
      <div className="profile-card-bottom">
        <p className="profile-card-header">{name}</p>
        <p className="profile-card-paragraph">{text}</p>
        <ul className="profile-card-ul">
          {tools.map((tool, index) => (
            <li key={index} className="profile-card-li">
              <p className="profile-card-key">{tool.key}: </p>
              {tool.value.filter(Boolean).join(", ")}
            </li>
          ))}
        </ul>

        <a href={href} rel="noopener noreferrer" target="_blank">
          <p className="profile-card-click-text">
            <FaExternalLinkAlt size={"0.8rem"} />
          </p>
        </a>
      </div>
    </div>
  );
};

export default ProfileCard;