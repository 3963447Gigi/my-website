import React from 'react';
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <h1>Welcome to my portfolio!</h1>
      <p>As a fresh graduate student in Computer Science, I am excited to showcase my journey, projects, and creativity. Crafting this website has been a labor of love, and I can't wait to share it with you!</p>
      <Link to="/projects"><button className='btn'>Check my projects</button></Link>
    </div>
  );
};

export default Home;
