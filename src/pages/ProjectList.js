import React from 'react';
import { Link } from 'react-router-dom';

const ProjectList = () => {
  return (
    <div className="project-list">
      
    <div className="project-category">
        <Link to="/projects/machine-learning">
            <h2>Machine Learning & AI</h2>
            <ul>
            <li>Practical Data Science</li>
            <li>Machine Learning</li>
            <li>Introduction to Artificial Intelligence</li>
            <li>Programming Autonomous Robots</li>
            </ul>
        </Link>
    </div>
     
     
    <div className="project-category">
        <Link to="/projects/web-development">
            <h2>Web Development</h2>
            <ul>
            <li>Full Stack Development</li>
            </ul>
        </Link>
    </div>
      
      
    <div className="project-category">
        <Link to="/projects/software-development">
            <h2>Software Development</h2>
            <ul>
            <li>Programming Project 1</li>
            </ul>
        </Link>
    </div>
      
    <div className="project-category">
        <Link to="/projects/other-projects">
            <h2>Other Projects</h2>
            <ul>
            <li>Others</li>
            </ul>
        </Link>
    </div>
      
    </div>
  );
};

export default ProjectList;
