import React, { useState, useEffect } from 'react';
import { Container, Card, Row, Col, Spinner } from 'react-bootstrap';
import { useLocation, Link } from 'react-router-dom';
import supabase from '../config/supabaseClient';

const SearchResults = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const query = urlParams.get('q') || '';
    setSearchQuery(query);

    const fetchSearchResults = async () => {
      if (query.trim()) {
        setIsLoading(true);
        try {
          const { data, error } = await supabase
            .from('courses')
            .select('id, title, description')
            .ilike('title', `%${query}%`);

          if (error) throw error;
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
      <h1 className="mb-4">Search Results for "{searchQuery}"</h1>

      {isLoading ? (
        <div className="text-center">
          <Spinner animation="border" variant="primary" />
        </div>
      ) : searchResults.length > 0 ? (
        <Row xs={1} md={2} lg={3} className="g-4">
          {searchResults.map((result) => (
            <Col key={result.id}>
              <Card className="h-100 shadow-sm">
                <Card.Body>
                  <Card.Title>
                    <Link
                      to={`/course/${result.id}`}
                      style={{ textDecoration: 'none', color: '#007bff' }}
                    >
                      {result.title}
                    </Link>
                  </Card.Title>
                  <Card.Text>
                    {result.description ? result.description.substring(0, 100) + '...' : 'No description available.'}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      ) : (
        <p className="text-muted">No results found.</p>
      )}
    </Container>
  );
};

export default SearchResults;
