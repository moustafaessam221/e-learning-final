import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaMoneyBillAlt, FaUsers, FaCertificate } from "react-icons/fa"; // You can replace these with your icons or use react-icons

function InvestComponent() {
  return (
    <Container className="text-center py-5">
      <h2 className="mb-4">Invest in your career with EduSpace Plus</h2>
      <Row>
        <Col md={4} className="mb-4">
          <FaMoneyBillAlt size={50} className="mb-3" />
          <h4>Save Money</h4>
          <p>Spend less money on your learning.</p>
        </Col>
        <Col md={4} className="mb-4">
          <FaUsers size={50} className="mb-3" />
          <h4>Countless Classes</h4>
          <p>Thousands of creative classes. Beginner to pro.</p>
        </Col>
        <Col md={4} className="mb-4">
          <FaCertificate size={50} className="mb-3" />
          <h4>Certificates</h4>
          <p>Earn a certificate for every completed learning program.</p>
        </Col>
      </Row>
    </Container>
  );
}

export default InvestComponent;
