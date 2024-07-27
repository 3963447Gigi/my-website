import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import './index.css'
import './App.css';
import Navbar from './fragements/Navbar';
import Footer from './fragements/Footer';
import MachineLearning from './pages/MachineLearning';
import WebDevelopment from './pages/WebDevelopment';
import SoftwareDevelopment from './pages/SoftwareDevelopment';
import OtherProjects from './pages/OtherProjects';

const App = () => {
  return (
    <Router>
      <Navbar/>
      <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/machine-learning" element={<MachineLearning />} />
        <Route path="/projects/web-development" element={<WebDevelopment />} />
        <Route path="/projects/software-development" element={<SoftwareDevelopment />} />
        <Route path="/projects/other-projects" element={<OtherProjects />} />
      </Routes>
      </div>
      <Footer/>
    </Router>
  );
};

export default App;
