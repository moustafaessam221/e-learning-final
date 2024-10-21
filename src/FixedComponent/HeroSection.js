import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
function HeroSection() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/price");
  };

  return (
    <Container className="home-banner mt-5">
      <Row className="text-center">
        <Col>
          <h1 className="home-title">Your Space to Learn</h1>
          <p className="home-description fs-5 mt-3 w-75 mx-auto">
            Choose from over 3000+ world class courses with job-ready certified
            programs in your subscription.
          </p>
          <Button
            onClick={handleButtonClick}
            className="btn-lg mt-3"
            variant="primary"
          >
            + Subscribe Now
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default HeroSection;
