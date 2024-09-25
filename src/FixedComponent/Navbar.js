import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Navbar, Nav, Container, Form, FormControl, Button } from "react-bootstrap";
import { FaUser, FaShoppingCart, FaHeart, FaBell, FaSearch } from "react-icons/fa"; 

const Navigationbar = () => {
  return (
    <Navbar bg="primary" variant="dark" expand="lg" className="py-3">
      <Container fluid>
        <LinkContainer to="/">
          <Navbar.Brand style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
            EduSpace
          </Navbar.Brand>
        </LinkContainer>

        <Navbar.Toggle aria-controls="navbarScroll" />

        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" navbarScroll>
            <LinkContainer to="/">
              <Nav.Link className="text-white" style={{ transition: "color 0.3s ease" }}>
                Home
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/about">
              <Nav.Link className="text-white" style={{ transition: "color 0.3s ease" }}>
                About
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/courses">
              <Nav.Link className="text-white" style={{ transition: "color 0.3s ease" }}>
                Courses
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/profile">
              <Nav.Link className="text-white" style={{ transition: "color 0.3s ease" }}>
                Profile
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/contact">
              <Nav.Link className="text-white" style={{ transition: "color 0.3s ease" }}>
                Contact
              </Nav.Link>
            </LinkContainer>
          </Nav>

          <Form className="d-flex mx-auto" style={{ maxWidth: "300px" }}>
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="light" style={{ backgroundColor: "#f8f9fa", border: "none" }}>
              <FaSearch />
            </Button>
          </Form>

          <Nav className="d-flex align-items-center">
            <LinkContainer to="/wishlist">
              <Nav.Link className="text-white mx-3" style={{ transition: "color 0.3s ease" }}>
                <FaHeart />
              </Nav.Link>
            </LinkContainer>

            <LinkContainer to="/notifications">
              <Nav.Link className="text-white mx-3" style={{ transition: "color 0.3s ease" }}>
                <FaBell />
              </Nav.Link>
            </LinkContainer>

            <LinkContainer to="/cart">
              <Nav.Link className="text-white mx-3" style={{ transition: "color 0.3s ease" }}>
                <FaShoppingCart />
              </Nav.Link>
            </LinkContainer>

            <LinkContainer to="/login">
              <Nav.Link className="text-white mx-3" style={{ transition: "color 0.3s ease" }}>
                <FaUser />
              </Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigationbar;
