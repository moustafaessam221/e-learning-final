import React from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck,faTimes, faDollarSign, faStar, faCrown } from '@fortawesome/free-solid-svg-icons'; // Importing new icons
import "../Style.css";

const PricingCard = () => {
  return (
    <Container className="mt-5">
    <Row className="text-center mb-5 d-flex flex-row container">

      <Card.Title as="h3" className='p-5'>Choose Your Plan</Card.Title>

      <Col lg={4} md={4} sm={10} className="mb-4">
        <Card className="h-100 cards-height">
          <Card.Body>
            <div className="mb-4">
              <h5 style={{ color: "orange" }}>
                <FontAwesomeIcon icon={faDollarSign} className="me-2" style={{ color: "blue" }} /> Free Access
              </h5>
              <p>Free</p>
              <p><h6>Description</h6> Explore our courses with a limited, free plan. Ideal for getting a feel for our content.</p>
              <ul className="list-unstyled">
                <li className='mb-2'><FontAwesomeIcon icon={faCheck} /> Access to introductory lessons</li>
                
                <li className='mb-2'><FontAwesomeIcon icon={faCheck} /> Limited course topics</li>
                <li className='mb-2'><FontAwesomeIcon icon={faCheck} /> Community support</li>
                <li><FontAwesomeIcon icon={faTimes} /> Certificate</li>
              </ul>
              <Button className='mt-4'>Start Free Trial</Button>
            </div>
          </Card.Body>
        </Card>
      </Col>

      <Col lg={4} md={4} sm={10} className="mb-4 ">
        <Card className="h-100 cards-height">
          <Card.Body>
            <div className="mb-4">
              <h5 style={{ color: "orange" }}>
                <FontAwesomeIcon icon={faStar} className="me-2" style={{ color: "blue" }} /> Monthly Access
              </h5>
              <p>$50/month</p>
              <p><h6>Description</h6> Enjoy full access to all of our courses on a flexible monthly basis. Perfect if you're looking for a short-term commitment.</p>
              <ul className="list-unstyled">
                <li className='mb-2'><FontAwesomeIcon icon={faCheck} /> Access to all courses</li>
                
                <li className='mb-2'><FontAwesomeIcon icon={faCheck} /> Regularly updated content</li>
                <li className='mb-2'><FontAwesomeIcon icon={faCheck} /> Premium support</li>
                <li><FontAwesomeIcon icon={faCheck} /> Certificate</li>
              </ul>
              <Button>Enroll Monthly</Button>
            </div>
          </Card.Body>
        </Card>
      </Col>

      <Col lg={4} md={4} sm={10} className="mb-4">
        <Card className="h-100 cards-height">
          <Card.Body>
            <div>
              <h5 style={{ color: "orange" }}>
                <FontAwesomeIcon icon={faCrown} className="me-2" style={{ color: "blue" }} /> Yearly Access
              </h5>
              <p>$100/year</p>
              <p><h6>Description</h6> Get the best value with yearly access to all courses. Recommended for committed learners.</p>
              <ul className="list-unstyled">
                <li className='mb-2'><FontAwesomeIcon icon={faCheck} /> Access to all courses</li>
              
                <li className='mb-2'><FontAwesomeIcon icon={faCheck} /> Save more with yearly billing</li>
                <li className='mb-2'><FontAwesomeIcon icon={faCheck} /> Priority support and exclusive resources</li>
                <li><FontAwesomeIcon icon={faCheck} /> Certificate</li>
              </ul>
              <Button className='mt-4'>Enroll Yearly</Button>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Container>
  );
};

export default PricingCard;
