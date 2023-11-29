import React from "react";
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
      <div className="contact__links__2">
        <div className="contact__header__container">
          <img src={logo} alt="logo" className="logo" />
          <h1 className="contact__header">TrustedDevs</h1>
        </div>
        <p className="contact__description">The No. 1 developers online</p>
        <div className="contact__container">
          <a
            href="https://github.com/daddysboi"
            target="_blank"
            rel="noopener nonreferrer"
          >
            <div className="github__icon">
              <FontAwesomeIcon icon={faGithub} />
            </div>
          </a>

          <a href="https://twitter.com/tweetsbytems" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="https://linkedin.com" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a
            href="mailto:temitopeahmedyusuf@gmail.com"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
        </div>
      </div>

      <div className="footer__line"></div>
      <p className="footer__copyright">Copyright © 2023 CodeBytes</p>
    </footer>
  );
};

export default Footer;
