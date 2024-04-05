import React from "react";
import logo from "../assets/logo/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faTwitter,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="contact__links__2">
        <div className="contact__header__container">
          <img src={logo} alt="logo" className="logo" />
          <h1 className="contact__header">Temitope Yusuf</h1>
        </div>
        <p className="contact__description">The No. 1 developer online</p>
        <p className="contact__description">
          <FontAwesomeIcon icon={faPhone} style={{ color: "#25D366" }} />{" "}
          <a href="https://wa.me/2348120685697" target="_blank">
            <FontAwesomeIcon icon={faWhatsapp} style={{ color: "#25D366" }} />
          </a>{" "}
          +234-803-157-4374
        </p>
        <div className="contact__container">
          <a
            href="https://github.com/daddysboi"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon icon={faGithub} style={{ color: "white" }} />
          </a>
          <a
            href="https://twitter.com/tweetbytems"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon icon={faTwitter} style={{ color: "#1DA1F2" }} />
          </a>
          <a
            href="https://www.instagram.com/dadysboi/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon icon={faInstagram} style={{ color: "#E4405F" }} />
          </a>
          <a
            href="mailto:temitopeahmedyusuf@gmail.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon icon={faEnvelope} style={{ color: "#EA4335" }} />
          </a>
        </div>
      </div>

      <div className="footer__line"></div>
      <p className="footer__copyright">Copyright © 2024 CodeBytes</p>
    </footer>
  );
};

export default Footer;
