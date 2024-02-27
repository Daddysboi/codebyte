import React, { useRef, useState, useEffect } from "react";
import logo from "../assets/logo/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faTwitter,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import emailjs from "@emailjs/browser";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";
import ReCAPTCHA from "react-google-recaptcha";
import axios from "axios";
// import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });
  const [errors, setErrors] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });
  const [userAlert, setUserAlert] = useState("");
  const form = useRef();
  const [isVerified, setVerified] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     setIsLoading(true);
  //     try {
  //       const response = await axios.post("/.netlify/functions/api", {
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //       });

  //       if (!response.ok) {
  //         throw new Error(`API request failed with status ${response.status}`);
  //       }

  //       const result = await response.json();
  //       console.log(result);
  //       // Handle the result as needed
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };

  //   fetchData();
  // }, [formData]);

  const handleVerification = (response) => {
    if (response) {
      setVerified(true);
    }
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    if (!formData.user_name.trim()) {
      newErrors.user_name = "Name is required";
      isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (
      !formData.user_email.trim() ||
      !emailRegex.test(formData.user_email.trim())
    ) {
      newErrors.user_email = "Valid email is required";
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (
      formData.user_email.trim().toLowerCase() ===
      "temitopeahmedyusuf@gmail.com"
    ) {
      setUserAlert(
        <div>
          <FontAwesomeIcon icon={faTimes} /> Please provide a valid recipient
          email address. 😞
        </div>
      );
      return;
    }
    emailjs
      .sendForm(
        "service_3wmm7yr",
        "template_2ik1cmd",
        form.current,
        "Zo_tLupx8aK5_BDna",
        { ga_measurement_id: "G-1WPKCVQ0HX" }
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

    if (isVerified) {
      if (validateForm()) {
        sendEmail(e);
      } else {
        setUserAlert(
          <div>
            <FontAwesomeIcon icon={faTimes} /> Please fill in all required
            fields.
          </div>
        );
      }
    } else {
      setUserAlert(
        <div>
          <FontAwesomeIcon icon={faTimes} /> Please complete the reCAPTCHA
          challenge.
        </div>
      );
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
          <span data-aos="fade-up">Contact Me</span>
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
          <p className="contact__description">
            <FontAwesomeIcon icon={faPhone} style={{ color: "#25D366" }} />{" "}
            <a
              href="https://wa.me/2348120685697"
              target="_blank"
              rel="noopener noreferrer"
            >
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
              <FontAwesomeIcon
                icon={faInstagram}
                style={{ color: "#E4405F" }}
              />
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
      </div>{" "}
      <div className="form__action__container">
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <form onSubmit={handleSubmit} ref={form}>
            <span className="Validation__alert">{userAlert}</span>
            <input
              type="text"
              placeholder="Full Name"
              onChange={handleInputChange}
              name="user_name"
              className={errors.user_name ? "error-field" : ""}
            />
            <span className="error">{errors.user_name}</span>

            <input
              type="text"
              placeholder="Email"
              onChange={handleInputChange}
              name="user_email"
              className={errors.user_email ? "error-field" : ""}
            />
            <span className="error">{errors.user_email}</span>

            <textarea
              cols="30"
              rows="10"
              placeholder="Your Message"
              name="message"
              onChange={handleInputChange}
              className={errors.message ? "error-field" : ""}
            />
            <span className="error">{errors.message}</span>
            <ReCAPTCHA
              sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}
              onChange={(response) => handleVerification(response)}
            />
            <button className="submit__btn" type="submit" value="send">
              Submit
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Contact;
