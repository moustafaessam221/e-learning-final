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
          <h4 className="invest-title fs-2">Save Money</h4>
          <p className="invest-description fs-5">Spend less money on your learning.</p>
        </Col>
        <Col xs={12} sm={6} md={4} className="mb-4">
          <FaUsers className="invest-icon mb-3" />
          <h4 className="invest-title fs-2">Countless Classes</h4>
          <p className="invest-description fs-5">Thousands of creative classes. Beginner to pro.</p>
        </Col>
        <Col xs={12} sm={6} md={4} className="mb-4">
          <FaCertificate className="invest-icon mb-3"/>
          <h4 className="invest-title fs-2">Certificates</h4>
          <p className="invest-description fs-5">
            Earn a certificate for every completed learning program.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default InvestComponent;
