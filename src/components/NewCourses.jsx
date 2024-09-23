import React from 'react';
import { Row, Col } from 'react-bootstrap';

const NewCourses = () => {
  return (
    <section className="new-courses my-4">
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
  );
};

export default NewCourses;
