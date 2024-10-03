import React, { useState, useContext } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { UsersContext } from '../store/UsersContext';

function AddCourses() {
  const { user } = useContext(UsersContext);
  const [title, setTitle] = useState('');
  const [shortDescription, setShortDescription] = useState('');
  const [longDescription, setLongDescription] = useState('');
  const [category, setCategory] = useState('Select Category');
  const [price, setPrice] = useState(0);
  const [hours, setHours] = useState(0);
  const [videoFile, setVideoFile] = useState(null);

  return (
    <>
    <Container>
    <h2 className="my-5" sm={12}>Hello {user.user_metadata.full_name}, <br/>
    What courses would you like to add today?</h2>
    </Container>
      
  
    <Container>
      <Form >
        <Row>
          <Col md={6}>
            <Form.Group className="mb-4">
              <Form.Label className="fw-bold" >Title</Form.Label>
              <Form.Control type="text" placeholder="Enter course title" value={title} onChange={(e) => setTitle(e.target.value)} required />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group className="mb-4">
              <Form.Label className="fw-bold">Category</Form.Label>
              <Form.Select value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value="Select Category">Select Category</option>      
                <option value="Design">Design</option>
                <option value="Development">Development</option>
                <option value="Marketing">Marketing</option>
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col md={6}>
            <Form.Group className="mb-4">
              <Form.Label className="fw-bold">Short Description</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Enter short description" value={shortDescription} onChange={(e) => setShortDescription(e.target.value)} required />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group className="mb-4">
              <Form.Label className="fw-bold">Price</Form.Label>
              <Form.Control type="number" placeholder="Enter price" value={price} onChange={(e) => setPrice(e.target.value)} required />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col md={12}>
            <Form.Group className="mb-4">
              <Form.Label className="fw-bold">Long Description</Form.Label>
              <Form.Control as="textarea" rows={5} placeholder="Enter long description" value={longDescription} onChange={(e) => setLongDescription(e.target.value)} required />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col md={6}>
            <Form.Group className="mb-4">
              <Form.Label className="fw-bold">Hours</Form.Label>
              <Form.Control type="number" placeholder="Enter course hours" value={hours} onChange={(e) => setHours(e.target.value)} required />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group className="mb-4">
              <Form.Label className="fw-bold">Video File</Form.Label>
              <Form.Control type="file" onChange={(e) => setVideoFile(e.target.files[0])} required />
            </Form.Group>
          </Col>
        </Row>

        <Button variant="primary" type="submit" > 
          Add Course
        </Button>
      </Form>
    </Container>
    </>

  );
}

export default AddCourses;