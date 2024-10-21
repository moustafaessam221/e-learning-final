import React from "react";
import Carousel from "react-bootstrap/Carousel";
import CaroImage2 from "../images/AIBanner.jpg";
import CaroImage from "../images/MarketingBanner.jpg";
import CaroImage4 from "../images/FrontEndBanner.jpg";
import "./Slider.css";

function CarouselComponent() {
  return (
    <div className="custom-slider">
      <Carousel interval={1500}>
        <Carousel.Item>
          <img
            className="d-block w-100 custom-slider-image"
            alt=""
            src={CaroImage}
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100 custom-slider-image"
            src={CaroImage2}
            alt=""
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 custom-slider-image"
            src={CaroImage4}
            alt=""
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default CarouselComponent;
