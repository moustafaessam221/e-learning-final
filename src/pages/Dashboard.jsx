import React, { useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { CoursesContext } from "../store/CourseContext";
import AdminCourses from "../components/AdminCourses";

const AdminDashboard = () => {
  const { courses } = useContext(CoursesContext);

  return (
    // <Container style={{ height: "50vh" }}>
    //   {/* Add your admin dashboard content here */}
    //   <Row className="flex justify-content-center align-items-center my-5">
    //     <Col>
    //       <h1 className="text-center mt-5">Admin Dashboard</h1>
    //     </Col>
    //   </Row>
    // </Container>
    <>
      <br />
      <h1 className="text-center mt-2 mb-5">Admin Dashboard</h1>
      <AdminCourses courses={courses} />
    </>
  );
};

export default AdminDashboard;
