import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FaLinkedin } from 'react-icons/fa';  

const AboutUs = () => {
  const teamMembers = [
    {
      name: 'Ahmed Aziz',
      role: 'Front-end Developer',
      img: 'https://via.placeholder.com/100',
      linkedin: 'https://www.linkedin.com/in/ahmed-aziz-aa26a927b/',
    },
    {
      name: 'Alaa Saad',
      role: 'Front-end Developer',
      img: 'https://via.placeholder.com/100',
      linkedin: 'https://www.linkedin.com/in/alaa-saad-4944921bb/',
    },
    {
      name: 'Menna Nasr',
      role: 'Front-end Developer',
      img: 'https://via.placeholder.com/100',
      linkedin: 'https://www.linkedin.com/in/menna-nasr-/',
    },
    {
      name: 'Moustafa Essam',
      role: 'Front-end Developer',
      img: 'https://via.placeholder.com/100',
      linkedin: 'https://www.linkedin.com/in/moustafa-essam-40b7b62b5/'
    },
    {
      name: 'Sherif Othman',
      role: 'Front-end Developer',
      img: 'https://via.placeholder.com/100',
      linkedin: 'https://www.linkedin.com/in/sherif-othman-283418122/',
    },
  ];

  return (
    <Container className="my-5">
      <h1 className="text-center mb-5" style={{ fontWeight: '700', color: '#2c3e50' }}>
        About Us
      </h1>

      <section className="mb-5" style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h2 className="mb-3 text-primary">Who We Are?</h2>
        <p style={{ lineHeight: '1.8', fontSize: '1.2rem', color: '#555' }}>
          We are a dedicated group of students from the first Round of the Digital Egypt Pioneers initiative. 
          Our team is proud to present our project focused on an innovative e-learning platform titled <strong>EduSpace</strong>.
        </p>
        <p style={{ lineHeight: '1.8', fontSize: '1.2rem', color: '#555' }}>
          Our mission is to leverage cutting-edge technology to provide accessible and engaging educational experiences, 
          empowering learners of all backgrounds to achieve their goals. At EduSpace, we are committed to fostering innovation, 
          collaboration, and excellence in education.
        </p>
      </section>

      <section className="mb-5" style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h3 className="text-primary">Our Vision</h3>
        <p style={{ lineHeight: '1.8', fontSize: '1.2rem', color: '#555' }}>
          We envision a world where education is accessible to everyone, regardless of their location or background. 
          We believe in the transformative power of knowledge to change lives and uplift communities. 
          Our platform is designed to create an inclusive learning environment that encourages creativity and critical thinking among our users.
        </p>
      </section>

      <section className="mb-5" style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h3 className="text-primary">Our Mission</h3>
        <p style={{ lineHeight: '1.8', fontSize: '1.2rem', color: '#555' }}>
          Our mission is to deliver high-quality educational resources and tools that enhance the learning experience. 
          We strive to develop a dynamic platform that adapts to the individual needs of our users, enabling them to learn 
          at their own pace and in their preferred style.
        </p>
      </section>

      <h2 className="text-center text-primary mb-5">Meet the Team</h2>

      <Row className="justify-content-center">
        {teamMembers.map((member, index) => (
          <Col key={index} md={2} className="text-center mb-4">
            <Card
              className="team-card shadow-lg"
              style={{
                transition: 'transform 0.3s, box-shadow 0.3s',
                borderRadius: '15px',
                overflow: 'hidden',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
            >
              <Card.Img
                variant="top"
                src={member.img}
                className="rounded-circle mx-auto mt-3"
                style={{ width: '100px', height: '100px', objectFit: 'cover' }}
              />
              <Card.Body>
                <Card.Title style={{ fontWeight: '600', color: '#34495e' }}>{member.name}</Card.Title>
                <Card.Text className="text-muted">{member.role}</Card.Text>
                <Button
                  variant="outline-primary"
                  size="sm"
                  href={member.linkedin || '#'}
                  target={member.linkedin ? '_blank' : ''}
                  rel={member.linkedin ? 'noopener noreferrer' : ''}
                  className="d-flex align-items-center justify-content-center"
                  style={{ gap: '5px' }}
                  onClick={(e) => {
                    if (!member.linkedin) e.preventDefault();  
                  }}
                >
                  <FaLinkedin /> 
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <section className="text-center mt-5">
        <h3 className="text-primary">Join Us on Our Journey</h3>
        <p style={{ lineHeight: '1.8', fontSize: '1.2rem', color: '#555' }}>
          We invite you to join us on our journey towards revolutionizing education through technology. 
          Together, we can create an empowering platform that fosters growth and learning for all.
        </p>
      </section>
    </Container>
  );
};

export default AboutUs;