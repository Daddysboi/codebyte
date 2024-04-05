import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faExplosion } from "@fortawesome/free-solid-svg-icons";
import Temitope_Yusuf_Cv from "../assets/files/Temitope Yusuf.pdf";
import Aos from "aos";

const Banner = () => {
  return (
    <div id="banner">
      <div>
        <button className="banner__welcome__btn">
          <div>
            <FontAwesomeIcon className="icon" icon={faExplosion} />
          </div>
          Update: Working on web5 Apps
        </button>
        <h1 data-aos="fade-down" className="banner__header">
          Get a<span> world class</span> <br />
          developer on your team
        </h1>
        <p className="banner__description">
          ...Innovate, illuminate, inspire, the future starts with a good dev
        </p>
        <div className="button-container">
          <button
            className="button-hire-left"
            onClick={() => {
              document
                .getElementById("contact__form")
                .scrollIntoView({ behavior: "smooth" });
            }}
          >
            Contact Me
          </button>
          <a href={Temitope_Yusuf_Cv} download="Temitope_Yusuf_Cv">
            <button className="button-hire-right">
              MY CV
              <FontAwesomeIcon className="download__icon" icon={faDownload} />
            </button>
          </a>
        </div>
        <div className="banner__rating">
          <p className="review__star">4.99</p>
          <div className="review__tip">
            <p className="stars">&#9733;&#9733;&#9733;&#9733;&#9733; </p>
            <p className="review__desc">
              reviews on<span> Fiverr</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
