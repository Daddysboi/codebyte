import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
      <footer id="footer" className="footer">
        <div className="container">
          <div className="footer-bottom">
            <p className="copyright">
              © {currentYear} CodeBytes. By Temitope Yusuf
            </p>
          </div>
        </div>
      </footer>
  );
};

export default Footer;