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
  const [sortCriteria, setSortCriteria] = useState("Title"); 

  const handleSelect = (category) => {
    setSelectCategory(category);
  };

  const handlePrice = (price) => {
    setCoursesPrice(price);
  };

  const handleSort = (criteria) => {
    setSortCriteria(criteria);
  };

  useEffect(() => {
    let filteredCourses = [...courses]; 

    // Filter by category
    if (selectCategory !== "ALL") {
      filteredCourses = filteredCourses.filter(
        (course) =>
          course.category && course.category.includes(selectCategory)
      );
    }

    // Filter by price
    if (coursesPrice === "Free") {
      filteredCourses = filteredCourses.filter((course) => course.price === null);
    } else if (coursesPrice === "Paid") {
      filteredCourses = filteredCourses.filter((course) => course.price > 0);
    }

    
    if (sortCriteria === "Title") {
      filteredCourses.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortCriteria === "Price") {
      filteredCourses.sort((a, b) => (a.price || 0) - (b.price || 0)); 
    } else if (sortCriteria === "Rating") {
      filteredCourses.sort((a, b) => b.rating - a.rating); 
    }else if (sortCriteria === "Newest") {
      filteredCourses.sort(
        (a, b) => new Date(b.created_at) - new Date(a.created_at))
    }else if (sortCriteria === "Top") {
      filteredCourses.sort((a, b) => b.views - a.views)
    }

    
    setFilterCourses(filteredCourses);
  }, [selectCategory, courses, coursesPrice, sortCriteria]);

  return (
    <>
      <Container className="d-flex flex-wrap">
        <Topic
          handleSelect={handleSelect}
          selectCategory={selectCategory}
          handlePrice={handlePrice}
          handleSort={handleSort}
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
