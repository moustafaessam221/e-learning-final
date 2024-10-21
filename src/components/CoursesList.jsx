import React, { useState, useContext, useEffect } from "react";
import CoursesCard from "./CoursesCard";
import { Container } from "react-bootstrap";
import Filters from "./Filters";
import { CoursesContext } from "../store/CourseContext";

function CoursesList() {
  const { courses } = useContext(CoursesContext);
  const [selectCategory, setSelectCategory] = useState("ALL");
  const [coursesPrice, setCoursesPrice] = useState("All");
  const [sortCriteria, setSortCriteria] = useState("Sorted by");
  const [selectedRating, setSelectedRating] = useState(0);
  const [displayedStars, setDisplayedStars] = useState("");
  const [filterCourses, setFilterCourses] = useState([]);

  const handleSelect = (category) => {
    setSelectCategory(category);
  };

  const handlePrice = (price) => {
    setCoursesPrice(price);
  };

  const handleSort = (criteria) => {
    setSortCriteria(criteria);
  };

  const handleRating = (rating) => {
    setSelectedRating(Number(rating));
  };

  useEffect(() => {
    let filteredCourses = [...courses];

    // Filter by category
    if (selectCategory !== "ALL") {
      filteredCourses = filteredCourses.filter(
        (course) => course.category && course.category.includes(selectCategory)
      );
    }

    // Filter by price
    if (coursesPrice === "Free") {
      filteredCourses = filteredCourses.filter(
        (course) => course.price === null
      );
    } else if (coursesPrice === "Paid") {
      filteredCourses = filteredCourses.filter((course) => course.price > 0);
    }

    // Filter by rating
    if (selectedRating > 0) {
      filteredCourses = filteredCourses.filter(
        (course) => course.rating >= selectedRating
      );
      setDisplayedStars("★".repeat(selectedRating) + " & up");
      if (selectedRating === 5) {
        setDisplayedStars("★★★★★");
      }
    }

    // Sorting filter
    if (sortCriteria === "Title") {
      filteredCourses.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortCriteria === "Price") {
      filteredCourses.sort((a, b) => (a.price || 0) - (b.price || 0));
    } else if (sortCriteria === "Rating") {
      filteredCourses.sort((a, b) => b.rating - a.rating);
    } else if (sortCriteria === "Newest") {
      filteredCourses.sort(
        (a, b) => new Date(b.created_at) - new Date(a.created_at)
      );
    } else if (sortCriteria === "Top") {
      filteredCourses.sort((a, b) => b.views - a.views);
    }

    setFilterCourses(filteredCourses);
  }, [selectCategory, courses, coursesPrice, sortCriteria, selectedRating]);

  return (
    <>
      <Container className="d-flex flex-wrap">
        <Filters
          handleSelect={handleSelect}
          selectCategory={selectCategory}
          handlePrice={handlePrice}
          handleSort={handleSort}
          handleRating={handleRating}
          coursesPrice={coursesPrice}
          selectedRating={selectedRating}
          stars={displayedStars}
          sortCriteria={sortCriteria}
        />
      </Container>
      <Container className="d-flex flex-wrap gap-4">
        {filterCourses.map((course) => (
          <CoursesCard
            key={course.id}
            id={course.id}
            title={course.title}
            description={course.shortDesc}
            rating={course.rating}
            price={course.price}
            views={course.views}
            author={course.author}
            category={course.category}
            createdAt={course.created_at}
          />
        ))}
      </Container>
    </>
  );
}

export default CoursesList;
