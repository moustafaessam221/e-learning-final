import React, { useContext, useEffect, useState } from "react";
import { Accordion, Button, Container } from "react-bootstrap";
import supabase from "../config/supabaseClient";
import { UsersContext } from "../store/UsersContext";

function AdminCourses({}) {
  const { user, role } = useContext(UsersContext);
  const [courses, setCourses] = useState([]);

  // check if user is admin or not to get access to this page
  useEffect(() => {
    if (user?.role !== "admin") {
      window.location.href = "/";
    }
  }, [role]);

  useEffect(() => {
    const fetchCourses = async () => {
      const { data, error } = await supabase.from("courses").select();
      if (error) {
        console.error("Error fetching courses:", error);
        return;
      }
      setCourses(data);
    };
    fetchCourses();
  }, []);

  // delete course functionality
  // DANGER || THIS CANNOT BE UNDONE AND IT IS NOT DONE YET

  //   const deleteCourse = async (courseId) => {
  //     const { error } = await supabase
  //       .from("courses")
  //       .delete()
  //       .eq("id", courseId);
  //     if (error) {
  //       console.error("Error deleting course:", error);
  //       return;
  //     }
  //      toast.success("Course deleted successfully!");
  //     // Refresh the course list
  //     const { data, error: refreshError } = await supabase
  //       .from("courses")
  //       .select();
  //     if (refreshError) {
  //       console.error("Error refreshing course list:", refreshError);
  //       return;
  //     }
  //     setCourses(data);
  //   };

  console.log(courses);
  return (
    <Container>
      {courses.map((course) => (
        <Accordion defaultActiveKey="0" key={course.id}>
          <Accordion.Item eventKey={course.id}>
            <Accordion.Header>{course.title}</Accordion.Header>
            <Accordion.Body className="d-flex flex-column">
              {course.description}
              <br />
              <Button
                variant="danger"
                className="mt-3 px-5 align-self-end"
                //   onClick={() => deleteCourse(course.id)}
              >
                Delete
              </Button>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      ))}
    </Container>
  );
}

export default AdminCourses;
