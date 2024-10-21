import React, { useContext, useEffect, useState } from "react";
import { Dropdown } from "react-bootstrap";
import { CoursesContext } from "../store/CourseContext";
import "../Style.css";

function Filters({
  handleSelect,
  selectCategory,
  handlePrice,
  handleSort,
  handleRating,
  coursesPrice,
  selectedRating,
  stars,
  sortCriteria,
}) {
  const [coursesCategories, setCoursesCategories] = useState([]);

  const { courses } = useContext(CoursesContext);

  function removeDuplicates(arr) {
    return arr.filter((item, index) => arr.indexOf(item) === index);
  }

  useEffect(() => {
    const categories = courses.map((course) => course.category);
    const filteredCategories = categories.filter(
      (category) => category !== null
    );
    const flatCategories = filteredCategories.flat();
    const uniqueCategories = removeDuplicates(flatCategories);
    setCoursesCategories(uniqueCategories);
  }, [courses]);

  return (
    <div className="d-flex flex-wrap container justify-content-between mt-5 mb-5">
      {/* Category Dropdown */}
      <Dropdown onSelect={(eventKey) => handleSelect(eventKey)}>
        <Dropdown.Toggle
          id="dropdown-basic"
          className="custom-dropdown-width mb-1"
        >
          {selectCategory === "ALL" ? "Category" : selectCategory}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item eventKey="ALL">ALL</Dropdown.Item>
          {coursesCategories.map((category) => (
            <Dropdown.Item key={category} eventKey={category}>
              {category}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>

      {/* Price Dropdown */}
      <Dropdown onSelect={(eventKey) => handlePrice(eventKey)}>
        <Dropdown.Toggle
          id="dropdown-basic"
          className="custom-dropdown-width mb-1"
        >
          {coursesPrice === "All" ? "Price" : coursesPrice}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item eventKey="All">All</Dropdown.Item>
          <Dropdown.Item eventKey="Free">Free</Dropdown.Item>
          <Dropdown.Item eventKey="Paid">Paid</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      {/*Rating Dropdwon */}
      <Dropdown onSelect={(eventKey) => handleRating(eventKey)}>
        <Dropdown.Toggle
          id="dropdown-basic"
          className="custom-dropdown-width mb-1"
        >
          {selectedRating === 0 ? "Rating" : stars}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item eventKey="0">All</Dropdown.Item>
          <Dropdown.Item eventKey="1">★ & up</Dropdown.Item>
          <Dropdown.Item eventKey="2">★★ & up</Dropdown.Item>
          <Dropdown.Item eventKey="3">★★★ & up</Dropdown.Item>
          <Dropdown.Item eventKey="4">★★★★ & up</Dropdown.Item>
          <Dropdown.Item eventKey="5">★★★★★ & up</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      {/*Sorting Dropdwon */}
      <Dropdown onSelect={(eventKey) => handleSort(eventKey)}>
        <Dropdown.Toggle
          id="dropdown-basic"
          className="custom-dropdown-width mb-1"
        >
          {sortCriteria}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item eventKey="Title">Title</Dropdown.Item>
          <Dropdown.Item eventKey="Newest">Newest</Dropdown.Item>
          <Dropdown.Item eventKey="Price">Price</Dropdown.Item>
          <Dropdown.Item eventKey="Top">Most Popular</Dropdown.Item>
          <Dropdown.Item eventKey="Rating">Highest Rating</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}

export default Filters;
