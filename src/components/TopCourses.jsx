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

  return (
    <Container fluid className="my-5 p-0 ">
      <div className="px-5 d-flex justify-content-between w-100">
      <h2>Top-Picked Courses</h2>
      <Button variant="outline-primary" className="d-flex align-items-center text-decoration-none" as={Link} to="/courses" >See more</Button>
      </div>
      <hr />
      <Row
        xs={2}
        sm={3}
        md={3}
        lg={4}
        // style={{border:"1px solid black", borderRight:"none", borderLeft:"none"}}
        className="m-0 mt-4 p-2"
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
            createdAt={course.created_at}
          />
        ))}
      </Row>
      <hr />
    </Container>
  );
}

export default TopCourses;
