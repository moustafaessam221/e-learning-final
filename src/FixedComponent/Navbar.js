import React from 'react';  
import { LinkContainer } from 'react-router-bootstrap';  // Helps integrate react-router with react-bootstrap
import { Navbar, Nav, Container, Button } from 'react-bootstrap';  
import SearchBar from './Search';  // Custom SearchBar component

const Navigationbar = () => {  
  return (  
    <Navbar bg="primary" variant="dark" expand="lg" className="py-3">  
      <Container fluid>  
        {/* Brand Section */}  
        <LinkContainer to="/">  
          <Navbar.Brand style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>EduSpace</Navbar.Brand>  
        </LinkContainer>  

        {/* Toggler for Small Screens */}  
        <Navbar.Toggle aria-controls="navbarScroll" />  

        {/* Navbar Content */}  
        <Navbar.Collapse id="navbarScroll">  
          <Nav className="ms-auto my-2 my-lg-0" navbarScroll>  
            <LinkContainer to="/">  
              <Nav.Link className="text-white" style={{ transition: 'color 0.3s ease' }}>Home</Nav.Link>  
            </LinkContainer>  
            <LinkContainer to="/about">  
              <Nav.Link className="text-white" style={{ transition: 'color 0.3s ease' }}>About</Nav.Link>  
            </LinkContainer>  
            <LinkContainer to="/courses">  
              <Nav.Link className="text-white" style={{ transition: 'color 0.3s ease' }}>Courses</Nav.Link>  
            </LinkContainer>  
            <LinkContainer to="/profile">  
              <Nav.Link className="text-white" style={{ transition: 'color 0.3s ease' }}>Profile</Nav.Link>  
            </LinkContainer>  
            <LinkContainer to="/contact">  
              <Nav.Link className="text-white" style={{ transition: 'color 0.3s ease' }}>Contact</Nav.Link>  
            </LinkContainer>  
          </Nav>  

          {/* Centered Search Bar */}  
          <div className="d-flex justify-content-center mx-auto">  
            <SearchBar />  
          </div>  

          {/* Right-aligned Links or Buttons (optional) */}
          <Button variant="outline-light" className="ms-lg-2">Login</Button>
        </Navbar.Collapse>  
      </Container>  
    </Navbar>  
  );  
};  

export default Navigationbar;
