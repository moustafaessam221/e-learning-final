import React from "react";
import {
  Container,
  Nav,
  Navbar
} from "react-bootstrap";
import {
  FaShoppingCart,
  FaUser
} from "react-icons/fa";
import { Link } from "react-router-dom";
import SearchBar from './Search.js';

const Navigationbar = () => {
  return (
    <Navbar bg="primary" variant="dark" expand="lg" className="py-3">
      <Container fluid>
        <Container as={Link} to="/">
          <Navbar.Brand style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
            EduSpace
          </Navbar.Brand>
        </Container>

        <Navbar.Toggle aria-controls="navbarScroll" />

        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" navbarScroll>
            <Container>
              <Nav.Link
                className="text-white"
                as={Link}
                to="/"
                style={{ transition: "color 0.3s ease" }}
              >
                Home
              </Nav.Link>
            </Container>
            <Container as={Link} to="/about">
              <Nav.Link
                className="text-white"
                as={Link}
                to="/about"
                style={{ transition: "color 0.3s ease" }}
              >
                About
              </Nav.Link>
            </Container>
            <Container>
              <Nav.Link
                className="text-white"
                as={Link}
                to="/courses"
                style={{ transition: "color 0.3s ease" }}
              >
                Courses
              </Nav.Link>
            </Container>
            <Container>
              <Nav.Link
                className="text-white"
                as={Link}
                to="/profile"
                style={{ transition: "color 0.3s ease" }}
              >
                Profile
              </Nav.Link>
            </Container>
            <Container>
              <Nav.Link
                as={Link}
                to="/contact"
                className="text-white"
                style={{ transition: "color 0.3s ease" }}
              >
                Contact
              </Nav.Link>
            </Container>
          </Nav>

          <SearchBar />
          <Nav className="d-flex align-items-center">
            <Container >
              <Nav.Link
                as={Link}
                to="/cart"
                className="text-white mx-3"
                style={{ transition: "color 0.3s ease" }}
              >
                <FaShoppingCart />
              </Nav.Link>
            </Container>

            <Container>
              <Nav.Link
                as={Link}
                 to="/login"
                className="text-white mx-3"
                style={{ transition: "color 0.3s ease" }}
              >
                <FaUser />
              </Nav.Link>
            </Container>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigationbar;
