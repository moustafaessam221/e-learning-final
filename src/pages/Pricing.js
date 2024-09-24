import React from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import "../Style.css";

const PricingCard = () => {
  return (
    <Container className="mt-5">
      <Row className="text-center mb-5">
        <Card.Title as="h3" className='p-5'>Choose Your Plan</Card.Title>
        
        <Col>
          <Card className="mb-4 h-100 cards-height">
            <Card.Body>
              <div className="mb-4">
                <h5>Free Access</h5>
                <p>Free</p>
                <ul className="list-unstyled">
                  <li>
                    <FontAwesomeIcon icon={faCheck}/> Access to basic courses
                  </li>
                </ul>
                <Button className="mb-3">Start Free Trial</Button>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col className="p-20 mx-4">
          <Card className="mb-4 h-100 cards-height">
            <Card.Body>
              <div className="mb-4">
                <h5>Monthly Access</h5>
                <p>$50/month</p>
                <ul className="list-unstyled">
                  <li>
                    <FontAwesomeIcon icon={faCheck}/> Access to all courses
                  </li>
                </ul>
                <Button className="mb-3">Enroll Monthly</Button>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card className="mb-4 h-100 cards-height">
            <Card.Body>
              <div>
                <h5>Yearly Access</h5>
                <p>$100/year</p>
                <ul className="list-unstyled">
                  <li>
                    <FontAwesomeIcon icon={faCheck}  /> Access to all courses
                  </li>
                </ul>
                <Button>Enroll Yearly</Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default PricingCard;
