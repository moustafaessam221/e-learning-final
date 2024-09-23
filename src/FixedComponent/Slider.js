import React from "react";
import Carousel from "react-bootstrap/Carousel";
import CaroImage2 from "../images/CaroImage2.jpg"
import CaroImage from "../images/CaroImage.jpg"
import CaroImage4 from "../images/CaroImage4.jpg"


function CarouselComponent() {
  return (
    <div className="p-3" style={{ display: "block", width: "80%", margin: "auto", maxHeight: "600px"}}>
      <Carousel interval={1500}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={CaroImage}
            alt="Image Two"
            style={{ height: "400px", objectFit: "cover" }}
          />
          <Carousel.Caption>
            <h3>Label for second slide</h3>
            <p>Sample Text for Image Two</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={CaroImage2}
            alt="Image One"
            style={{ height: "400px", objectFit: "cover" }}
          />
          <Carousel.Caption>
            <h3>Label for first slide</h3>
            <p>Sample Text for Image One</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={CaroImage4}
            alt="Image One"
            style={{ height: "400px", objectFit: "cover" }}
          />
          <Carousel.Caption>
            <h3>Label for first slide</h3>
            <p>Sample Text for Image One</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default CarouselComponent;