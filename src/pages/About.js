import React from 'react';
import photo from '../gigi.jpg'

const About = () => {
  return (
    <div>
    <div className="about">
        <div className='about-column'>
            <div className='text'>
                <h1>Welcome to my Journey</h1>
                <p>Embark on an adventure through my projects, 
                    guided by passion and dedication. Every line of code tells a story, 
                    and I'm excited to share mine with you. Let's dive in together!</p>
                <p>Join me in exploring the world of technology, where creativity 
                    meets functionality. Your support means everything as I craft my 
                    digital footprint in this vast online landscape.</p>
            </div>
            <div className='image'> 
                <img src={photo} alt="<Photo>" />
            </div>
        </div>
    </div>
    </div>
  );
};

export default About;
