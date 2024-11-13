import React from "react";
import './app.css';
import Header from "./components/common/heading/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/about/About";
import CourseHome from "./components/all courses/CourseHome";
import Team from "./components/Home/team/Team";
import Price from "./components/pricing/Price";
import Faq from "./components/pricing/Faq"
import Blog from "./components/blog/Blog";
import Contact from "./components/contact/Contact";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<CourseHome />} />
          <Route path="/team" element={<Team />} />
          <Route path="/pricing" element={<Price />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/journal" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
