import React from "react";
import "../css/style.css";
import logo from "../assets/logo/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="footer__header__container">
        <img src={logo} alt="logo" className="logo" />
        <h1 className="footer__header">TrustedDevs</h1>
      </div>
      <p className="footer__description">The No. 1 developers online</p>
      <div className="footer__container">
        <FontAwesomeIcon icon={faGithub} />
        <FontAwesomeIcon icon={faTwitter} />
        <FontAwesomeIcon icon={faLinkedin} />
        <FontAwesomeIcon icon={faEnvelope} />
      </div>
      <div className="footer__line"></div>

      <p className="footer__copyright">Copyright © 2023 TrustedDevs</p>
    </footer>
  );
};

export default Footer;
