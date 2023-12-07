import React, { useRef } from "react";
import logo from "../assets/logo/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import emailjs from "@emailjs/browser";
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_3wmm7yr",
        "template_2ik1cmd",
        form.current,
        "Zo_tLupx8aK5_BDna"
      )
      .then(
        (result) => {
          alert("Email Sent Successfully");
          e.target.reset();
        },
        (error) => {
          console.error("Failed to send email:", error);
          alert("Failed to send email. Please try again.");
        }
      );
  };
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
          <p className="contact__description">The No. 1 developer online</p>
          <div className="contact__container">
            <a
              href="https://github.com/daddysboi"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a
              href="https://twitter.com/tweetbytems"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a
              href="https://www.instagram.com/dadysboi/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a
              href="mailto:temitopeahmedyusuf@gmail.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
          </div>
        </div>
      </div>
      <div className="form__action__container">
        <form onSubmit={sendEmail} ref={form}>
          <input type="text" placeholder="Full Name" name="your_name" />
          <input type="text" placeholder="email" name="your_email" />
          <textarea
            cols="30"
            rows="10"
            placeholder="Your Message"
            name="message"
          ></textarea>
          <button className="submit__btn" type="submit" value="send">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
