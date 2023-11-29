import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import testimonialData from "../Data/testimonial.json";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

const renderStars = (rating) => {
  const starCount = Math.round(rating);
  const stars = [];

  for (let i = 0; i < starCount; i++) {
    stars.push(<FontAwesomeIcon key={i} icon={faStar} />);
  }

  return stars;
};

const Testimony = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 2.1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    speed: 15000,
    autoplaySpeed: 15000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1.2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1.2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div id="testimony">
      <div className="testimony__header_section">
        <div className="testimony__subheader__container">
          <div className="line__in"></div>
          <h2 className="testimony__subheader">REVIEWS</h2>
          <div className="line__out"></div>
        </div>

        <h1 className="testimony__header">
          <span>TESTIMONIES</span>
        </h1>
        <p className="testimony__description">
          .....hear what people are saying
        </p>
      </div>
      <div className="testimonial__carousel__container">
        <Slider {...settings}>
          {testimonialData.map((testimony, index) => (
            <div className="testimonial__card" key={index}>
              <div className="testimonial__rating">
                {renderStars(testimony.rating)}
              </div>
              <p className="testimonial__testimony">{testimony.message}</p>
              <h1 className="testimonial__testifier">{testimony.name}</h1>
              <p className="testimonial__location">{testimony.location}</p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimony;
