import React from 'react';
import { Row, Col } from 'react-bootstrap';

const Testimonials = () => {
  return (
    <section className="why-students-love-eduspace my-4">
      <h2>Why Students Love EduSpace</h2>
      <Row>
        <Col md={6}>
          <div className="testimonial-placeholder">Testimonial 1</div>
        </Col>
        <Col md={6}>
          <div className="testimonial-placeholder">Testimonial 2</div>
        </Col>
      </Row>
    </section>
  );
};

export default Testimonials;
