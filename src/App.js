import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import supabase from "./config/supabaseClient";
import Courses from "./pages/Courses";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import { CoursesContext } from "./store/CourseContext";
import CourseDetails from "./components/CourseDetails";
import Navigationbar from "./FixedComponent/Navbar";
import Footer from "./components/Footer";
import PricingCard from "./pages/Pricing";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs";
import AddCoursePage from "./pages/AddCoursePage";
import { UsersContext } from "./store/UsersContext";
import SearchResults from "./pages/SearchResults";
import EnrolledCourse from "./pages/EnrolledCourse";
import Dashboard from "./pages/Dashboard";
import { Toaster } from "react-hot-toast";

function App() {
  const [courses, setCourses] = useState([]);
  const [fetchError, setFetchError] = useState(null);
  const [role, setRole] = useState(null);
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  function logout() {
    setUser(null);
    setRole(null);
    localStorage.removeItem("user");
    localStorage.removeItem("role");
  }

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
      <CoursesContext.Provider value={{ courses, fetchError }}>
        <UsersContext.Provider value={{ user, setUser, role, setRole, logout }}>
          <BrowserRouter>
            <Toaster />
            <Navigationbar />
            <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="courses" element={<Courses />} />
              <Route path="login" element={<Login />} />
              <Route path="signup" element={<Signup />} />
              <Route path="profile" element={<Profile />} />
              <Route path="courses/:id" element={<CourseDetails />} />
              <Route path="price" element={<PricingCard />} />
              <Route path="/contact" element={<ContactUs />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/add-course" element={<AddCoursePage />} />
              <Route path="search" element={<SearchResults />} />
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="/course/:id" element={<CourseDetails />} />
              <Route path="/:userId/:courseId" element={<EnrolledCourse />} />
            </Routes>
            </main>
            <Footer />
          </BrowserRouter>
        </UsersContext.Provider>
      </CoursesContext.Provider>
  );
}

export default App;
