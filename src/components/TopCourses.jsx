// this is used to render the top 4 courses
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import React, { useContext, useEffect, useState } from "react";
import CoursesCard from "./CoursesCard";
import { CoursesContext } from "../store/CourseContext";
import { Button, Container } from "react-bootstrap";

function TopCourses() {
  const { courses } = useContext(CoursesContext);
  const [topCourses, setTopCourses] = useState([]);

  useEffect(() => {
    if (!courses) return;
    const sortedCourses = courses.sort((a, b) => b.views - a.views) // Sort courses by views in descending order
      .slice(0, 4); // Get the top 4 courses
    setTopCourses(sortedCourses); // Update the state with the top 4 courses
  }, [courses]);

  return (
    <Container fluid className="mt-5 p-0">
      <div className="px-5 d-flex justify-content-between w-100">
      <h2>Top-Picked Courses</h2>
      <Button variant="link">See more</Button>
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
          />
        ))}
      </Row>
    </Container>
  );
}

export default TopCourses;
