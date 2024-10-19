import React, { useState, useRef, useEffect } from 'react';
import { Form, Button, ListGroup, InputGroup, FormControl } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import supabase from '../config/supabaseClient';

const Search = () => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const navigate = useNavigate();
  const wrapperRef = useRef(null);

  const fetchSuggestions = async (searchTerm) => {
    if (searchTerm.trim()) {
      try {
        const { data, error } = await supabase
          .from('courses')
          .select('id, title')
          .ilike('title', `%${searchTerm}%`)
          .limit(5);

        if (error) throw error;
        setSuggestions(data);
      } catch (error) {
        console.error('Error fetching suggestions:', error);
        setSuggestions([]);
      }
    } else {
      setSuggestions([]);
    }
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    fetchSuggestions(value);
  };

  const handleSuggestionClick = (course) => {
    navigate(`/course/${course.id}`);
    setQuery('');
    setSuggestions([]);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search?q=${encodeURIComponent(query)}`);
      setQuery('');
      setSuggestions([]);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setSuggestions([]);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div ref={wrapperRef} className="position-relative">
      <Form onSubmit={handleSearch}>
        <InputGroup>
          <FormControl
            type="text"
            placeholder="Search"
            value={query}
            onChange={handleInputChange}
            className="rounded-pill"
          />
          <Button variant="outline-light" type="submit" className="rounded-pill ms-2">
            <FaSearch />
          </Button>
        </InputGroup>
      </Form>

      {suggestions.length > 0 && (
        <ListGroup className="position-absolute w-100 mt-1" style={{ zIndex: 1000 }}>
          {suggestions.map((course, index) => (
            <ListGroup.Item
              key={index}
              action
              onClick={() => handleSuggestionClick(course)}
            >
              {course.title}
            </ListGroup.Item>
          ))}
        </ListGroup>
      )}
    </div>
  );
};

export default Search;
