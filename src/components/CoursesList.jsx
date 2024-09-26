import React from "react";
import CoursesCard from "./CoursesCard";
import { Container } from "react-bootstrap";

function CoursesList({ courses }) {
  return (
    <>
      <Container className="d-flex flex-wrap">
        {courses.map((course) => (
          <CoursesCard
            id={course.id}
            title={course.title}
            description={course.shortDesc}
            rating={course.rating}
            price={course.price}
            views={course.views}
          />
        ))}
      </Container>
    </>
  );
}

export default CoursesList;
