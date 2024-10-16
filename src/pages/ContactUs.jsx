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
  };

  return (
    <Container className="my-5">
      <br />
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
          <p>Email: info@edu-space-xi.vercel.app</p>
          <p>Phone: +123 456 7890</p>
          <p>Address: 123 Roshdy, Alexandria, Egypt</p>
          <div style={{ height: '300px' }}>
            <iframe
              title="Google Map of Alexandria"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3454.1183298146945!2d31.215640715383637!3d31.215888681422027!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145840c77a4c8e09%3A0xe20c4bc80f57e7d4!2sBibliotheca%20Alexandrina!5e0!3m2!1sen!2seg!4v1695565795924!5m2!1sen!2seg"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactUs;
