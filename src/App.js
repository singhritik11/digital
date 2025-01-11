import React from 'react';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import About from './about/About'
import Contact from './contact/Contact';
import Service from './services/Service';
import Branding from './services/Branding';
import Blog from './pages/Blog';
import Project from './pages/Project';
import Team from './pages/Team';
import Pricing from './pages/Pricing';
import Testimonial from './pages/Testimonial';
import Faqs from './pages/Faqs';
import Content from './services/Content'
import Digital from './services/Digital'
import Creative from './services/Creative'
import Ecomm from './services/Ecomm'
import Uiux from './services/Uiux'
import Project1 from './pages/projects/Project1';
import Project2 from './pages/projects/Project2';
import Project3 from './pages/projects/Project3';
import Project4 from './pages/projects/Project4';
import Project5 from './pages/projects/Project5';
import Project6 from './pages/projects/Project6';
import Project7 from './pages/projects/Project7';
import Project8 from './pages/projects/Project8';
import Project9 from './pages/projects/Project9';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (

    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/service" element={<Service />} />
        <Route path="/branding" element={<Branding />} />
        <Route path="/content" element={<Content />} />
        <Route path="/digital" element={<Digital />} />
        <Route path="/creative" element={<Creative />} />
        <Route path="/ecomm" element={<Ecomm />} />
        <Route path="/uiux" element={<Uiux />} />




        <Route path="/blog" element={<Blog />} />
        <Route path="/project" element={<Project />} />
        <Route path="/project1" element={<Project1 />} />
        <Route path="/project2" element={<Project2 />} />
        <Route path="/project3" element={<Project3 />} />
        <Route path="/project4" element={<Project4 />} />
        <Route path="/project5" element={<Project5 />} />
        <Route path="/project6" element={<Project6 />} />
        <Route path="/project7" element={<Project7 />} />
        <Route path="/project8" element={<Project8 />} />
        <Route path="/project9" element={<Project9 />} />






        <Route path="/team" element={<Team />} />
        <Route path="/price" element={<Pricing />} />
        <Route path="/teste" element={<Testimonial />} />
        <Route path="/faqs" element={<Faqs />} />





        {/* Catch-all route to redirect to home page */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </Router>

  )
}

export default App
