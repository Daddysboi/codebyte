import React, { useState, useEffect } from "react";
import "../css/style.css";
import testimonialData from "../Data/testimonial.json";

const Testimony = () => {
  const [testimonies, setTestimonies] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setTestimonies(testimonialData);
  }, []); // Empty dependency array means this effect runs once after initial render

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonies.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonies]);

  return (
    <div id="testimony" className="testimony-container">
      <div className="testimony__subheader__container">
        {/* ... Subheader and other elements ... */}
      </div>

      <div className="my__testimony">
        {testimonies.map((testimony, index) => (
          <div
            key={index}
            className={`testimonial-card ${
              index >= currentIndex && index < currentIndex + 4 ? "active" : ""
            }`}
          >
            <p className="testimonial-card-testimony">{testimony.message}</p>
            <div className="testimonial-card-profile">
              <div className="testimonial-card-bio">
                <h1 className="testimonial-card-bio-testifier">
                  {testimony.name}
                </h1>
                <p className="testimonial-card-bio-testifier-skill">
                  {testimony.location}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimony;
