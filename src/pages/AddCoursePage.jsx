import React from 'react';
import { Form, Button, Container, Row, Col, Dropdown } from 'react-bootstrap';

const AddCoursePage = ({ instructorName }) => {
  const categories = ['Backend', 'Web Development', 'Frontend', 'Design', 'UX Design', 'Visual Design', 'Node.js', 'Marketing', 'Social Media Marketing', 'Email Marketing', 'SEO', 'UI Design', 'Graphic Design' ];
  const [selectedCategory, setSelectedCategory] = React.useState(null);

  const handleSelect = (category) => {
    setSelectedCategory(category);
  };

  return (
    <Container className="mt-5 mb-5">
      <Row className="justify-content-md-center">
        <Col md={8}>
          <h2 className="text-center">Hello {instructorName || 'Instructor'}, What courses would you like to add today?</h2>
          <Form>
            <Form.Group controlId="courseTitle" className="my-3">
              <Form.Label></Form.Label>
              <Form.Control type="text" placeholder="Enter course title" />
            </Form.Group>

            <Form.Group controlId="courseShortDescription" className="my-3">
              <Form.Label></Form.Label>
              <Form.Control type="text" placeholder="Enter short description" />
            </Form.Group>

            <Form.Group controlId="courseLongDescription" className="my-3">
              <Form.Label></Form.Label>
              <Form.Control as="textarea" rows={4} placeholder="Enter long description" />
            </Form.Group>

            <Form.Group className="my-3">
              <Form.Label>Course Categories</Form.Label>
              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  {selectedCategory || 'Select Category'}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  {categories.map((category) => (
                    <Dropdown.Item key={category} onClick={() => handleSelect(category)}>
                      {selectedCategory === category ? <strong>{category}</strong> : category}
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
            </Form.Group>

            <Button variant="outline-primary" type="submit" className="w-100 btn-lg">
                 Add Course
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

AddCoursePage.defaultProps = {
  instructorName: 'Instructor',
};

export default AddCoursePage;
