import React, { useRef, useState } from "react";
import logo from "../assets/logo/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import emailjs from "@emailjs/browser";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  const [formData, setFormData] = useState({
    your_name: "",
    your_email: "",
    message: "",
  });
  const [errors, setErrors] = useState({
    your_name: "",
    your_email: "",
    message: "",
  });
  const [userAlert, setUserAlert] = useState("");
  const form = useRef();

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    if (!formData.your_name.trim()) {
      newErrors.your_name = "Name is required";
      isValid = false;
    }

    if (!formData.your_email.trim()) {
      newErrors.your_email = "Email is required";
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };
  // ...

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
          setUserAlert(
            <div>
              <FontAwesomeIcon icon={faCheck} /> Email Sent Successfully 😄
            </div>
          );
          e.target.reset();
        },
        (error) => {
          setUserAlert(
            <div>
              <FontAwesomeIcon icon={faTimes} /> Failed to send email. Please
              try again. 😞
            </div>
          );
        }
      );
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      sendEmail(e);
    }
  };

  return (
    <div id="contact__form">
      <div className="form__container">
        <div className="form__subheader__container">
          <h2 className="form__subheader">Get in Touch</h2>
          <div className="line__out"></div>
        </div>

        <h1 className="form__header">
          <span>Contact Me</span>
        </h1>
        <p className="form__description">
          .....Please, leave me a message on work opportunities
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
      </div>{" "}
      <div className="form__action__container">
        <form onSubmit={handleSubmit} ref={form}>
          <span className="Validation__alert">{userAlert}</span>
          <input
            type="text"
            placeholder="Full Name"
            onChange={handleInputChange}
            name="your_name"
            className={errors.your_name ? "error-field" : ""}
          />
          <span className="error">{errors.your_name}</span>

          <input
            type="text"
            placeholder="Email"
            onChange={handleInputChange}
            name="your_email"
            className={errors.your_email ? "error-field" : ""}
          />
          <span className="error">{errors.your_email}</span>

          <textarea
            cols="30"
            rows="10"
            placeholder="Your Message"
            name="message"
            onChange={handleInputChange}
            className={errors.message ? "error-field" : ""}
          />
          <span className="error">{errors.message}</span>

          <button className="submit__btn" type="submit" value="send">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
