import React from "react";
import logo from "../assets/logo/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  return (
    <div id="contact__form">
      <div className="form__container">
        <div className="form__subheader__container">
          {/* <div className="line__in"></div> */}
          <h2 className="form__subheader">Get in Touch</h2>
          <div className="line__out"></div>
        </div>

        <h1 className="form__header">
          <span>Contact Me</span>
        </h1>
        <p className="form__description">
          .....Please, fill in the form below to leave me a message on work
          opportunities
        </p>
        <div className="contact__links">
          <div className="contact__header__container">
            <img src={logo} alt="logo" className="logo" />
            <h1 className="contact__header">CodeBytes</h1>
          </div>
          <p className="contact__description">The No. 1 developers online</p>
          <div className="contact__container">
            <a href="https://github.com/daddysboi" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a
              href="https://twitter.com/tweetsbytems"
              rel="noopener noreferrer"
            >
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
      </div>
      <div className="form__action__container">
        <form action="">
          <input type="text" placeholder="Full Name" />
          <input type="text" placeholder="email" />
          <textarea cols="30" rows="10" placeholder="Your Message"></textarea>
          <button className="submit__btn" type="submit" value="send">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
