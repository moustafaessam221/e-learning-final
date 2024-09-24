
import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import EduSpaceLogo from '../images/EduSpaceLogo.png'
import { faGithub, faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function Footer() {
  
  return (
    <footer className="bg-dark text-white pt-3 pb-3 mt-20">
      <Container>
        <Row>
          <Col>
           <div>
           <img
           className='logo'
            src={EduSpaceLogo}
          />
            <h1 className="mt-2">Eduspace</h1>
           </div>
          </Col>
          <Col className="p-20 mx-4">
            <h5>Contact</h5>
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
          </Col>
          <Col className="p-20" >
            <h5>About</h5>
            <div>
              <a href="#" className="text-white me-3">
                <FontAwesomeIcon icon={faGithub} size="2x" />
              </a>
              <a href="#" className="text-white me-3">
                <FontAwesomeIcon icon={faFacebook} size="2x" />
              </a>
              <a href="#" className="text-white me-3">
                <FontAwesomeIcon icon={faInstagram} size="2x" />
              </a>
              <a href="#" className="text-white">
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="text-center mt-4">
        Copyright © 2024 EduSpace.
      </div>
    </footer>
  );
}

export default Footer;
