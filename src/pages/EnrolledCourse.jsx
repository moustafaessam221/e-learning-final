import React, { useContext, useEffect, useState } from "react";
import { UsersContext } from "../store/UsersContext";
import supabase from "../config/supabaseClient";
import { useParams, useNavigate } from "react-router-dom";
import { Container, Row, Col, ListGroup, Button } from 'react-bootstrap';

function EnrolledCourse() {
  const { user } = useContext(UsersContext);
  const { courseId } = useParams();
  const navigate = useNavigate();

  const [courseContent, setCourseContent] = useState([]);
  const [quizLink, setQuizLink] = useState("");
  const [courseName, setCourseName] = useState("");
  const [completedItems, setCompletedItems] = useState([]);

  useEffect(() => {
    if (!user?.id) {
      navigate("/login");
      return;
    }
  
    const fetchCourse = async () => {
      const { data, error } = await supabase
        .from("enrolled_courses")
        .select("*")
        .eq("user_id", user.id)
        .eq("course_id", courseId);
  
      if (error) {
        console.log(error);
      } else {
        setCourseContent(data[0].course_content);
        setQuizLink(data[0].final_quiz);
        setCompletedItems(Array(data[0].course_content.length).fill(false));
      }
    };
  
    const fetchSpecificCourse = async () => {
      const { data, error } = await supabase
        .from("courses")
        .select("*")
        .eq("id", courseId);
  
      if (error) {
        console.log(error);
      } else {
        setCourseName(data[0].title);
      }
    };
  
    fetchCourse();
    fetchSpecificCourse();


  }, [user, courseId, navigate]);
  const handleCheckboxChange = (index) => {
    const newCompletedItems = [...completedItems];
    newCompletedItems[index] = !newCompletedItems[index];
    setCompletedItems(newCompletedItems);
  };

  const allCompleted = completedItems.every(item => item);

  return (
    <Container className="my-5">
      <h1>{courseName}</h1>
      <Row>
        <Col md={8}>
          {courseContent.map((module, index) => (
            <div key={index}>
              <h2 className="my-4">{module.title}</h2>
              <h5>{module.content}</h5>
              <br />
            </div>
          ))}
        </Col>
        <Col md={4}>
          <ListGroup>
            {courseContent.map((module, index) => (
              <ListGroup.Item key={index}>
                <input className="form-check-input me-3"
                  type="checkbox"
                  checked={completedItems[index]}
                  onChange={() => handleCheckboxChange(index)}
                />
                {module.title}
                {completedItems[index] && <span className="text-success float-end">Completed</span>}

              </ListGroup.Item>
            ))}
          </ListGroup>
          {allCompleted && (
            <Button variant="primary" className="mt-3" href={quizLink}>
              Go to Quiz
            </Button>
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default EnrolledCourse;
