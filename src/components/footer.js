import React from "react";
import logo from "../assets/logo/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faTwitter,
  faInstagram,
  faWhatsapp,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone, faHeart } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
      <footer id="footer" className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <div className="brand-info">
                <img src={logo} alt="Temitope Yusuf Logo" className="footer-logo" />
                <div className="brand-text">
                  <h3 className="brand-name">Temitope Yusuf</h3>
                  <p className="brand-title">Software Engineer</p>
                </div>
              </div>

              <p className="footer-description">
                Creating innovative solutions through code and creativity. Let's build something amazing together.
              </p>
            </div>

            <div className="footer-contact">
              <h4 className="footer-section-title">Get In Touch</h4>
              <div className="contact-info">
                <div className="contact-item">
                  <FontAwesomeIcon icon={faPhone} className="contact-icon" />
                  <a href="tel:+2348031574374" className="contact-link">
                    +234-803-157-4374
                  </a>
                </div>
                <div className="contact-item">
                  <FontAwesomeIcon icon={faWhatsapp} className="contact-icon" />
                  <a
                      href="https://wa.me/2348031574374"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact-link"
                  >
                    WhatsApp Chat
                  </a>
                </div>
                <div className="contact-item">
                  <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
                  <a
                      href="mailto:temitopeahmedyusuf@gmail.com"
                      className="contact-link"
                  >
                    temitopeahmedyusuf@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="footer-social">
              <h4 className="footer-section-title">Follow Me</h4>
              <div className="social-links">
                <a
                    href="https://github.com/daddysboi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    aria-label="GitHub"
                >
                  <FontAwesomeIcon icon={faGithub} />
                </a>
                <a
                    href="https://twitter.com/tweetbytems"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    aria-label="Twitter"
                >
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a
                    href="https://www.instagram.com/dadysboi/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    aria-label="Instagram"
                >
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a
                    href="https://linkedin.com/in/temitope-ahmed-yusuf/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    aria-label="LinkedIn"
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
              </div>
            </div>
          </div>

          <div className="footer-divider"></div>

          <div className="footer-bottom">
            <p className="copyright">
              © {currentYear} CodeBytes. Made with <FontAwesomeIcon icon={faHeart} className="heart-icon" /> by Temitope Yusuf
            </p>
          </div>
        </div>
      </footer>
  );
};

export default Footer;