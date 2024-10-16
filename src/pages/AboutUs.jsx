import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const AboutUs = () => {
  return (
    <Container className="my-5">
      <br />
      <h1 className="text-center mb-4">About Us</h1>

      <h2 className="mb-3">Who We Are?</h2>
      <p>
        We are a dedicated group of students from the first cohort of the Digital Egypt Pioneers initiative. 
        Our team is proud to present our project focused on an innovative e-learning platform titled <strong>EduSpace</strong>.
      </p>
      <p>
        Our mission is to leverage cutting-edge technology to provide accessible and engaging educational experiences, 
        empowering learners of all backgrounds to achieve their goals. At EduSpace, we are committed to fostering innovation, 
        collaboration, and excellence in education.
      </p>

      <h3 className="mt-4">Our Vision</h3>
      <p>
        We envision a world where education is accessible to everyone, regardless of their location or background. 
        We believe in the transformative power of knowledge to change lives and uplift communities. 
        Our platform is designed to create an inclusive learning environment that encourages creativity and critical thinking among our users.
      </p>

      <h3 className="mt-4">Our Mission</h3>
      <p>
        Our mission is to deliver high-quality educational resources and tools that enhance the learning experience. 
        We strive to develop a dynamic platform that adapts to the individual needs of our users, enabling them to learn 
        at their own pace and in their preferred style.
      </p>

      <h2 className="mt-4">Meet the Team</h2>
      <Row className="justify-content-center">
        {/* Member 1 */}
        <Col md={2} className="text-center mb-4">
          <Card>
            <Card.Img variant="top" src="https://via.placeholder.com/100" className="rounded-circle mx-auto" style={{ width: '100px', height: '100px' }} />
            <Card.Body>
              <Card.Title>Sherif Othman</Card.Title>
              <Card.Text>Role: Front-end Developer</Card.Text>
              <Card.Link href="https://www.linkedin.com/in/sherif-othman-283418122/">View LinkedIn</Card.Link>
            </Card.Body>
          </Card>
        </Col>

        {/* Member 2 */}
        <Col md={2} className="text-center mb-4">
          <Card>
            <Card.Img variant="top" src="https://via.placeholder.com/100" className="rounded-circle mx-auto" style={{ width: '100px', height: '100px' }} />
            <Card.Body>
              <Card.Title>Ahmed Aziz</Card.Title>
              <Card.Text>Role: Front-End Developer</Card.Text>
              <Card.Link href="link_to_linkedin_2">View LinkedIn</Card.Link>
            </Card.Body>
          </Card>
        </Col>

        {/* Member 3 */}
        <Col md={2} className="text-center mb-4">
          <Card>
            <Card.Img variant="top" src="https://via.placeholder.com/100" className="rounded-circle mx-auto" style={{ width: '100px', height: '100px' }} />
            <Card.Body>
              <Card.Title>Moustafa Essam</Card.Title>
              <Card.Text>Role: Front-end Developer</Card.Text>
              <Card.Link href="link_to_linkedin_3">View LinkedIn</Card.Link>
            </Card.Body>
          </Card>
        </Col>

        {/* Member 4 */}
        <Col md={2} className="text-center mb-4">
          <Card>
            <Card.Img variant="top" src="https://via.placeholder.com/100" className="rounded-circle mx-auto" style={{ width: '100px', height: '100px' }} />
            <Card.Body>
              <Card.Title>Alaa Saad</Card.Title>
              <Card.Text>Role: Front-end Developer</Card.Text>
              <Card.Link href="link_to_linkedin_4">View LinkedIn</Card.Link>
            </Card.Body>
          </Card>
        </Col>

        {/* Member 5 */}
        <Col md={2} className="text-center mb-4">
          <Card>
            <Card.Img variant="top" src="https://via.placeholder.com/100" className="rounded-circle mx-auto" style={{ width: '100px', height: '100px' }} />
            <Card.Body>
              <Card.Title>Menna Nasr</Card.Title>
              <Card.Text>Role: Front-end Developer</Card.Text>
              <Card.Link href="link_to_linkedin_5">View LinkedIn</Card.Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <h3 className="mt-4">Join Us on Our Journey</h3>
      <p>
        We invite you to join us on our journey towards revolutionizing education through technology. 
        Together, we can create an empowering platform that fosters growth and learning for all.
      </p>
    </Container>
  );
};

export default AboutUs;
