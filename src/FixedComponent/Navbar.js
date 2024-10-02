import React from "react";
import { Container, Nav, Navbar, Form, Button } from "react-bootstrap";
import { FaShoppingCart, FaUser, FaSearch } from "react-icons/fa"; // إضافة أيقونة البحث
import { Link } from "react-router-dom";
import EduSpaceLogo from "../images/EduSpaceLogo.png"; // استيراد الشعار

const Navigationbar = () => {
  return (
    <Navbar bg="primary" variant="dark" expand="lg" className="py-3">
      <Container fluid>
        <Link to="/" className="d-flex align-items-center text-white text-decoration-none">
          <img src={EduSpaceLogo} alt="EduSpace Logo" style={{ height: '40px', marginRight: '10px' }} />
          <Navbar.Brand style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
            EduSpace
          </Navbar.Brand>
        </Link>

        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto">
            <Nav.Link className="text-white" as={Link} to="/">Home</Nav.Link>
            <Nav.Link className="text-white" as={Link} to="/about">About</Nav.Link>
            <Nav.Link className="text-white" as={Link} to="/courses">Courses</Nav.Link>
            <Nav.Link className="text-white" as={Link} to="/profile">Profile</Nav.Link>
            <Nav.Link className="text-white" as={Link} to="/contact">Contact</Nav.Link>
          </Nav>

          <Form className="d-flex align-items-center" style={{ width: '100%', maxWidth: '300px' }}>
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2 rounded-pill"
              aria-label="Search"
              style={{ border: 'none' }} // إلغاء الحدود لتحسين الشكل
            />
            <Button variant="outline-light" className="rounded-pill">
              <FaSearch />
            </Button>
          </Form>

          <Nav>
            <Nav.Link as={Link} to="/cart" className="text-white mx-2">
              <FaShoppingCart />
            </Nav.Link>
            <Nav.Link as={Link} to="/login" className="text-white mx-2">
              <FaUser />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigationbar;