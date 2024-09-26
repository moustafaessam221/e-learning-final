import React, { useState } from 'react';  
import { Button, Form } from 'react-bootstrap';


const SearchBar = () => {  

  return (  
    <Form className="d-flex">
    <Form.Control
      type="search"
      placeholder="Search"
      className="me-2"
      aria-label="Search"
      style={{ width: "300px" }}
    />
    <Button variant="outline-success">Search</Button>
  </Form>
  );  
};  

export default SearchBar;