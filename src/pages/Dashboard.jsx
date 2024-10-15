import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const AdminDashboard = () => {
  return (
    <>
      <Container style={{ height: "50vh" }}>
        {/* Add your admin dashboard content here */}
        <Row className="flex justify-content-center align-items-center my-5">
          <Col>
            <h1 className="text-center mt-5">Admin Dashboard</h1>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AdminDashboard;
