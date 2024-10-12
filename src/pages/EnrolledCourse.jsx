import React, { useContext, useEffect, useState } from "react";
import { UsersContext } from "../store/UsersContext";
import supabase from "../config/supabaseClient";
import { useParams, useNavigate } from "react-router-dom";

function EnrolledCourse() {
  const { user } = useContext(UsersContext);
  const { courseId } = useParams();

  const navigate = useNavigate();

  const [courseContent, setCourseContent] = useState([]);
  const [quizLink, setQuizLink] = useState("");
  const [courseName, setCourseName] = useState("");

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
      }
      if (data) {
        setCourseContent(data[0].course_content) 
        setQuizLink(data[0].final_quiz)
      }
    };

    const fetchSpecficCourse = async () => {
      const { data, error } = await supabase
        .from("courses")
        .select("*")
        .eq("id", courseId);
      if (error) {
        console.log(error);
      }
      if (data) {
        setCourseName(data[0].title);
      }
    };
    fetchCourse();
    fetchSpecficCourse();
  }, []);

  return (
    <>
      <h1>{courseName}</h1>
      <br />
      {courseContent.map((module, index) => (
        <div key={index} >
          <input type="checkbox" name="" id="" />
          <h2>{module.title}</h2>
          <h3>{module.content}</h3>
          <br />
        </div>
      ))}
    </>
  );
}

export default EnrolledCourse;
