import React from 'react';  
import { BrowserRouter, Routes, Route } from 'react-router-dom';  
import Navbar from './components/Navbar';  
import Home from './pages/Home';  
import Courses from './pages/Courses';  
import About from './pages/About';  
import Contact from './pages/Contact';  
import Profile from './pages/Profile'; // تأكد من وجود هذا المكون

function App() {  
  return (  
    <BrowserRouter>  
      <Navbar />  
      <Routes>  
        <Route path="/" element={<Home />} />  
        <Route path="courses" element={<Courses />} />  
        <Route path="about" element={<About />} />  
        <Route path="contact" element={<Contact />} />  
        <Route path="profile" element={<Profile />} /> {}
      </Routes>  
    </BrowserRouter>  
  );  
}  

export default App;
