import React from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes, faDollarSign, faStar, faCrown } from '@fortawesome/free-solid-svg-icons';
import "../Style.css";

const PricingCard = () => {
  return (
    <Container className="mt-5">
      <Row className="text-center mb-5 d-flex flex-row container">

        <Card.Title as="h3" className='pricing-title p-5'>Choose Your Plan</Card.Title>

        <Col lg={4} md={4} sm={10} className="mb-4">
          <Card className="h-100 cards-height">
            <Card.Body>
              <div className="mb-4">
                <div className="pricing-icon mb-3">
                  <FontAwesomeIcon icon={faDollarSign} className="pricing-icon-large" />
                </div>
                <h5 className="plan-title">Free Access</h5>
                <p>Free</p>
                <p><h6>Description</h6> Explore our courses with a limited, free plan. Ideal for getting a feel for our content.</p>
                <ul className="list-unstyled feature-list">
                  <li><FontAwesomeIcon icon={faCheck} className="check-icon" /> Access to introductory lessons</li>
                  <li><FontAwesomeIcon icon={faCheck} className="check-icon" /> Limited course topics</li>
                  <li><FontAwesomeIcon icon={faCheck} className="check-icon" /> Community support</li>
                  <li><FontAwesomeIcon icon={faTimes} className="times-icon" /> Certificate</li>
                </ul>
                <Button className='mt-4'>Start Free Trial</Button>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col lg={4} md={4} sm={10} className="mb-4">
          <Card className="h-100 cards-height">
            <Card.Body>
              <div className="mb-4">
                <div className="pricing-icon mb-3">
                  <FontAwesomeIcon icon={faStar} className="pricing-icon-large" />
                </div>
                <h5 className="plan-title">Monthly Access</h5>
                <p>$50/month</p>
                <p><h6>Description</h6> Enjoy full access to all of our courses on a flexible monthly basis. Perfect if you're looking for a short-term commitment.</p>
                <ul className="list-unstyled feature-list">
                  <li><FontAwesomeIcon icon={faCheck} className="check-icon" /> Access to all courses</li>
                  <li><FontAwesomeIcon icon={faCheck} className="check-icon" /> Regularly updated content</li>
                  <li><FontAwesomeIcon icon={faCheck} className="check-icon" /> Premium support</li>
                  <li><FontAwesomeIcon icon={faCheck} className="check-icon" /> Certificate</li>
                </ul>
                <Button>Enroll Monthly</Button>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col lg={4} md={4} sm={10} className="mb-4">
          <Card className="h-100 cards-height">
            <Card.Body>
              <div className="mb-4">
                <div className="pricing-icon mb-3">
                  <FontAwesomeIcon icon={faCrown} className="pricing-icon-large" />
                </div>
                <h5 className="plan-title">Yearly Access</h5>
                <p>$100/year</p>
                <p><h6>Description</h6> Get the best value with yearly access to all courses. Recommended for committed learners.</p>
                <ul className="list-unstyled feature-list">
                  <li><FontAwesomeIcon icon={faCheck} className="check-icon" /> Access to all courses</li>
                  <li><FontAwesomeIcon icon={faCheck} className="check-icon" /> Save more with yearly billing</li>
                  <li><FontAwesomeIcon icon={faCheck} className="check-icon" /> Priority support and exclusive resources</li>
                  <li><FontAwesomeIcon icon={faCheck} className="check-icon" /> Certificate</li>
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
