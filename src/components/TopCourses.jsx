import React, { useContext, useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";
import { CoursesContext } from "../store/CourseContext";
import CoursesCard from "./CoursesCard";


function TopCourses() {
  const { courses } = useContext(CoursesContext);
  const [topCourses, setTopCourses] = useState([]);

  useEffect(() => {
    if (!courses) return;
    const sortedCourses = [...courses].sort((a, b) => b.views - a.views)
      .slice(0, 4); 
    setTopCourses(sortedCourses);
  }, [courses]);

  function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-GB', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    });
  }

  return (
    <Container fluid className="my-5 p-0 ">
      <div className="px-5 d-flex justify-content-between w-100">
      <h2>Top-Picked Courses</h2>
      <Button variant="link" as={Link} to="/courses" >See more</Button>
      </div>
      <Row
        xs={2}
        sm={3}
        md={3}
        lg={4}
        style={{border:"1px solid black", borderRight:"none", borderLeft:"none"}}
        className="m-0 p-2"
      >
        {topCourses.map((course) => (
          <CoursesCard
            id={course.id}
            title={course.title}
            description={course.shortDesc}
            categories={course.category}
            rating={course.rating}
            price={course.price ? course.price : 0}
            key={course.id}
            comments={course.comments}
            views={course.views}
            author={course.author}
            category={course.category}
            createdAt={formatDate(course.created_at)}
          />
        ))}
      </Row>
    </Container>
  );
}

export default TopCourses;
