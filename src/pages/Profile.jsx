import React, { useState } from 'react';
import { Container, Row, Col, Image, Card, ListGroup, Badge, Button, Modal, Form } from 'react-bootstrap';

const ProfilePage = () => {

  

  return (
    <Container className="my-5">
      <Row>
        <Col lg={4} className="mb-4">
          <Card>
            <Card.Body className="text-center">
              <Image src="https://via.placeholder.com/150" roundedCircle fluid className="mb-3" 
                      style={{cursor: 'pointer'}} />
              <h2 style={{cursor: 'pointer'}}>Your Name</h2>
              <p style={{cursor: 'pointer'}}>your.email@example.com</p>
              <p style={{cursor: 'pointer'}}>Your short bio goes here</p>
              <div className="d-flex justify-content-center">
                <Button variant="outline-primary" size="sm" className="mx-1" >Add LinkedIn</Button>
                <Button variant="outline-dark" size="sm" className="mx-1" >Add GitHub</Button>
                <Button variant="outline-info" size="sm" className="mx-1" >Add Twitter</Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={8}>
          <Card className="mb-4">
            <Card.Header as="h5" className="d-flex justify-content-between align-items-center">
              Courses in Progress
              <Button variant="primary" size="sm" >Add Course</Button>
            </Card.Header>
            <Card.Body>
              <p className="text-muted">No courses added yet. Start adding your courses!</p>
            </Card.Body>
          </Card>
          
          <Card className="mb-4">
            <Card.Header as="h5" className="d-flex justify-content-between align-items-center">
              Projects
              <Button variant="primary" size="sm" >Add Project</Button>
            </Card.Header>
            <Card.Body>
              <p className="text-muted">No projects added yet. Showcase your work by adding projects!</p>
            </Card.Body>
          </Card>
          
          <Card className="mb-4">
            <Card.Header as="h5" className="d-flex justify-content-between align-items-center">
              Work History
              <Button variant="primary" size="sm" >Add Work Experience</Button>
            </Card.Header>
            <Card.Body>
              <p className="text-muted">No work history added yet. Add your professional experience!</p>
            </Card.Body>
          </Card>
          
          <Card className="mb-4">
            <Card.Header as="h5" className="d-flex justify-content-between align-items-center">
              Education
              <Button variant="primary" size="sm" >Add Education</Button>
            </Card.Header>
            <Card.Body>
              <p className="text-muted">No education history added yet. Add your educational background!</p>
            </Card.Body>
          </Card>
          
          <Card>
            <Card.Header as="h5" className="d-flex justify-content-between align-items-center">
              Skills
              <Button variant="primary" size="sm" >Add Skill</Button>
            </Card.Header>
            <Card.Body>
              <p className="text-muted">No skills added yet. Highlight your expertise by adding skills!</p>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Edit Modal */}
      <Modal >
        <Modal.Header closeButton>
          <Modal.Title>Edit </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Enter details</Form.Label>
              <Form.Control type="text" placeholder={`Enter`} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" >
            Close
          </Button>
          <Button variant="primary" >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default ProfilePage;

