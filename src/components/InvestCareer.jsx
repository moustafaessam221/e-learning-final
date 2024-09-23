import React from 'react';
import { Row, Col } from 'react-bootstrap';

const InvestCareer = () => {
  return (
    <section className="eduspace-plus my-4">
      <h2>Invest in your career with EduSpace Plus</h2>
      <Row>
        <Col md={4}>
          <div className="benefit-placeholder">Save Money</div>
        </Col>
        <Col md={4}>
          <div className="benefit-placeholder">Countless Choices</div>
        </Col>
        <Col md={4}>
          <div className="benefit-placeholder">Certificates</div>
        </Col>
      </Row>
    </section>
  );
};

export default InvestCareer;
