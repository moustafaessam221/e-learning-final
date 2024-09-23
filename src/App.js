import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import supabase from "./config/supabaseClient";
import Courses from "./pages/Courses";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import { CoursesContext } from "./store/CourseContext";
import CourseDetails from "./components/CourseDetails";


function App() {
  const [courses, setCourses] = useState(null);
  const [fetchError, setFetchError] = useState(null);

  // fetching the courses data
  useEffect(() => {
    const fetchCourses = async () => {
      const { data, error } = await supabase.from("courses").select();
      if (error) {
        setFetchError("Could not fetch courses");
        setCourses(null);
        console.log(error);
      }
      if (data) {
        setCourses(data);
        setFetchError(null);
      }
    };
    fetchCourses();
  }, []);

  return (
    <>
      <CoursesContext.Provider value={{ courses, fetchError }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="courses" element={<Courses />} />
            <Route path="profile" element={<Profile />} />
            <Route path="courses/:id" element={<CourseDetails />} />
          </Routes>
        </BrowserRouter>
      </CoursesContext.Provider>
    </>
  );
}

export default App;
