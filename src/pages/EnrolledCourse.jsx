import React, { useContext, useEffect, useState } from "react";
import { UsersContext } from "../store/UsersContext";
import supabase from "../config/supabaseClient";
import { useParams, useNavigate } from "react-router-dom";
import { Container, Row, Col, ListGroup, Button, ProgressBar } from "react-bootstrap";
import Comments from "../components/Comments";
import AddComments from "../components/AddComments";

function EnrolledCourse() {
  const { user } = useContext(UsersContext);
  const { courseId } = useParams();
  const navigate = useNavigate();

  const [courseContent, setCourseContent] = useState([]);
  const [quizLink, setQuizLink] = useState("");
  const [courseName, setCourseName] = useState("");
  const [completedItems, setCompletedItems] = useState([]);
  const [courseComments, setCourseComments] = useState([]);
  const [progress, setProgress] = useState(0); // For the progress bar

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
        setCourseContent(data[0].course_content || []);
        setQuizLink(data[0].final_quiz);

        const completedContent = data[0].completed_content || [];
        setCompletedItems(completedContent);

        setProgress((completedContent.length / data[0].course_content.length) * 100);
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
        setCourseComments(data[0].comments);
      }
    };

    fetchCourse();
    fetchSpecificCourse();
  }, [user, courseId, navigate, courseComments]);

  const handleCheckboxChange = async (index) => {
    const newCompletedItems = [...completedItems];

    if (newCompletedItems.includes(index)) {
      newCompletedItems.splice(newCompletedItems.indexOf(index), 1);
    } else {
      newCompletedItems.push(index);
    }

    setCompletedItems(newCompletedItems);

    // Update the database
    const { data, error } = await supabase
      .from("enrolled_courses")
      .update({ completed_content: newCompletedItems })
      .eq("user_id", user.id)
      .eq("course_id", courseId);

    if (error) {
      console.log("Error updating completed content", error);
    }

    // Calculate and set progress
    setProgress((newCompletedItems.length / courseContent.length) * 100);
  };

  const allCompleted = completedItems.length === courseContent.length;

  return (
    <Container className="my-5">
      <h1>{courseName}</h1>

      {/* Progress Bar */}
      <ProgressBar now={progress} label={`${Math.round(progress)}%`} className="my-4" />

      <Row>
        <Col md={8} xs={12}>
          {courseContent.map((module, index) => (
            <div key={index}>
              <h2 className="my-4">{module.title}</h2>
              <h5>{module.content}</h5>
              <br />
            </div>
          ))}
        </Col>
        <Col md={4} xs={12}>
          <ListGroup>
            {courseContent ? (
              courseContent.map((module, index) => (
                <ListGroup.Item key={index}>
                  <input
                    className="form-check-input me-3"
                    type="checkbox"
                    checked={completedItems.includes(index)} // Check if the item is completed
                    onChange={() => handleCheckboxChange(index)}
                  />
                  {module.title}
                  {completedItems.includes(index) && (
                    <span className="text-success float-end">Completed</span>
                  )}
                </ListGroup.Item>
              ))
            ) : (
              <h5 className="text-muted">No modules yet</h5>
            )}
          </ListGroup>

          {allCompleted && (
            <Button
              variant="primary"
              className="mt-3"
              href={quizLink.startsWith("http") ? quizLink : `https://${quizLink}`}
              target="_blank"
            >
              Go to Quiz
            </Button>
          )}
        </Col>
      </Row>

      {/* Comments Section */}
      <AddComments />
      <Comments courseComments={courseComments} />
    </Container>
  );
}

export default EnrolledCourse;
