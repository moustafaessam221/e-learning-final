import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaMoneyBillAlt, FaUsers, FaCertificate } from "react-icons/fa";
import "../Style.css"; 

function InvestComponent() {
  return (
    <Container className="invest-container text-center py-5">
     
      <Row className="mt-5">
      <h2 className="invest-heading mb-5">
        Invest in your career with EduSpace Plus
      </h2>
        <Col xs={12} sm={6} md={4} className="mb-4">
          <FaMoneyBillAlt className="invest-icon mb-3" />
          <h4 className="invest-title">Save Money</h4>
          <p className="invest-description">Spend less money on your learning.</p>
        </Col>
        <Col xs={12} sm={6} md={4} className="mb-4">
          <FaUsers className="invest-icon mb-3" />
          <h4 className="invest-title">Countless Classes</h4>
          <p className="invest-description">Thousands of creative classes. Beginner to pro.</p>
        </Col>
        <Col xs={12} sm={6} md={4} className="mb-4">
          <FaCertificate className="invest-icon mb-3" />
          <h4 className="invest-title">Certificates</h4>
          <p className="invest-description">
            Earn a certificate for every completed learning program.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default InvestComponent;
