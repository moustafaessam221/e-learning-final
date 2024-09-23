import React from 'react';  
import { Container, Row, Col, Button } from 'react-bootstrap';  

const Home = () => {  // تم تغيير الاسم من HomePage إلى Home
  return (  
    <Container fluid>  
      <Row>  
        <Col md={12} className="text-center my-4">  
          <h1>Home Page</h1>  
        </Col>  
      </Row>  

      <Row>  
        <Col md={12} className="text-center my-4">  
          <section className="your-space-to-learn">  
            <h2>Your Space to Learn</h2>  
            <p>Subtitle</p>  
            <Button variant="primary">Discover Now</Button>  
          </section>  
        </Col>  
      </Row>  

      <Row>  
        <Col md={12} className="my-4">  
          <section className="top-rated-courses">  
            <h2>Top-Rated Courses</h2>  
            <Row>  
              <Col md={3}>  
                <div className="course-placeholder">Course 1</div>  
              </Col>  
              <Col md={3}>  
                <div className="course-placeholder">Course 2</div>  
              </Col>  
              <Col md={3}>  
                <div className="course-placeholder">Course 3</div>  
              </Col>  
              <Col md={3}>  
                <div className="course-placeholder">Course 4</div>  
              </Col>  
            </Row>  
          </section>  
        </Col>  
      </Row>  

      <Row>  
        <Col md={12} className="my-4">  
          <section className="eduspace-plus">  
            <h2>Invest in your career with EduSpace Plus</h2>  
            <Row>  
              <Col md={4}>  
                <div className="benefit-placeholder">Save Money</div>  
              </Col>  
              <Col md={4}>  
                <div className="benefit-placeholder">Countless Choices</div>  
              </Col>  
              <Col md={4}>  
                <div className="benefit-placeholder">Certificates</div>  
              </Col>  
            </Row>  
          </section>  
        </Col>  
      </Row>  

      <Row>  
        <Col md={12} className="my-4">  
          <section className="new-courses">  
            <h2>New Courses</h2>  
            <Row>  
              <Col md={3}>  
                <div className="course-placeholder">Course 1</div>  
              </Col>  
              <Col md={3}>  
                <div className="course-placeholder">Course 2</div>  
              </Col>  
              <Col md={3}>  
                <div className="course-placeholder">Course 3</div>  
              </Col>  
              <Col md={3}>  
                <div className="course-placeholder">Course 4</div>  
              </Col>  
            </Row>  
          </section>  
        </Col>  
      </Row>  

      <Row>  
        <Col md={12} className="my-4">  
          <section className="why-students-love-eduspace">  
            <h2>Why Students Love EduSpace</h2>  
            <Row>  
              <Col md={6}>  
                <div className="testimonial-placeholder">Testimonial 1</div>  
              </Col>  
              <Col md={6}>  
                <div className="testimonial-placeholder">Testimonial 2</div>  
              </Col>  
            </Row>  
          </section>  
        </Col>  
      </Row>  

      {/* Footer Section */}
      <footer className="bg-dark text-white py-4">
        <Container>
          <Row>
            {/* Company Info */}
            <Col md={4} className="text-center text-md-left mb-4 mb-md-0">
              <h5>EduSpace</h5>
              <p>Your go-to platform for learning new skills and advancing your career.</p>
            </Col>

            {/* Quick Links */}
            <Col md={4} className="text-center text-md-left mb-4 mb-md-0">
              <h5>Quick Links</h5>
              <ul className="list-unstyled">
                <li><a href="/about" className="text-white">About Us</a></li>
                <li><a href="/courses" className="text-white">Courses</a></li>
                <li><a href="/contact" className="text-white">Contact</a></li>
              </ul>
            </Col>

            {/* Social Media */}
            <Col md={4} className="text-center text-md-left">
              <h5>Follow Us</h5>
              <ul className="list-unstyled">
                <li><a href="https://www.facebook.com" className="text-white">Facebook</a></li>
                <li><a href="https://www.twitter.com" className="text-white">Twitter</a></li>
                <li><a href="https://www.instagram.com" className="text-white">Instagram</a></li>
              </ul>
            </Col>
          </Row>
        </Container>
      </footer>
    </Container>  
  );  
};  

export default Home; 