import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { CoursesContext } from "../store/CourseContext";
import CoursesCard from "../components/CoursesCard";
import CoursesList from "../components/CoursesList";
import BannerImage from "../components/InstructorBanner";

function Courses() {

  const {courses} = useContext(CoursesContext);

  return (
    <>

      {/* Filters */}
      <CoursesList courses={courses} />
      <BannerImage />
    </>
  );
}

export default Courses;
