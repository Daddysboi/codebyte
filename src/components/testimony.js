import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import testimonialData from "../Data/testimonial.json";
import SectionHeader from "./SectionHeader";

// Import Swiper components and styles
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Testimony = () => {
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
          <FontAwesomeIcon
              key={i}
              icon={faStar}
              className={i < rating ? "star filled" : "star"}
          />
      );
    }
    return stars;
  };

  const swiperParams = {
    modules: [Navigation, Pagination, Autoplay],
    spaceBetween: 30,
    slidesPerView: 1,
    navigation: true,
    pagination: {
      clickable: true,
      dynamicBullets: true
    },
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    breakpoints: {
      640: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
    loop: true,
    grabCursor: true,
  };

  return (
      <section id="testimonials" className="section-padding">
        <div className="container">
          <SectionHeader
              subheader="REVIEWS"
              header="Testimonials"
              description="Hear what people are saying about my work"
              gradient="blue"
          />

          <div className="testimonials-swiper-container">
            <Swiper {...swiperParams} className="testimonials-swiper">
              {testimonialData.map((testimony, index) => (
                  <SwiperSlide key={index}>
                    <div className="testimonial-card">
                      <div className="testimonial-quote">
                        <FontAwesomeIcon icon={faQuoteLeft} className="quote-icon" />
                      </div>

                      <div className="testimonial-rating">
                        {renderStars(testimony.rating)}
                      </div>

                      <p className="testimonial-message">"{testimony.message}"</p>

                      <div className="testimonial-author">
                        <h4 className="testimonial-name">{testimony.name}</h4>
                        <p className="testimonial-location">{testimony.location}</p>
                      </div>

                      <div className="testimonial-decoration">
                        <div className="decoration-dot"></div>
                        <div className="decoration-dot"></div>
                        <div className="decoration-dot"></div>
                      </div>
                    </div>
                  </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className="testimonials-cta">
            <p>Want to be my next success story?</p>
            <button
                className="button-primary"
                onClick={() => {
                  document
                      .getElementById("contact__form")
                      .scrollIntoView({ behavior: "smooth" });
                }}
            >
              Start a Project
            </button>
          </div>
        </div>
      </section>
  );
};

export default Testimony;