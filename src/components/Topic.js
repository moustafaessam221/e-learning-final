import React, { useEffect, useState } from "react";
import { Dropdown } from "react-bootstrap";
import { useContext } from "react";
import { CoursesContext } from "../store/CourseContext";

function Topic({ handleSelect, selectCategory, handlePrice,handleSort }) {
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
    console.log(uniqueCategories);
  }, [courses]);

  return (
    <>
      {/* Category Dropdown */}
      <Dropdown onSelect={(eventKey) => handleSelect(eventKey)}>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          {selectCategory}
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
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Price
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item eventKey="All">All</Dropdown.Item>
          <Dropdown.Item eventKey="Free">Free</Dropdown.Item>
          <Dropdown.Item eventKey="Paid">Paid</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
{/*sorted Dropdwon */}

<Dropdown onSelect={(eventKey) => handleSort(eventKey)}>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Sorted
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item eventKey="Title">title</Dropdown.Item>
          <Dropdown.Item eventKey="Rating">rating</Dropdown.Item>
          <Dropdown.Item eventKey="Newest">newest</Dropdown.Item>
          <Dropdown.Item eventKey="Top">top</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>


    </>
  );
}

export default Topic;