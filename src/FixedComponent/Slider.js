import React from "react";
import Carousel from "react-bootstrap/Carousel";
import CaroImage2 from "../images/AIBanner.jpg";
import CaroImage from "../images/MarketingBanner.jpg";
import CaroImage4 from "../images/FrontEndBanner.jpg";

function CarouselComponent() {
  return (
    <div
      className=""
      style={{
        display: "block",
        width: "100vw",
        margin: "auto",
        maxHeight: "600px",
      }}
    >
      <Carousel interval={1500}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            alt=""
            src={CaroImage}
            style={{ objectFit: "cover", maxHeight: "600px"}}
          />
          {/* <Carousel.Caption>
            <h3>Label for second slide</h3>
            <p>Sample Text for Image Two</p>
          </Carousel.Caption> */}
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={CaroImage2}
            alt=""
            style={{ objectFit: "cover", maxHeight: "600px"}}
          />
          {/* <Carousel.Caption>
            <h3>Label for first slide</h3>
            <p>Sample Text for Image One</p>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={CaroImage4}
            alt=""
            style={{objectFit: "cover", maxHeight: "600px"}}
          />
          {/* <Carousel.Caption>
            <h3>Label for first slide</h3>
            <p>Sample Text for Image One</p>
          </Carousel.Caption> */}
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default CarouselComponent;
