import React, { useState, useContext, useEffect } from "react";
import CoursesCard from "./CoursesCard";
import { Container } from "react-bootstrap";
import Topic from "./Topic";
import { CoursesContext } from "../store/CourseContext";

function CoursesList() {
  const { courses } = useContext(CoursesContext);
  const [selectCategory, setSelectCategory] = useState("ALL");
  const [coursesPrice, setCoursesPrice] = useState("All");
  const [filterCourses, setFilterCourses] = useState([]);

  const handleSelect = (category) => {
    setSelectCategory(category);
  };

  const handlePrice = (price) => {
    setCoursesPrice(price);
  };

  useEffect(() => {
    // Filter by category
    const coursesAfterFiltering =
      selectCategory === "ALL"
        ? courses
        : courses.filter(
            (course) =>
              course.category && course.category.includes(selectCategory)
          );

    // Filter by price
    const filteredCoursesByPrice =
      coursesPrice === "Free"
        ? coursesAfterFiltering.filter((course) => course.price === null)
        : coursesPrice === "Paid"
        ? coursesAfterFiltering.filter((course) => course.price > 0)
        : coursesAfterFiltering; 

    // Set filtered courses
    setFilterCourses(filteredCoursesByPrice);
  }, [selectCategory, courses, coursesPrice]); 

  return (
    <>
      <Container className="d-flex flex-wrap">
        <Topic
          handleSelect={handleSelect}
          selectCategory={selectCategory}
          handlePrice={handlePrice}
        />
      </Container>
      <Container className="d-flex flex-wrap">
        {filterCourses.map((course) => (
          <CoursesCard
            key={course.id}
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