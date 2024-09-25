import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Navbar, Nav, Container } from "react-bootstrap";
import { FaUser, FaShoppingCart } from "react-icons/fa"; 
import SearchBar from "./Search";

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
          <Nav className="ms-auto my-2 my-lg-0" navbarScroll>
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

          <div className="d-flex justify-content-center mx-auto">
            <SearchBar />
          </div>

          <LinkContainer to="/cart">
            <Nav.Link className="text-white mx-2" style={{ transition: "color 0.3s ease" }}>
              <FaShoppingCart /> 
            </Nav.Link>
          </LinkContainer>

          <LinkContainer to="/login">
            <Nav.Link className="text-white mx-4" style={{ transition: "color 0.3s ease" }}>
              <FaUser /> 
            </Nav.Link>
          </LinkContainer>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigationbar;
