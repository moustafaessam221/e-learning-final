import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const Testimonials = () => {
  return (
    <Container className="mt-5">
      <Row className="d-flex justify-content-center">
        <h2 className="text-center mb-4 invest-heading mt-5">
          Why Students Love EduSpace
        </h2>
        <Col md={5} className="mb-5 mt-3">
          <Card className="text-center p-3 shadow">
            <Card.Body>
              <Card.Text>
                "EduSpace offers a flexible learning environment that allows me
                to study at my own pace."
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={5} className="mb-5 mt-3">
          <Card className="text-center p-3 shadow">
            <Card.Body>
              <Card.Text>
                "The interactive features and resources available make learning
                fun and engaging!"
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Testimonials;
