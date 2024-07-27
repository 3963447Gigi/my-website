import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import '../index.css';
import logo from '../GI.png'

function Navbar() {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleMouseEnter = () => {
    setShowDropdown(true);
  };

  const handleMouseLeave = () => {
    setShowDropdown(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link className="navbar-logo" to="/">
          <img src={logo} alt="Logo" />
        </Link>
        <Link className="nav-tab" to="/">Home</Link>
        <Link className="nav-tab" to="/about">About Me</Link>
        <Link className="nav-tab" to="/projects">Projects</Link>
        <div
          className="nav-tab projects"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <span className="hamburger-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <path fill="white" d="M3 6h18v2H3zm0 5h18v2H3zm0 5h18v2H3z" />
            </svg>
          </span>
          {showDropdown && (
            <div className="dropdown-menu">
              <Link to="/projects/machine-learning" className="dropdown-item">Machine Learning</Link>
              <Link to="/projects/web-development" className="dropdown-item">Web Development</Link>
              <Link to="/projects/software-development" className="dropdown-item">Software Development</Link>
              <Link to="/projects/other-projects" className="dropdown-item">Other Projects</Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
