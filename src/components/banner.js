import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faExplosion, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Temitope_Yusuf_Cv from "../assets/files/Temitope Yusuf.pdf";

const Banner = () => {
  return (
      <div id="banner" className="banner-container">
        <div className="banner-content" data-aos="fade-down" data-aos-delay="1500" data-aos-offset="200">
          <button className="banner__welcome__btn">
            <div>
              <FontAwesomeIcon className="icon" icon={faExplosion} />
            </div>
            Update: Building an AI Model
          </button>

          <h1 className="banner__header">
            Get an <span className="gradient-text">Elite</span> developer
            <br />
            on your team
          </h1>

          <p className="banner__description">
            Engineering the Future, Together
          </p>

          <div className="button-container">
            <button
                className="button-primary"
                onClick={() => {
                  document
                      .getElementById("contact__form")
                      .scrollIntoView({ behavior: "smooth" });
                }}
            >
              Contact Me
              <FontAwesomeIcon icon={faArrowRight} className="btn-icon" />
            </button>

            <a href={Temitope_Yusuf_Cv} download="Temitope_Yusuf_Cv" className="button-link-wrapper">
              <button className="button-secondary">
                Download CV
                <FontAwesomeIcon className="download__icon" icon={faDownload} />
              </button>
            </a>
          </div>

          <div className="banner__rating">
            <div className="rating-badge">
              <p className="review__star">4.99</p>
            </div>
            <div className="review__tip">
              <p className="stars">★★★★★</p>
              <p className="review__desc">
                <span>reviews</span>
              </p>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Banner;