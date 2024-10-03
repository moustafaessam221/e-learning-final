import { React, useContext } from "react";
import { Container, Nav, Navbar, Form, Button } from "react-bootstrap";
import { FaShoppingCart, FaUser, FaSearch } from "react-icons/fa"; // إضافة أيقونة البحث
import { Link } from "react-router-dom";
import EduSpaceLogo from "../images/EduSpaceLogo.png"; // استيراد الشعار
import { UsersContext } from "../store/UsersContext";
import Search from "./Search";

const Navigationbar = () => {
  const { user, logout } = useContext(UsersContext);
  return (
    <Navbar bg="primary" variant="dark" expand="lg" className="py-3">
      <Container fluid>
        <Link
          to="/"
          className="d-flex align-items-center text-white text-decoration-none"
        >
          <img
            src={EduSpaceLogo}
            alt="EduSpace Logo"
            style={{ height: "40px", marginRight: "10px" }}
          />
          <Navbar.Brand style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
            EduSpace
          </Navbar.Brand>
        </Link>

        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto">
            <Nav.Link className="text-white" as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link className="text-white" as={Link} to="/about">
              About
            </Nav.Link>
            <Nav.Link className="text-white" as={Link} to="/courses">
              Courses
            </Nav.Link>
            <Nav.Link className="text-white" as={Link} to="/contact">
              Contact
            </Nav.Link>
          </Nav>

          <Search />

          <Nav>
            <Nav.Link as={Link} to="/cart" className="text-white mx-2">
              <FaShoppingCart />
            </Nav.Link>
            {user ? (
              <>
                <Nav.Link as={Link} to="/profile" className="text-white mx-2">
                  <FaUser />
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to="/"
                  onClick={logout}
                  className="text-white mx-2"
                >
                  Logout
                </Nav.Link>
              </>
            ) : (
              <Nav.Link as={Link} to="/login" className="text-white mx-2">
                Login
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigationbar;
