import {
  faFacebook,
  faLinkedin,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Button, Col, Container, Form, Nav, Row } from "react-bootstrap";
import EduSpaceLogo from "../images/EduSpaceLogo.png";
import { Link } from "react-router-dom";
import { useMediaQuery } from "usehooks-ts";
import "./Footer.css";

function Footer() {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <footer className="custom-footer pt-5 pb-3">
      <Container>
        <Row className=" flex-wrap">
          <Col
            className={
              isMobile ? "p-20 mx-4 mb-3 text-center" : "p-20 mx-4 mb-3"
            }
            style={{ minWidth: "200px" }}
          >
            <div>
              <img
                className="footer-logo mx-3"
                src={EduSpaceLogo}
                alt="EduSpace Logo"
              />
            </div>
            <div className="mt-4">
              <a href="#" className="me-3">
                <FontAwesomeIcon icon={faXTwitter} size="2x" />
              </a>
              <a href="#" className="me-3">
                <FontAwesomeIcon icon={faFacebook} size="2x" />
              </a>
              <a href="#" className="me-3">
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
              </a>
            </div>
          </Col>
          {isMobile ? null : (
            <>
              <Col md={2}>
                <h5>EduSpace</h5>
                <Nav.Link as={Link} to="/about">
                  About
                </Nav.Link>
                <Nav.Link as={Link} to="/contact">
                  Contact
                </Nav.Link>
                <Nav.Link as={Link} to="/">
                  Home
                </Nav.Link>
                <Nav.Link as={Link} to="/">
                  Get the app
                </Nav.Link>
                <Nav.Link as={Link} to="/">
                  Business
                </Nav.Link>
              </Col>

              <Col md={2}>
                <h5>Company</h5>
                <Nav.Link as={Link} to="/career">
                  Careers
                </Nav.Link>
                <Nav.Link as={Link} to="/blog">
                  Blog
                </Nav.Link>
                <Nav.Link as={Link} to="/help">
                  Help and support
                </Nav.Link>
                <Nav.Link as={Link} to="/investor">
                  Investors
                </Nav.Link>
              </Col>

              <Col md={2}>
                <h5>Licenes</h5>
                <Nav.Link as={Link} to="/">
                  Terms
                </Nav.Link>
                <Nav.Link as={Link} to="/">
                  Privacy Policy
                </Nav.Link>
                <Nav.Link as={Link} to="/">
                  Cookie settings
                </Nav.Link>
                <Nav.Link as={Link} to="/">
                  Sitemap
                </Nav.Link>
                <Nav.Link as={Link} to="/">
                  Accessibility statement
                </Nav.Link>
              </Col>
            </>
          )}
          {/* <Col className="p-20 mx-4" style={{ minWidth: "200px" }}>
            <h5 className="mb-3">Contact us</h5>
            <Form>
              <Form.Group controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                />
              </Form.Group>
              <Form.Group  className="mt-2">
                <Form.Label>Problem</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Describe your problem"
                />
              </Form.Group>
              <Button type="submit" className="mt-2">Submit</Button>
            </Form>
          </Col> */}
        </Row>
      </Container>
      <div className="text-center mt-4">Copyright © 2024 EduSpace.</div>
    </footer>
  );
}
export default Footer;
