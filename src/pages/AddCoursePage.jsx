// Dynamic Category Fetch and Render
import React, { useState, useEffect, useContext } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { UsersContext } from '../store/UsersContext';
import supabase from "../config/supabaseClient";

function AddCourses() {
  const { user } = useContext(UsersContext);
  const [title, setTitle] = useState('');
  const [short_description, setShortDescription] = useState('');
  const [author, setAuthor] = useState('');
  const [description, setLongDescription] = useState('');
  const [category, setCategory] = useState([]);
  const [availableCategories, setAvailableCategories] = useState([]); 
  const [price, setPrice] = useState(0);
  const [course_hours, setHours] = useState(0);
  const [videoFile, setVideoFile] = useState(null);

  
  useEffect(() => {
    async function fetchCategories() {
     
      const courses = await supabase.from('courses').select('category');
      const categories = courses.data.map(course => course.category).flat();
      const uniqueCategories = [...new Set(categories)];
      setAvailableCategories(uniqueCategories);
    }

    fetchCategories();
  }, []);

  const handlesubmit = async (event) => {
    event.preventDefault();

    try {
      const { data, error } = await supabase
        .from("courses")
        .insert([
          {
            title,
            price,
            course_hours,
            category,
            description,
            short_description,
            author,
          }
        ]);

      if (error) {
        console.error("Error inserting data:", error);
      } else {
        console.log("Data inserted successfully:", data);
        // Reset form
        setCategory([]);
        setHours(0);
        setLongDescription('');
        setPrice(0);
        setShortDescription('');
        setTitle('');
        setAuthor('');
      }
    } catch (err) {
      console.error("Unexpected error:", err);
    }
  };

  return (
    <>
      <Container>
        <h2 className="my-5" sm={12}>
          Hello {user.user_metadata.full_name}, <br />
          What courses would you like to add today?
        </h2>
      </Container>

      <Container>
        <Form onSubmit={handlesubmit}>
          <Row>
            <Col md={6}>
              <Form.Group className="mb-4">
                <Form.Label className="fw-bold">Title</Form.Label>
                <Form.Control type="text" placeholder="Enter course title" value={title} onChange={(e) => setTitle(e.target.value)} required />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-4">
                <Form.Label className="fw-bold">Category</Form.Label>
                <Form.Select
                  value={category}
                  onChange={(e) => setCategory([...e.target.selectedOptions].map(option => option.value))}
                  multiple
                >
                  {availableCategories.map((cat, index) => (
                    <option key={index} value={cat}>{cat}</option>
                  ))}
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col md={6}>
              <Form.Group className="mb-4">
                <Form.Label className="fw-bold">Short Description</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="Enter short description" value={short_description} onChange={(e) => setShortDescription(e.target.value)} required />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-4">
                <Form.Label className="fw-bold">Price</Form.Label>
                <Form.Control type="number" placeholder="Enter price" value={price} onChange={(e) => setPrice(e.target.value)} required />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-4">
                <Form.Label className="fw-bold">Author</Form.Label>
                <Form.Control type="text" placeholder="Enter name of author" value={author} onChange={(e) => setAuthor(e.target.value)} required />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col md={12}>
              <Form.Group className="mb-4">
                <Form.Label className="fw-bold">Long Description</Form.Label>
                <Form.Control as="textarea" rows={5} placeholder="Enter long description" value={description} onChange={(e) => setLongDescription(e.target.value)} required />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col md={6}>
              <Form.Group className="mb-4">
                <Form.Label className="fw-bold">Hours</Form.Label>
                <Form.Control type="number" placeholder="Enter course hours" value={course_hours} onChange={(e) => setHours(e.target.value)} required />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-4">
                <Form.Label className="fw-bold">Video File</Form.Label>
                <Form.Control type="file" onChange={(e) => setVideoFile(e.target.files[0])} />
              </Form.Group>
            </Col>
          </Row>

          <Button variant="primary" type="submit">
            Add Course
          </Button>
        </Form>
      </Container>
    </>
  );
}

export default AddCourses;
