import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { useLocation, Link } from 'react-router-dom';
import supabase from '../config/supabaseClient';

const SearchResults = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const query = urlParams.get('q') || "";
    setSearchQuery(query);

    const fetchSearchResults = async () => {
      if (query.trim()) {
        setIsLoading(true);
        try {
          const { data, error } = await supabase
            .from("courses")
            .select()
            .ilike('title', `%${query}%`);

          if (error) throw error;

          console.log(data);
          setSearchResults(data);
        } catch (error) {
          console.error('Error fetching search results:', error);
          setSearchResults([]);
        } finally {
          setIsLoading(false);
        }
      } else {
        setSearchResults([]);
      }
    };

    fetchSearchResults();
  }, [location.search]);

  return (
    <Container className="mt-4">
      <h1>Search Results for "{searchQuery}"</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : searchResults.length > 0 ? (
        <ul>
          {searchResults.map((result) => (
            <li key={result.id}>
              <Link to={`/course/${result.id}`} style={{ textDecoration: 'none', color: 'blue' }}>
                {result.title}
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p>No results found.</p>
      )}
    </Container>
  );
};

export default SearchResults;
