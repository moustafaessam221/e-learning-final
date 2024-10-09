import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';

const Search = () => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search?q=${query}`);
      setQuery('');
    }
  };

  return (
    <Form onSubmit={handleSearch} className="d-flex align-items-center">
      <Form.Control
        type="text"
        placeholder="Search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="me-2 rounded-pill"
      />
      <Button variant="outline-light" type="submit" className="rounded-pill">
        <FaSearch />
      </Button>
    </Form>
  );
};

export default Search;
