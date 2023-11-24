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
      <div className="footer__line"></div>
      <p className="footer__copyright">Copyright © 2023 TrustedDevs</p>
    </footer>
  );
};

export default Footer;
