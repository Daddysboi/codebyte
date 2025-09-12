import React, { useRef, useState } from "react";
import logo from "../assets/logo/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faTwitter,
  faInstagram,
  faWhatsapp,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone, faPaperPlane, faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";
import SectionHeader from "./SectionHeader";

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
  const [isVerified, setVerified] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const form = useRef();

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
    if (!formData.user_email.trim() || !emailRegex.test(formData.user_email.trim())) {
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
    setIsLoading(true);

    if (formData.user_email.trim().toLowerCase() === "temitopeahmedyusuf@gmail.com") {
      setUserAlert(
          <div className="alert error">
            <FontAwesomeIcon icon={faTimes} /> Please provide a valid email address.
          </div>
      );
      setIsLoading(false);
      return;
    }

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
                  <div className="alert success">
                    <FontAwesomeIcon icon={faCheck} /> Message sent successfully!
                  </div>
              );
              e.target.reset();
              setVerified(false);
              setIsLoading(false);
            },
            (error) => {
              setUserAlert(
                  <div className="alert error">
                    <FontAwesomeIcon icon={faTimes} /> Failed to send message. Please try again.
                  </div>
              );
              setIsLoading(false);
            }
        );
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // Clear error when user starts typing
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: "" });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isVerified) {
      setUserAlert(
          <div className="alert error">
            <FontAwesomeIcon icon={faTimes} /> Please complete the reCAPTCHA challenge.
          </div>
      );
      return;
    }

    if (validateForm()) {
      sendEmail(e);
    }
  };

  return (
      <section id="contact__form" className="section-padding">
        <div className="container">
          <SectionHeader
              subheader="GET IN TOUCH"
              header="Contact Me"
              description="Ready to start your next project? Let's discuss how I can help bring your ideas to life."
              gradient="green"
          />

          <div className="contact-content">
            <div className="contact-info">
              <div className="contact-card">
                <div className="contact-header">
                  <img src={logo} alt="logo" className="logo" />
                  <h3>Temitope Yusuf</h3>
                  <p className="role">Software Engineer</p>
                </div>

                <div className="contact-details">
                  <div className="contact-item">
                    <FontAwesomeIcon icon={faPhone} className="contact-icon" />
                    <div>
                      <p className="contact-label">Phone</p>
                      <a href="tel:+2348031574374" className="contact-value">
                        +234-803-157-4374
                      </a>
                    </div>
                  </div>

                  <div className="contact-item">
                    <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
                    <div>
                      <p className="contact-label">Email</p>
                      <a href="mailto:temitopeahmedyusuf@gmail.com" className="contact-value">
                        temitopeahmedyusuf@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="contact-item">
                    <FontAwesomeIcon icon={faWhatsapp} className="contact-icon" />
                    <div>
                      <p className="contact-label">WhatsApp</p>
                      <a
                          href="https://wa.me/2348031574374"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="contact-value"
                      >
                        Send Message
                      </a>
                    </div>
                  </div>
                </div>

                <div className="social-links">
                  <h4>Follow Me</h4>
                  <div className="social-icons">
                    <a href="https://github.com/daddysboi" target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon icon={faGithub} />
                    </a>
                    <a href="https://twitter.com/tweetbytems" target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon icon={faTwitter} />
                    </a>
                    <a href="https://www.instagram.com/dadysboi/" target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon icon={faInstagram} />
                    </a>
                    <a href="https://linkedin.com/in/temitope-ahmed-yusuf/" target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-form-container">
              <div className="form-wrapper">
                {userAlert && <div className="form-alert">{userAlert}</div>}

                <form onSubmit={handleSubmit} ref={form} className="contact-form">
                  <div className="form-group">
                    <label htmlFor="user_name">Full Name</label>
                    <input
                        type="text"
                        id="user_name"
                        name="user_name"
                        placeholder="Enter your full name"
                        onChange={handleInputChange}
                        className={errors.user_name ? "error" : ""}
                    />
                    {errors.user_name && <span className="error-message">{errors.user_name}</span>}
                  </div>

                  <div className="form-group">
                    <label htmlFor="user_email">Email Address</label>
                    <input
                        type="email"
                        id="user_email"
                        name="user_email"
                        placeholder="Enter your email address"
                        onChange={handleInputChange}
                        className={errors.user_email ? "error" : ""}
                    />
                    {errors.user_email && <span className="error-message">{errors.user_email}</span>}
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        rows="5"
                        placeholder="Tell me about your project..."
                        onChange={handleInputChange}
                        className={errors.message ? "error" : ""}
                    ></textarea>
                    {errors.message && <span className="error-message">{errors.message}</span>}
                  </div>

                  <div className="form-group">
                    <ReCAPTCHA
                        sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}
                        onChange={handleVerification}
                    />
                  </div>

                  <button
                      type="submit"
                      className="submit-button"
                      disabled={isLoading}
                  >
                    {isLoading ? (
                        <span>Sending...</span>
                    ) : (
                        <>
                          <FontAwesomeIcon icon={faPaperPlane} />
                          Send Message
                        </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};

export default Contact;