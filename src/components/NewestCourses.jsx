import React, { useContext, useEffect, useState } from "react";
import { CoursesContext } from "../store/CourseContext";
import Row from "react-bootstrap/Row";
import CoursesCard from "./CoursesCard";
import { Button, Container } from "react-bootstrap";


function NewestCourses() {
  const { courses } = useContext(CoursesContext);
  const [newestCourses, setNewestCourses] = useState([]);

  useEffect(() => {
    if (!courses) return;
    const sortedCourses = [...courses].sort(
      (a, b) => new Date(b.created_at) - new Date(a.created_at)
    );
    setNewestCourses(sortedCourses.slice(0, 4));
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
    <Container fluid className="mt-5 p-0">
      <div className="px-5 d-flex justify-content-between w-100">
        <h2>Newest Courses</h2>
        <Button variant="link">See more</Button>
      </div>
      <Row
        xs={2}
        sm={3}
        md={3}
        lg={4}
        style={{
          border: "1px solid black",
          borderRight: "none",
          borderLeft: "none",
        }}
        className="m-0 p-2"
      >
        {newestCourses.map((course) => (
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
            createdAt={formatDate(course.created_at)}
          />
        ))}
      </Row>
    </Container>
  );
}

export default NewestCourses;