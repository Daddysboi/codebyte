import React from "react";
import "../css/style.css";
import logo from "../assets/logo/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Header = () => {
  return (
    <header className="header-container">
      <div className="logo-container">
        <img src={logo} alt="logo" className="logo" />
        <h1>TrustedDevs</h1>
      </div>
      <button>
        <FontAwesomeIcon icon={faGithub} />
      </button>
    </header>
  );
};

export default Header;
