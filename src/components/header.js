import React from "react";
import "../css/style.css";
import logo from "../assets/logo/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header-container">
      <Link to="/">
        <div className="logo-container">
          <img src={logo} alt="logo" className="logo" />
          <h1>Temi</h1>
        </div>
      </Link>
      <a href="https://github.com/daddysboi" target="_blank" rel="noreferrer">
        <div className="github__icon">
          <FontAwesomeIcon icon={faGithub} />
        </div>
      </a>
    </header>
  );
};

export default Header;
