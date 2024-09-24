import React, { useState } from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    // يمكنك هنا إرسال البيانات إلى سيرفر أو API
  };

  return (
    <Container className="my-5">
      <h1 className="text-center mb-4">Contact Us</h1>
      <Row>
        <Col md={6}>
          <h2>Get in Touch</h2>
          <p>
            Have any questions? We'd love to hear from you. Fill out the form below and we'll get back to you soon.
          </p>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formName">
              <Form.Label>Your Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Your Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formMessage">
              <Form.Label>Your Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                placeholder="Write your message here..."
                name="message"
                value={formData.message}
                onChange={handleChange}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
        <Col md={6}>
          <h2>Contact Information</h2>
          <p>Email: info@example.com</p>
          <p>Phone: +123 456 7890</p>
          <p>Address: 123 Main Street, City, Country</p>
          <div className="map-placeholder" style={{ height: '300px', background: '#f0f0f0' }}>
            <p className="text-center mt-5">Map Placeholder</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactUs;
